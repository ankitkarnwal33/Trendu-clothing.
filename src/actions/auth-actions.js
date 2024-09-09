"use server";

import connectDB from "@/lib/connectDB";
import { hashUserPassword } from "@/lib/hashPassword";
import User from '@/models/user'
import { redirect } from 'next/navigation'


export async function signUp(prevState, formData) {
    await connectDB();
    const email = formData.get("email");
    const name = formData.get("name");
    const password = formData.get("password");
    let errors = {}
    if (name.length < 2) {
        errors.name = "Name should be at least 2 characters long."
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
    let redirectPath = null;
    try {
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            salt
        }).then((user) => {
            redirectPath = "/cart"
        })
    } catch (error) {
        if (error.code === 11000) { //Duplicate email id found error code from mongodb
            return {
                errors: {
                    email: `Email ${email} already exists.`
                }
            }
        } else {
            return {
                errors: {
                    error_main: "An unexpected error has been occured",
                }
            }
        }
    } finally {
        if (redirectPath === "/cart") //Redirect only if there is no error.
            redirect(redirectPath);
    }
}