// // app/api/coupon-validate/route.ts

// import { NextResponse } from "next/server";
// import { db } from '@/lib/db';
// import { auth } from "@clerk/nextjs";

// export  async function postHandler({ body }: { body: { couponCode: string } }) {
//   const { couponCode } = body;

//   try {
//     const { userId } = auth();
//     if(!userId){
//         return new NextResponse("Unauthorized", {status: 401});
//     }
    
//     const coupon = await db.coupon.findFirst({
//       where: {
//         title: couponCode,
//       },
//     });

//     if (coupon) {
//       return NextResponse.json({ valid: true, coupon });
//     } else {
//       return NextResponse.json({ valid: false });
//     }
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
//   }
// }

// app/api/coupon-validate/route.ts
// pages/api/coupon.ts// pages/api/coupon.ts
// pages/api/coupon/compare.ts

//Golden dont touch
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userInput } = await req.json(); // Assuming user input is sent in the request body

    const coupons = await db.coupon.findMany();
    const matchingCoupons = coupons.filter(coupon => coupon.title === userInput);

    if (matchingCoupons.length > 0) {
      return NextResponse.json({ valid: true, coupons: matchingCoupons }, { status: 200 });
    } else {
      return NextResponse.json({ valid: false, coupons: [] }, { status: 200 });
    }
  } catch (error) {
    console.error("[COUPONS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
