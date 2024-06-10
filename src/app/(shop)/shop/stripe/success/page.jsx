import { Button } from "../../../../../components/ui/button";
import { CheckCheck } from "lucide-react";
import Link from "next/link";

export default function stripeSuccess() {
  return (
    <div className="h-screen bg-white">
      <div className="-mt-6 md:max-w-[50vw] mx-auto bg-white">
        <div className=" text-center  items-center">
          <CheckCheck className="text-green-600 w-48 h-48 mx-auto pt-32 my-6" />
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Done!
          </h3>
          <p className="text-gray-600 my-2">
            Thank you for you pruchase We hope you enjoy it
          </p>
          <p>Have a great day!</p>

          <Button asChild className="mt-5">
            <Link href="/shop">GO back</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
