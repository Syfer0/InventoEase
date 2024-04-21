import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { LuPackage2, LuPackage } from "react-icons/lu";
import { FaBell, FaHome, FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { HiOutlineUsers } from "react-icons/hi2";
import { CiSettings } from "react-icons/ci";

export default function Dashboardv1() {
  return (
    <div key="1" className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href="/">
              <LuPackage2 className="h-6 w-6" />
              <span className="">Invento Ease </span>
            </Link>
            <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
              <FaBell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="/Navbar/All"
              >
                <FaHome className="h-4 w-4" />
                Home
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="/order"
              >
                <FaCartShopping className="h-4 w-4" />
                Orders
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <LuPackage className="h-4 w-4" />
                Inventory
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <HiOutlineUsers className="h-4 w-4" />
                Suppliers
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <CiSettings className="h-4 w-4" />
                Settings
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link className="lg:hidden" href="#">
            <LuPackage2 className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <div className="flex-1">
            <h1 className="font-semibold text-lg">Inventory</h1>
          </div>
          <div className="flex flex-1 items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <form className="ml-auto flex-1 sm:flex-initial">
              <div className="relative">
                <FaSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px] bg-white"
                  placeholder="Search inventory..."
                  type="search"
                />
              </div>
            </form>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="rounded-full" size="icon" variant="ghost">
                  <img
                    alt="Avatar"
                    className="rounded-full"
                    height="32"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width="32"
                  />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid gap-4 md:grid-cols-[1fr_300px]">
            <div className="border shadow-sm rounded-lg p-4 grid gap-4">
              <div className="flex items-center gap-4">
                <h2 className="font-semibold text-lg">Due payments</h2>
                <Button className="ml-auto" size="sm">
                  View all
                </Button>
              </div>
              <div className="grid gap-2">
                <p className="font-medium">
                  Invoice #1234 from Acme Construction
                </p>
                <p>$2,500.00</p>
                <p>Due: 12th March 2024</p>
              </div>
            </div>
            <div className="border shadow-sm rounded-lg p-4 grid gap-4">
              <div className="flex items-center gap-4">
                <h2 className="font-semibold text-lg">Recent orders</h2>
                <Button className="ml-auto" size="sm">
                  View all
                </Button>
              </div>
              <div className="grid gap-2">
                <p className="font-medium">Order #1234 for Concrete Blocks</p>
                <p>Customer: Acme Construction</p>
                <p>Quantity: 500</p>
              </div>
            </div>
          </div>
          <div className="border shadow-sm rounded-lg p-4">
            <h2 className="font-semibold text-lg">Add new inventory</h2>
            <form className="grid gap-4 md:grid-cols-[1fr_1fr]">
              <div className="grid gap-2">
                <Label className="text-sm" htmlFor="name">
                  Item name
                </Label>
                <Input id="name" placeholder="Enter item name..." />
              </div>
              <div className="grid gap-2">
                <Label className="text-sm" htmlFor="quantity">
                  Quantity
                </Label>
                <Input id="quantity" placeholder="Enter quantity..." />
              </div>
              <div className="grid gap-2">
                <Label className="text-sm" htmlFor="price">
                  Price
                </Label>
                <Input id="price" placeholder="Enter price..." />
              </div>
              <div className="grid gap-2">
                <Label className="text-sm" htmlFor="vendor">
                  Vendor
                </Label>
                <Input id="vendor" placeholder="Enter vendor..." />
              </div>
              <div className="grid gap-2">
                <Label className="text-sm" htmlFor="notes">
                  Notes
                </Label>
                <Textarea
                  className="min-h-[100px]"
                  id="notes"
                  placeholder="Enter notes..."
                />
              </div>
              <div className="flex flex-col gap-2">
                <Button type="submit">Add to inventory</Button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
