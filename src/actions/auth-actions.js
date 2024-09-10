"use server";

import connectDB from "@/lib/connectDB";
import { hashUserPassword, verifyUserPassword } from "@/lib/hashPassword";
import User from '@/models/user'
import crypto from 'node:crypto'
import { notFound, redirect } from 'next/navigation'
import jwt from 'jsonwebtoken'
import { cookies } from "next/headers";
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
    let errors = {}
    try {
        await connectDB();
    } catch (error) {
        return {
            errors: {
                dbError: "Some error occured 🥲. Please try again later.",
            }
        }
    }

    const email = formData.get("email");
    const name = formData.get("name");
    const number = formData.get("number");
    const password = formData.get("password");
    if (name.length < 2) {
        errors.name = "Name should be at least 2 characters long."
    }
    if (number.length < 10 || number.length > 10) {
        errors.number = "Mobile number should be 10 digits."
    }
    if (!email.includes("@") || !email.includes(".")) {
        errors.email = "Please enter a valid email address."
    }
    if (password.trim().length < 8) {
        errors.password = "Password must be at least 8 characters long."
    }

    if (Object.keys(errors).length > 0) {
        return {
            errors,
        }
    }
    const { hashedPassword, salt } = hashUserPassword(password); //Hashing user password.
    try {
        const user = await User.create({
            name,
            number,
            email,
            password: hashedPassword,
            salt
        });
        if (user === null) return { errors: { signup: "Some error occured. Try again." } }//sign up failed
        const { name, email, _id } = user; //User created
        const token = generateToken({ id, email, name });
        const expiresIn = new Date(Date.now() + 60 * 60 * 24 * 1000);
        if (!token) { //User created but token not generated
            return {
                errors: {
                    token: "You have signed up. Please login."
                }
            }
        }

        cookies().set("session", token, { expiresIn, httpOnly: true });

    } catch (error) {
        if (error.code === 11000) { //Duplicate id found error code from mongodb
            if (error.message.includes("email")) {
                return {
                    errors: {
                        email: `Email ${email} already exists.`
                    }
                }
            }
            if (error.message.includes("number")) {
                return {
                    errors: {
                        number: `Number ${number} already exists.`
                    }
                }
            }
        } else {
            return {
                errors: {
                    error_main: error.message,
                }
            }
        }
    }
}

export async function login(formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    let errors = {};
    console.log(email, password);
    // let redirectPath = null;
    if (password.trim().length < 8) {
        errors.password = "Invalid password !";
    }
    if (!email.trim().includes("@") || !email.includes(".")) {
        errors.email = "Invalid email address";
    }
    if (Object.keys(errors).length > 0) {
        return {
            errors,
        }
    }
    try {
        await connectDB();
        let user = await User.findOne({ email });
        if (user === null) {
            return {
                errors: {
                    notFound: "User not found !. Did you signed up ?",
                }
            }
        }
        const isValidPassword = verifyUserPassword(user.password, password, user.salt);
        if (!isValidPassword) {
            return {
                errors: {
                    wrongPassword: "Wrong password ! Try again."
                }
            }
        }
        //Double check for authenticated.
        if (user && isValidPassword) { //User is authenticated
            const token = generateToken({ id: user._id, name: user.name, email: user.email });
            const expiresIn = new Date(Date.now() + 60 * 60 * 24 * 1000);  //1day
            if (token === null) { //Token is not generated
                return {
                    errors: {
                        token: "Some error occured. try again later."
                    }
                }
            }
            cookies().set("session", token, { expiresIn, httpOnly: true })
        }

    } catch (error) {
        return {
            errors: {
                err: "Some error occured. Please try again later."
            }
        }
    }// finally {
    //     if (redirectPath === "/")
    //         redirect("/");
    // }

}
export async function logout() {
    cookies().set("session", "", { expires: new Date(0) });
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