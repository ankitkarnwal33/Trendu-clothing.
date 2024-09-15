"use server";
import connectDB from "@/lib/connectDB";
import { hashUserPassword, verifyUserPassword } from "@/lib/hashPassword";
import User from "@/models/user";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

type Payload = {
  id: string;
  name: string;
  email: string;
};
export type Result = {
  status: string;
  message?: string;
  data?: {
    name: string;
  };
};

let globalCookie: string | null;

//Function for generate tokens.
const secret: string = process.env.SECRET_KEY;
function generateToken(payload: Payload): string | null {
  const token = jwt.sign(payload, secret, {
    expiresIn: "7d",
    algorithm: "HS256",
  });
  if (token) return token;
  return null;
}

function verifyToken(token: string): any | null {
  if (!token) return null;
  const payload = jwt.verify(token, secret, { algorithms: ["HS256"] });
  return payload;
}

export async function signUp(formData: FormData): Promise<Result> {
  try {
    await connectDB();
  } catch (error) {
    return {
      status: "failed",
      message: "Some error occured 🥲. Please try again later.",
    };
  }
  const email: string = formData.get("email").toString();
  const name: string = formData.get("name").toString();
  const number: number = +formData.get("number").toString();
  const password: string = formData.get("password").toString();
  //Edge cases

  if (name.length < 2) {
    return {
      status: "failed",
      message: "Name should be at least 2 characters long.",
    };
  }
  let num = number.toString().length;
  if (num < 10 || num > 10) {
    return {
      status: "failed",
      message: "Not a valid number.",
    };
  }
  if (!email.includes("@") || !email.includes(".")) {
    return {
      status: "failed",
      message: "Please enter a valid email address.",
    };
  }
  if (password.trim().length < 8) {
    return {
      status: "failed",
      message: "Password must be at least 8 characters long.",
    };
  }

  const { hashedPassword, salt } = hashUserPassword(password); //Hashing user password.
  try {
    const data = await User.create({
      name,
      number,
      email,
      password: hashedPassword,
      salt,
    });
    return {
      status: "success",
      data: {
        name: data.name,
      },
    };
  } catch (error) {
    if (error.code === 11000) {
      //Duplicate id found error code from mongodb
      if (error.message.includes("email")) {
        return {
          status: "failed",
          message: `Email ${email} already exists.`,
        };
      }
      if (error.message.includes("number")) {
        return {
          status: "failed",
          message: `Number ${number} already exists.`,
        };
      }
    } else {
      return {
        status: "failed",
        message: "Server error! Try after some time.",
      };
    }
  }
}

export async function login(formData: FormData): Promise<Result> {
  const email: string = formData.get("email").toString();
  const password: string = formData.get("password").toString();
  //Edge cases
  if (password.trim().length < 8) {
    return {
      status: "failed",
      message: "Invalid Password !",
    };
  }
  if (!email.trim().includes("@") || !email.includes(".")) {
    return {
      status: "failed",
      message: "Invalid Email Address",
    };
  }
  try {
    await connectDB().catch((err): never => {
      throw new Error(err.message);
    });
    let user = await User.findOne({ email });
    if (user === null) {
      return {
        status: "failed",
        message: "User not found. Check your email.",
      };
    }
    const passwordDetails = {
      storedPassword: user.password,
      userPassword: password,
      salt: user.salt,
    };
    const isValidPassword: boolean = verifyUserPassword(passwordDetails);
    if (!isValidPassword) {
      return {
        status: "failed",
        message: "Oo Wrong Password, Try again",
      };
    }
    //Double check for authenticated.
    if (user && isValidPassword) {
      //User is authenticated
      const token: string = generateToken({
        id: user._id,
        name: user.name,
        email: user.email,
      });
      if (token === null) {
        //Token is not generated
        return {
          status: "failed",
          message: "Something went wrong.Try again.",
        };
      }
      //Everything is okk, set the session in cookies for authentication
      cookies().set("session", token, {
        expires: new Date(Date.now() + 60 * 60 * 24 * 1000),
        httpOnly: true,
      });
      return {
        status: "success",
        data: {
          name: user.name,
        },
      };
    }
  } catch (error) {
    return {
      status: "failed",
      message: "Some error occured. Please try again later.",
    };
  }
}
export async function logout(): Promise<never> {
  cookies().set("session", "", { expires: new Date(0) });
  redirect("/login");
}

export async function initializeSession() {
  const cookieStore = cookies();
  globalCookie = cookieStore.get("session")?.value.toString();
}

export async function getSessionDetails(): Promise<null | Payload> {
  if (!globalCookie) return null;
  const result = verifyToken(globalCookie);
  return result;
}

//Update session on each request.

// export async function updateSession(
//   request: NextRequest
// ): Promise<NextResponse> {
//   const session: string = request.cookies.get("session")?.value;
//   if (!session) return NextResponse.next();
//   const payload: Payload = await getSessionDetails(session);
//   const response: NextResponse = NextResponse.next();
//   response.cookies.set({
//     name: "session",
//     value: generateToken(payload),
//     expires: new Date(Date.now() + 60 * 60 * 24 * 1000),
//     httpOnly: true,
//     path: "/",
//   });
//   return response;
// }
