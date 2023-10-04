// // Assuming you're using TypeScript
// import { useState } from "react";
// import { auth } from "@clerk/nextjs";
// import { db } from "@/lib/db"; // Assuming you have a file for Prisma configuration
// import { title } from "process";

// const CouponField = () => {
//   const [coupon, setCoupon] = useState("");
//   const { userId } = auth(); // Retrieve the authenticated user's session

//   const handleCouponChange = (e) => {
//     setCoupon(e.target.value);
//   };

//   const handleCouponSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const user = await db.coupon.findUnique({
//         where: {
//          id: params.courseId,
//          userId: userId,
//          title: title, },
//       });

//       const matchingTitles = await db.coupon.findMany({
//         where: {
//           AND: [
//             { userId: user.id },
//             { title: { contains: coupon, mode: "insensitive" } },
//           ],
//         },
//       });

//       // Do something with matchingTitles (e.g., display, update state, etc.)
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <form onSubmit={handleCouponSubmit}>
//       <label>
//         Coupon Discount:
//         <input
//           type="text"
//           placeholder="e.g. 'learn50'"
//           value={coupon}
//           onChange={handleCouponChange}
//         />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default CouponField;

// Assuming you have a model named `YourModel` in your Prisma schema
import React, { useState, ChangeEvent } from 'react';

interface CouponInputProps {
  onInputChange: (input: string) => void;
}

const CouponInput: React.FC<CouponInputProps> = ({ onInputChange }) => {
  const [coupon, setCoupon] = useState('');

  const handleCouponChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setCoupon(input);
    onInputChange(input);
  };

  return (
    <input
      type="text"
      placeholder="Enter coupon code"
      value={coupon}
      onChange={handleCouponChange}
    />
  );
};
export default CouponInput;


