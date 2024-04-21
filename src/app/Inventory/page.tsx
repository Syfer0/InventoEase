import Link from "next/link";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

export default function Component() {
  return (
    <div className="grid md:grid-cols-2 gap-4 items-start">
      <div>
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold">Inventory</h1>
          <Link
            className="ml-auto flex items-center gap-2 text-sm font-medium opacity-60 hover:opacity-100 transition-colors"
            href="#"
          >
            <SettingsIcon className="w-4 h-4" />
            Settings
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold">Current Stock</h2>
            </CardHeader>
            <CardContent className="flex items-center justify-center p-6">
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="flex items-center gap-2">
                  <ShoppingBagIcon className="w-8 h-8" />
                  <div>
                    <h3 className="text-sm font-medium">Portland Cement</h3>
                    <p className="text-sm text-gray-500">Type I</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <ShoppingBagIcon className="w-8 h-8" />
                  <div>
                    <h3 className="text-sm font-medium">Portland Cement</h3>
                    <p className="text-sm text-gray-500">Type II</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <ShoppingBagIcon className="w-8 h-8" />
                  <div>
                    <h3 className="text-sm font-medium">Portland Cement</h3>
                    <p className="text-sm text-gray-500">Type III</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <ShoppingBagIcon className="w-8 h-8" />
                  <div>
                    <h3 className="text-sm font-medium">Portland Cement</h3>
                    <p className="text-sm text-gray-500">Type IV</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold">Payment Due</h2>
            </CardHeader>
            <CardContent className="flex items-center justify-center p-6">
              <div className="grid grid-cols-2 gap-4 w-full">
                <div>
                  <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">A</Avatar>
                    <div>
                      <h3 className="text-sm font-medium">John Doe</h3>
                      <p className="text-sm text-gray-500">$2500</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">B</Avatar>
                    <div>
                      <h3 className="text-sm font-medium">Alice Smith</h3>
                      <p className="text-sm text-gray-500">$1500</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">C</Avatar>
                    <div>
                      <h3 className="text-sm font-medium">Chris Johnson</h3>
                      <p className="text-sm text-gray-500">$1800</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">D</Avatar>
                    <div>
                      <h3 className="text-sm font-medium">Emma Brown</h3>
                      <p className="text-sm text-gray-500">$900</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div>
        <Card>
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-0">
              <div className="flex flex-col gap-2 p-4 md:p-8">
                <div className="flex items-center gap-2">
                  <Avatar className="w-10 h-10">AC</Avatar>
                  <div>
                    <h2 className="text-lg font-bold">Ace Cement Supplier</h2>
                    <p className="text-sm text-gray-500">Cement Supplier</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium">Contact Person</h3>
                    <p className="text-sm">John Smith</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Email</h3>
                    <p className="text-sm">john@example.com</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Phone</h3>
                    <p className="text-sm">+1234567890</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Address</h3>
                    <p className="text-sm">123 Street, City, Country</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 p-4 md:p-8">
                <div className="flex items-center gap-2">
                  <Avatar className="w-10 h-10">JB</Avatar>
                  <div>
                    <h2 className="text-lg font-bold">Joe Builders</h2>
                    <p className="text-sm text-gray-500">
                      Construction Company
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium">Contact Person</h3>
                    <p className="text-sm">Alice Brown</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Email</h3>
                    <p className="text-sm">alice@example.com</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Phone</h3>
                    <p className="text-sm">+1987654321</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">Address</h3>
                    <p className="text-sm">456 Road, Town, Country</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-0">
            <h2 className="text-lg font-semibold">Recent Transactions</h2>
          </CardHeader>
          <CardContent className="p-0">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4 p-4">
                <div className="flex items-center gap-2">
                  <InboxIcon className="w-8 h-8" />
                  <div className="text-sm">
                    <h3 className="font-medium">Invoice #00123</h3>
                    <p className="text-sm text-gray-500">Joe Builders</p>
                  </div>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <div className="text-right">
                    <h3 className="text-sm font-medium">Amount</h3>
                    <p className="text-sm text-gray-500">$1200</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4">
                <div className="flex items-center gap-2">
                  <InboxIcon className="w-8 h-8" />
                  <div className="text-sm">
                    <h3 className="font-medium">Order #00456</h3>
                    <p className="text-sm text-gray-500">Ace Cement Supplier</p>
                  </div>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <div className="text-right">
                    <h3 className="text-sm font-medium">Amount</h3>
                    <p className="text-sm text-gray-500">$2500</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4">
                <div className="flex items-center gap-2">
                  <InboxIcon className="w-8 h-8" />
                  <div className="text-sm">
                    <h3 className="font-medium">Order #00457</h3>
                    <p className="text-sm text-gray-500">Ace Cement Supplier</p>
                  </div>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <div className="text-right">
                    <h3 className="text-sm font-medium">Amount</h3>
                    <p className="text-sm text-gray-500">$1800</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function InboxIcon(props: any) {
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
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
  );
}

function SettingsIcon(props: any) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function ShoppingBagIcon(props: any) {
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
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}
