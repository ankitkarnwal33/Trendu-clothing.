"use server";
import connectDB from "@/lib/connectDB";
import { hashUserPassword, verifyUserPassword } from "@/lib/hashPassword";
import User from '@/models/user'
import jwt from 'jsonwebtoken';
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
//Function for generate tokens.
const secret = process.env.SECRET_KEY;
function generateToken(payload) {
    const token = jwt.sign(payload, secret, {
        expiresIn: "1d",
        algorithm: "HS256"
    });
    if (token) return token;
    return null;
}
function verifyToken(token) {
    if (!token) return null;
    const payload = jwt.verify(token, secret, { algorithms: "HS256" })
    return payload;
}

export async function signUp(formData) {
    try {
        await connectDB();
    } catch (error) {
        return {
            status: "failed",
            message: "Some error occured 🥲. Please try again later.",

        }
    }
    const email = formData.get("email");
    const name = formData.get("name");
    const number = formData.get("number");
    const password = formData.get("password");
    if (name.length < 2) {
        return {
            status: "failed",
            message: "Name should be at least 2 characters long."
        }
    }
    if (number.length < 10 || number.length > 10) {
        return {
            status: "failed",
            message: "Not a valid number."
        }
    }
    if (!email.includes("@") || !email.includes(".")) {
        return {
            status: "failed",
            message: "Please enter a valid email address."
        }
    }
    if (password.trim().length < 8) {
        return {
            status: "failed",
            message: "Password must be at least 8 characters long."
        }
    }

    const { hashedPassword, salt } = hashUserPassword(password); //Hashing user password.
    try {
        const data = await User.create({
            name,
            number,
            email,
            password: hashedPassword,
            salt
        });
        console.log(data);
        return {
            status: "success",
            data: {
                name: data.name
            }
        }
    } catch (error) {
        if (error.code === 11000) { //Duplicate id found error code from mongodb
            if (error.message.includes("email")) {
                return {
                    status: "failed",
                    message: `Email ${email} already exists.`
                }

            }
            if (error.message.includes("number")) {
                return {
                    status: "failed",
                    message: `Number ${number} already exists.`
                }
            }
        } else {
            return {
                status: "failed",
                message: "Some error occurred. Try again."
            }
        }
    }
}

export async function login(formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    //Edge cases
    if (password.trim().length < 8) {
        return {
            status: "failed",
            message: "Invalid Password !",
        }
    }
    if (!email.trim().includes("@") || !email.includes(".")) {
        return {
            status: "failed",
            message: "Invalid Email Address",
        }
    }
    try {
        await connectDB().catch((err) => { throw new Error(err.message) });
        let user = await User.findOne({ email });
        if (user === null) {
            return {
                status: "failed",
                message: "User not found. Check your email."
            }
        }
        const isValidPassword = verifyUserPassword(user.password, password, user.salt);
        if (!isValidPassword) {
            return {
                status: "failed",
                message: "Oo Wrong Password, Try again"
            }
        }
        //Double check for authenticated.
        if (user && isValidPassword) { //User is authenticated
            const token = generateToken({ id: user._id, name: user.name, email: user.email });
            const expiresIn = new Date(Date.now() + 60 * 60 * 24 * 1000);  //1day
            if (token === null) { //Token is not generated
                return {
                    status: "failed",
                    message: "Something went wrong.Try again."
                }
            }
            //Everything is okk, set the session in cookies for authentication
            cookies().set("session", token, { expiresIn, httpOnly: true })
            return {
                status: "success",
                data: {
                    name: user.name
                }
            };
        }
    } catch (error) {
        return {
            status: "failed",
            message: "Some error occured. Please try again later."
        }
    }
}
export async function logout() {
    cookies().set("session", "", { expires: new Date(0) });
    redirect("/login");
}

export async function getSessionDetails() {
    const session = cookies().get("session")?.value;
    if (!session) return null;
    const result = verifyToken(session);
    return result;
}

export async function updateSession(request) {
    const session = request.cookies.get("session")?.value;
    if (!session) return NextResponse.next();
    const payload = await getSessionDetails(session);
    const response = NextResponse.next();
    response.cookies.set({
        name: "session",
        value: generateToken(payload),
        expiresIn: new Date(Date.now() + 60 * 60 * 24 * 1000),
        httpOnly: true,
        path: "/"
    })
    return response;
}

