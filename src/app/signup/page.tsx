"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useState } from "react";

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { auth } from "@/app/firebase/config";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { collection, addDoc, getFirestore } from "firebase/firestore";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { SignUpFormData } from "@/types/SignUpTypes";
export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState(""); // Optional for user profile
  const [lastName, setLastName] = useState(""); // Optional for user profile
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [firstNameError, setFirstNameError] = useState<string | null>(null);
  const [lastNameError, setLastNameError] = useState<string | null>(null);
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>();
  const router = useRouter();
  const handleSignUp = async () => {
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      console.log({ res });

      // Access uid from the response
      const uid = res?.user?.uid;

      // Check if uid is undefined
      if (uid === undefined) {
        throw new Error("User UID is undefined.");
      }

      const db = getFirestore();
      const userRef = collection(db, "users");

      // Check if firstName and lastName are not undefined
      if (firstName === undefined || lastName === undefined) {
        throw new Error("First name or last name is undefined.");
      }

      await addDoc(userRef, {
        uid,
        firstName,
        lastName,
      });

      console.log("User created and profile data stored");
      setEmail("");
      setPassword("");
      router.push("/Dashboard");
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        setErrorMessage("This email address is already in use.");
      } else if (error.code === "auth/weak-password") {
        setErrorMessage(
          "Password is too weak. Please choose a stronger password."
        );
      } else if (
        error.message === "User Already exist." ||
        error.message === "First name or last name is undefined."
      ) {
        setErrorMessage("An error occurred during sign-up. Please try again.");
      } else {
        setErrorMessage("An error occurred during sign-up. Please try again.");
      }
      console.error(error);
    } finally {
      setLoading(false); // Ensure loading state is reset
    }
  };

  const handleGoogleClick = async () => {
    setLoading(true); // Start loading
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      const result = await signInWithPopup(auth, provider);
      console.log("Google sign-in result:", result);
    } catch (e: any) {
      console.log("could not sign in with google", e);
      setErrorMessage(e.message); // Set error message
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <form onSubmit={handleSubmit(handleSignUp)}>
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
                      {...register("firstName", {
                        required: "First name is required.",
                      })}
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    {errors.firstName && (
                      <p className="text-red-500">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input
                      id="last-name"
                      placeholder="Enter your last name"
                      {...register("lastName", {
                        required: "Last name is required.",
                      })}
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    {errors.lastName && (
                      <p className="text-red-500">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                    {...register("email", {
                      required: "Email is required.",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address.",
                      },
                    })}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    placeholder="Enter your password"
                    type="password"
                    {...register("password", {
                      required: "Password is required.",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters long.",
                      },
                    })}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors.password && (
                    <p className="text-red-500">{errors.password.message}</p>
                  )}
                </div>
                <Button
                  className="w-full"
                  type="submit"
                  disabled={loading}
                  onClick={handleSignUp}
                >
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
                  {loading
                    ? "Signing up with Google..."
                    : "Sign up with Google"}
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
    </form>
  );
}
