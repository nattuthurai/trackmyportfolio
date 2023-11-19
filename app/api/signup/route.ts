import { NextRequest,NextResponse } from "next/server";
import { createUserDetailsSchema } from "@/app/validationSchema";
import prisma from "@/prisma/client";
import bcryptjs from "bcryptjs";

export async function POST(request:NextRequest){
    const body = await request.json();
    const validation = createUserDetailsSchema.safeParse(body);
    if(!validation.success) return NextResponse.json(validation.error.errors,{status:400});

    const {firstName,lastName,userName,email, password} = body;

    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const isUserExists = await prisma.userDetails.findFirst({ where: { email: email } });

    if(isUserExists){
        return NextResponse.json({error: "User already exists"}, {status: 401})
    }

     const newUserDetails = await prisma.userDetails.create({
        data: {
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            email:email,
            password:hashedPassword,
        },
     })
    return      
}

