"use client";

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { db } from "@/lib/db";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";
import { Input } from "@/components/ui/input";





interface CourseEnrollButtonProps {
  price: number;
  courseId: string;
  userId: string;
}


export const CourseEnrollButton = ({
  price,
  courseId,
  userId,
  
}: CourseEnrollButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const enrollForFree = async () => {
    try {
      setIsLoading(true);
      await db.purchase.create({
        data: {
          courseId: courseId,
          userId: userId ,// Add the actual user ID here
        }
      });
      console.log("enters")
      toast.success("Enrolled successfully!");
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }

  const enrollForPaid = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(`/api/courses/${courseId}/checkout`);
      window.location.assign(response.data.url);
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }

  const onClick = async () => {
    if (price === 0) {
      await enrollForFree();
    } else {
      await enrollForPaid();
    }
  }
  // const onClick = async () => {
  //   try {


      
  //     setIsLoading(true);




  //     if (price === 0) {
        

      
  //       console.log("Course content is shown directly for free course.");
  //     } else {

  //     const response = await axios.post(`/api/courses/${courseId}/checkout`)

  //     window.location.assign(response.data.url);}
  //   }
    
    
    
    
    
  //   catch {
  //     toast.error("Something went wrong");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }
  
  return (
    <Button
      onClick={onClick}
      disabled={isLoading}
      size="sm"
      className="w-full md:w-auto"
    >
      Enroll for {formatPrice(price)}
     
    </Button>
  )
}