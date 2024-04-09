import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Component() {
  return (
    <div className="mx-auto max-w-[400px] space-y-6">
      <header className="py-4 lg:py-6 xl:py-8" />
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="m@example.com" required type="email" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Link className="ml-auto inline-block text-sm underline" href="#">
              Forgot your password?
            </Link>
          </div>
          <Input id="password" required type="password" />
        </div>
        <Button className="w-full" type="submit">
          Login
        </Button>
        <Separator className="my-8" />
        <Button className="w-full" variant="outline">
          Login with Google
        </Button>
      </div>
      <Separator className="my-8" />
      <div className="flex flex-col gap-2">
        <Link className="underline" href="signup">
          Sign up for an account
        </Link>
      </div>
    </div>
  );
}
