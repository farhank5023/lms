import { Button } from "@/components/ui/button";
import  Link  from "next/link";

const CouponsPage = () => {
    return ( 
      <div>
        <Link href="/teacher/create-coupon">
        <Button>
        New Coupon
       </Button>

        </Link>
       
      </div>
     );
}
 
export default CouponsPage; 