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
const All = () => {
  return (
    <div>
      {" "}
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
  );
};
export default All;
