import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import SignupForm from "./SignupForm";

export default function SignupPage() {
  return (
    <>
      <CardHeader className="text-center">
        <CardTitle>Sign up</CardTitle>
        <CardDescription>
          Create an account to start buying from mobill
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignupForm />
      </CardContent>
      <CardFooter>
        <p className="text-sm text-center w-full">
          Already have an account?{" "}
          <Button variant={"link"} className="text-blue-600 px-0" asChild>
            <Link href={"/login"}>Login</Link>
          </Button>
        </p>
      </CardFooter>
    </>
  );
}
