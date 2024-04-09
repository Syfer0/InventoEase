/**
 * v0 by Vercel.
 * @see https://v0.dev/t/peB1sPyt9aa
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui-componets/button";
import { CardHeader, CardContent, Card } from "@/components/ui-componets/card";
import { Badge } from "@/components/ui-componets/badge";
import { useState } from "react";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <Button size="sm">New Entry</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold">Cement Type 1</h2>
              <p className="text-sm font-medium leading-none text-gray-500">
                In Stock
              </p>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img
                  alt="Image"
                  className="rounded-lg"
                  height="40"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40"
                />
                <div className="grid grid-cols-1 gap-1">
                  <p className="text-sm font-medium">Quantity: 500 Bags</p>
                  <p className="text-sm font-medium">
                    Last Updated: 2 hours ago
                  </p>
                </div>
              </div>
              <Button size="sm">View</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold">Cement Type 2</h2>
              <p className="text-sm font-medium leading-none text-gray-500">
                In Stock
              </p>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img
                  alt="Image"
                  className="rounded-lg"
                  height="40"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40"
                />
                <div className="grid grid-cols-1 gap-1">
                  <p className="text-sm font-medium">Quantity: 300 Bags</p>
                  <p className="text-sm font-medium">
                    Last Updated: 1 hour ago
                  </p>
                </div>
              </div>
              <Button size="sm">View</Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold">Recent Orders</h2>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <img
                      alt="Image"
                      className="rounded-lg"
                      height="40"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div>
                      <h3 className="text-sm font-semibold">Customer Name</h3>
                      <p className="text-xs leading-none text-gray-500">
                        Order #123
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex flex-col items-end space-y-0.5">
                      <p className="text-xs leading-none">Quantity</p>
                      <p className="text-xs leading-none">Price</p>
                    </div>
                    <div className="flex flex-col items-end space-y-0.5">
                      <p className="text-xs leading-none">100 Bags</p>
                      <p className="text-xs leading-none">$500.00</p>
                    </div>
                  </div>
                </div>
                <Badge>Delivered</Badge>
              </div>
              <hr className="border-gray-200 dark:border-gray-800" />
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <img
                      alt="Image"
                      className="rounded-lg"
                      height="40"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div>
                      <h3 className="text-sm font-semibold">Customer Name</h3>
                      <p className="text-xs leading-none text-gray-500">
                        Order #124
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex flex-col items-end space-y-0.5">
                      <p className="text-xs leading-none">Quantity</p>
                      <p className="text-xs leading-none">Price</p>
                    </div>
                    <div className="flex flex-col items-end space-y-0.5">
                      <p className="text-xs leading-none">200 Bags</p>
                      <p className="text-xs leading-none">$1000.00</p>
                    </div>
                  </div>
                </div>
                <Badge>Shipped</Badge>
              </div>
              <hr className="border-gray-200 dark:border-gray-800" />
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <img
                      alt="Image"
                      className="rounded-lg"
                      height="40"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div>
                      <h3 className="text-sm font-semibold">Customer Name</h3>
                      <p className="text-xs leading-none text-gray-500">
                        Order #125
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex flex-col items-end space-y-0.5">
                      <p className="text-xs leading-none">Quantity</p>
                      <p className="text-xs leading-none">Price</p>
                    </div>
                    <div className="flex flex-col items-end space-y-0.5">
                      <p className="text-xs leading-none">150 Bags</p>
                      <p className="text-xs leading-none">$750.00</p>
                    </div>
                  </div>
                </div>
                <Badge>Processing</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold">Customers</h2>
          </CardHeader>
          <CardContent>
            <div className="overflow-auto max-h-[400px]">
              <table className="min-w-full w-full">
                <thead>
                  <tr className="border-t border-gray-200 dark:border-gray-800">
                    <th className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
                      Orders
                    </th>
                    <th className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
                      Due
                    </th>
                    <th className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider text-right">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-100 dark:hover:bg-gray-800 border-t">
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <div className="text-sm font-semibold">Customer 1</div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center">3</td>
                    <td className="px-4 py-3 text-center">$1500.00</td>
                    <td className="px-4 py-3 text-right">
                      <Button size="xs">View</Button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100 dark:hover:bg-gray-800 border-t">
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <div className="text-sm font-semibold">Customer 2</div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center">2</td>
                    <td className="px-4 py-3 text-center">$1000.00</td>
                    <td className="px-4 py-3 text-right">
                      <Button size="xs">View</Button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100 dark:hover:bg-gray-800 border-t">
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <div className="text-sm font-semibold">Customer 3</div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-center">4</td>
                    <td className="px-4 py-3 text-center">$2000.00</td>
                    <td className="px-4 py-3 text-right">
                      <Button size="xs">View</Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
