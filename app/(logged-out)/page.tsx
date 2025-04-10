import { Button } from "@/components/ui/button";
import { PersonStanding } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <h1 className="flex gap-2 items-center">
        <PersonStanding size={50} className="text-pink-500" />
        SupportMe
      </h1>
      <p>The BEST dashboard to manage customer support</p>
      <div className="flex gap-2 items-center">
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>
        <small>or</small>
        <Button asChild variant="outline">
          <Link href="/sign-up">Sign Up</Link>
        </Button>
      </div>
    </>
  );
}
