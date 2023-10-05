// components/coupon-input.tsx
"use client"
//golden dont touch
import React, { ChangeEvent, useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import toast from 'react-hot-toast';

const CouponInput = () => {
  const [couponCode, setCouponCode] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCouponCode(e.target.value);
  };

  // const handleGoButtonClick = async () => {
  //   try {
      
  //     const response = await fetch('/api/coupon', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ couponCode }),
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       if (data.valid) {
  //         console.log(`Coupon found: ${data.coupon.title}, Discount: ${data.coupon.discount}%`);
  //       } else {
  //         console.log('Invalid coupon');
  //       }
  //     } else {
  //       console.error('Error checking coupon');
  //     }
  //   } catch (error) {
  //     console.error('Error checking coupon', error);
  //   }
  // };
  const handleGoButtonClick = async () => {
    try {
      const response = await fetch('/api/coupon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInput: couponCode }), // Assuming `couponCode` is the user input
      });
  
      if (response.ok) {
        const data = await response.json();
        if (data.valid) {
          console.log('Matching Coupons:', data.coupons);
          const discount = data.coupons[0].discount; 
          toast.success("You got a discount of"+""+discount+""+"%");
        } else {
          console.log('No matching coupons found.');
          toast.error("No matching coupons found")
        }
      } else {
        console.error('Error comparing coupon');
      }
    } catch (error) {
      console.error('Error comparing coupon', error);
    }
  };
  

  return (
    <div>
      <Input
        className="w-50 h-30"
        type="text"
        placeholder="Have a Coupon Code?"
        value={couponCode}
        onChange={handleInputChange}
      />
      <Button onClick={handleGoButtonClick}>Go</Button>
    </div>
  );
}

export default CouponInput;
