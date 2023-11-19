import { NextRequest,NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function POST(request:NextRequest) {
    const body = await request.json();
    const {stockName,stockPrice,dayHigh,dayLow,yearHigh,yearLow,peRatio,earningPerShare,stockStatus}= body;
    const newStockDetails = await prisma.stockDetails.create({
        data:{
            stockName:stockName,
            stockPrice:stockPrice,
            dayHigh:dayHigh,
            dayLow:dayLow,
            yearHigh:yearHigh,
            yearLow:yearLow,
            peRatio:peRatio,
            earningPerShare:earningPerShare,
            stockStatus:stockStatus
        }
    })
    return;
}