import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
// import { isTeacher } from "@/lib/teacher";

export async function POST(req: Request)
{
    try{
        const { userId } = auth();
        const { title,discount} = await req.json();
        // const {  } = await req.json();
        console.log("wow man here");
        const discountValue = parseFloat(discount);
        if(!userId){
            return new NextResponse("Unauthorized", {status: 401});
        }
        const coupon = await db.coupon.create({
            data:{
                userId,
                title,
                discount:discountValue,
               
            }
        });
        return  NextResponse.json(coupon, { status: 200 }); 
    }
    catch(error){
        console.log("[COUPONS]",error);
      
        return new NextResponse("Internal Error",{status:500});
    }
}