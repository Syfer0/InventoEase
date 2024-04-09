"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState(""); // Optional for user profile
  const [lastName, setLastName] = useState(""); // Optional for user profile
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    setLoading(true); // Set loading state

    try {
      const userCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // Update user profile with optional name fields (if applicable)
      if (user && (firstName || lastName)) {
        await user.updateProfile({ displayName: `${firstName} ${lastName}` });
      }

      console.log("User signed up successfully:", user);
      setLoading(false); // Clear loading state
      router.push("/dashboard"); // Redirect to a protected dashboard or desired page
    } catch (error) {
      console.error("Error signing up:", error);
      setErrorMessage(error.message);
      setLoading(false); // Clear loading state
    }
  };

  const handleGoogleClick = async () => {
    setLoading(true); // Start loading
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      const result = await signInWithPopup(auth, provider);
      console.log("Google sign-in result:", result);
    } catch (error) {
      console.log("could not sign in with google", error);
      setErrorMessage(error.message); // Set error message
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div key="1" className="flex flex-col h-screen">
      <header className="py-4 lg:py-6 xl:py-8" />
      <main className="flex-1 my-10">
        <div className="container flex flex-col gap-4 px-4 text-center lg:gap-8 lg:px-6 xl:gap-12">
          <h1 className="text-4xl font-bold">Sign Up</h1>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <p className="mx-auto max-w-[525px] text-gray-500 dark:text-gray-400">
            Enter your information to create an account
          </p>
          <div className="mx-auto space-y-4 min-w-[300px]">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input
                    id="first-name"
                    placeholder="Enter your first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input
                    id="last-name"
                    placeholder="Enter your last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  placeholder="Enter your password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button className="w-full" type="submit" disabled={loading}>
                {loading ? "Signing Up..." : "Sign Up"}
              </Button>
            </div>
            <Separator />
            <div className="space-y-4">
              <Button
                className="w-full"
                variant="outline"
                onClick={handleGoogleClick}
                disabled={loading}
              >
                {loading ? "Signing up with Google..." : "Sign up with Google"}
              </Button>
            </div>
          </div>
        </div>
      </main>
      <footer className="mt-auto py-4 border-t sm:py-6">
        <div className="container flex justify-between px-4 text-sm md:px-6">
          <div className="text-gray-500">
            © 2023 Shadcn. All rights reserved.
          </div>
          <nav className="flex gap-4 text-sm">
            <Link className="font-medium" href="#">
              Terms
            </Link>
            <Link className="font-medium" href="#">
              Privacy
            </Link>
            <Link className="font-medium" href="#">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
