import { NextRequest,NextResponse } from "next/server";
import { createUserDetailsSchema } from "@/app/validationSchema";
import prisma from "@/prisma/client";

export async function POST(request:NextRequest){
    const body = await request.json();
    const validation = createUserDetailsSchema.safeParse(body);
    if(!validation.success) return NextResponse.json(validation.error.errors,{status:400});

    const newUserDetails = await prisma.userDetails.create({
        data:{firstName:body.firstName,lastName:body.lastName,email:body.email,password:body.password}
    })

    return NextResponse.json(newUserDetails,{status:201});
}

