import { NextRequest,NextResponse } from "next/server";
import prisma from "@/prisma/client";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request:NextRequest){

    try {

    const body = await request.json();
    const {email,password} = body;
    console.log(body);

    const isUserExists = await prisma.userDetails.findFirst({ where: { email: email } });
    if(!isUserExists){
        return NextResponse.json({error: "User does not exist"}, {status: 401})
    }

    console.log("user exists");

     //check if password is correct
     const validPassword = await bcryptjs.compare(password, isUserExists.password)
     if(!validPassword){
         return NextResponse.json({error: "Invalid password"}, {status: 402})
     }
     console.log(isUserExists);

        //create token data
        const tokenData = {
        id: isUserExists.id,
        username: isUserExists.userName,
        email: isUserExists.email
    }
    //create token
    //const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: "1d"})
    const token = await jwt.sign(tokenData, "nextjstokensecretforreact", {expiresIn: "1d"})

    const response = NextResponse.json({
        message: "Login successful",
        success: true,
    })

    response.cookies.set("token", token, {
        httpOnly: true, 
    })

    return response;
} catch (error:any) {
    return NextResponse.json({error: error.message}, {status: 500})
}
}