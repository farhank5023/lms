export const isTeacher = (userId?: string | null) => {
  return (
    
    userId === process.env.NEXT_PUBLIC_TEACHER_ID
    //  || userId === process.env.NEXT_PUBLIC_TEACHER_ID2 
    // use above code for multiple teachers
    )
}