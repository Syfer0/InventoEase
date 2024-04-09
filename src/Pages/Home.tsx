/**
 * v0 by Vercel.
 * @see https://v0.dev/t/EUUTGc6x9vr
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Input } from "@/components/ui-componets/input";
import { Button } from "@/components/ui-componets/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 py-4 lg:py-6 flex items-center">
        <div className="flex items-center space-x-2">
          <BoxIcon className="h-8 w-8 bg-true-gray-200 rounded-lg" />
          <h1 className="text-xl font-bold tracking-tighter sm:text-2xl xl:text-3xl">
            InventoEase
          </h1>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6 lg:gap-8">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Solutions
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            About Us
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-6 md:py-12 lg:py-16 xl:py-24">
          <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Construction Inventory Management
              </h1>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Streamline your inventory processes. Track materials, manage
                stock, and generate purchase orders with ease.
              </p>
            </div>
            <div className="flex justify-center flex-col gap-2 min-[400px]:flex-row">
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Learn More
              </Link>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 md:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mx-auto/none">
                Features
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                The ConstructionPro Inventory Management System comes with a
                range of powerful features to help you efficiently manage your
                materials and supplies.
              </p>
            </div>
            <div className="mx-auto grid max-w-3xl items-start gap-12 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center gap-2">
                <CheckCircleIcon className="h-10 w-10 rounded-lg bg-gray-100" />
                <div className="space-y-2 text-center">
                  <h3 className="font-bold">Inventory Tracking</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Track materials, supplies, and tools with ease.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CheckCircleIcon className="h-10 w-10 rounded-lg bg-gray-100" />
                <div className="space-y-2 text-center">
                  <h3 className="font-bold">Stock Management</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Manage stock levels and inventory locations.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CheckCircleIcon className="h-10 w-10 rounded-lg bg-gray-100" />
                <div className="space-y-2 text-center">
                  <h3 className="font-bold">Supplier Management</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Maintain supplier information and contacts.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CheckCircleIcon className="h-10 w-10 rounded-lg bg-gray-100" />
                <div className="space-y-2 text-center">
                  <h3 className="font-bold">Purchase Orders</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Generate purchase orders and manage procurement.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CheckCircleIcon className="h-10 w-10 rounded-lg bg-gray-100" />
                <div className="space-y-2 text-center">
                  <h3 className="font-bold">Reporting</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Run reports on inventory levels and usage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 md:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mx-auto/none">
                Testimonials
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Don't just take our word for it. Here's what our customers have
                to say about the ConstructionPro Inventory Management System.
              </p>
            </div>
            <div className="mx-auto grid max-w-3xl items-start gap-6 sm:grid-cols-2">
              <div className="flex flex-col items-center gap-2">
                <UserIcon className="h-12 w-12 rounded-full bg-gray-100" />
                <div className="space-y-2 text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    "ConstructionPro has made it incredibly easy to track our
                    inventory across multiple job sites. The system is intuitive
                    and the support from the team has been outstanding."
                  </p>
                  <p className="font-bold">Sarah Johnson</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Acme Construction
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <UserIcon className="h-12 w-12 rounded-full bg-gray-100" />
                <div className="space-y-2 text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    "As a supplier to the construction industry, managing our
                    inventory and orders was a challenge. ConstructionPro has
                    streamlined our processes and improved our efficiency."
                  </p>
                  <p className="font-bold">Michael Lee</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Summit Supplies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 md:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mx-auto/none">
                Contact Us
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Ready to take control of your construction inventory? Contact
                our team to learn more about the ConstructionPro Inventory
                Management System.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex flex-col gap-2">
                <Input placeholder="Enter your email" type="email" />
                <Button className="mx-auto w-full" type="submit">
                  Contact Sales
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Acme Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function BoxIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

function CheckCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
