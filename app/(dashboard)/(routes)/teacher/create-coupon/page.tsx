// CreatePage.js
"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required",
  }),
  discount: z.string().min(1, {
    message: "Discount is required",
  }),
});

const CreatePage = () => {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      discount: "",
    },
  });

  const { isValid } = form.formState;
 

  const onSubmit = async (values: any) => {
    try {
      
      const response = await axios.post("/api/coupons", values);
      router.push(`/teacher/coupons/${response.data.id}`);
      toast.success("Coupon created");
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
      <div>
        <h1 className="text-2xl">Enter details of your Coupon</h1>
        <p className="text-sm text-slate-600">
          What would you like to name your coupon? Don&apos;t worry, you can
          change this later.
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Coupon name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. 'Learn50'" {...field} />
                  </FormControl>
                  <FormDescription>
                    What will you teach in this course?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="discount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Coupon Discount</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g. '25'"
                      type="number"
                      step={5}
                      min={10}
                      max={100}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Enter the percentage of discount. Avoid % sign.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Link href="/">
                <Button type="button" variant="ghost">
                  Cancel
                </Button>
              </Link>
              <Button type="submit" disabled={!isValid}>
                Continue
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreatePage;






























// "use client";

// import * as z from "zod";
// import axios from "axios";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import toast from "react-hot-toast";

// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormLabel,
//   FormMessage,
//   FormItem,
// } from "@/components/ui/form";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// const formSchema = z.object({
//   title: z.string().min(1, {
//     message: "Title is required",

//   }),

// });

// const CreatePage = () => {
//   const router = useRouter();
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       title: "",
//     },
//   });

//   const { isSubmitting, isValid } = form.formState;

//   const onSubmit = async (values: z.infer<typeof formSchema>) => {
//     try {
      
//       const response = await axios.post("/api/coupons",values);
//       router.push(`/teacher/coupons/${response.data.id}`);
//       toast.success("Course created");
//     } catch {
//       toast.error("Something went wrong");
//     }
//     console.log(values);
    
//   }
//   return ( 
//     <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
//       <div>
//         <h1 className="text-2xl">
//           Enter details of your Coupon
//         </h1>
//         <p className="text-sm text-slate-600">
//           What would you like to name your coupon? Don&apos;t worry, you can change this later.
//         </p>
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-8">
//             <FormField control={form.control} name="title" render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>
//                     Coupon name
//                   </FormLabel>
//                   <FormControl>
//                     <Input
//                       disabled={isSubmitting}
//                       placeholder="e.g.'Learn50'"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormDescription>
//                     What will you teach in this course?
//                   </FormDescription>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
 
//             <div className="flex items-center gap-x-2">
//               <Link href="/">
//                 <Button
//                   type="button"
//                   variant="ghost"
//                 >
//                   Cancel
//                 </Button>
//               </Link>
//               <Button
//                 type="submit"
//                 disabled={!isValid || isSubmitting}
//               >
//                 Continue
//               </Button>
//             </div>
//           </form>
//         </Form>
//       </div>
//     </div>
//    );
// }
 
// export default CreatePage;