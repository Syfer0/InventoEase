import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
const orders = () => {
  return (
    <div>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="border shadow-sm rounded-lg p-4">
          <form className="grid gap-4 md:grid-cols-[2fr_1fr]">
            <div className="grid gap-4">
              <div className="grid gap-1">
                <Label className="text-sm" htmlFor="date">
                  Date
                </Label>
                <Input
                  className="w-full max-w-[300px]"
                  id="date"
                  placeholder="Select date"
                  type="date"
                />
              </div>
              <div className="grid gap-1">
                <Label className="text-sm" htmlFor="items">
                  Items
                </Label>
                <Textarea
                  className="min-h-[100px] max-h-[200px] resize-none"
                  id="items"
                  placeholder="Enter items"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-1">
                <Label className="text-sm" htmlFor="supplier">
                  Supplier
                </Label>
                <Input id="supplier" placeholder="Enter supplier" />
              </div>
              <div className="grid gap-1">
                <Label className="text-sm" htmlFor="invoice">
                  Invoice Number
                </Label>
                <Input id="invoice" placeholder="Enter invoice number" />
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};
export default orders;
