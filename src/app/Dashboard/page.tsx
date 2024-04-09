import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          New Entry
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Card className="bg-white shadow rounded-lg p-4">
          <CardHeader>
            <CardTitle>Cement Type 1</CardTitle>
            <CardDescription>In Stock</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">Quantity: 500 Bags</p>
            <p className="text-sm text-gray-600">Last Updated: 2 hours ago</p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button variant="outline">View</Button>
          </CardFooter>
        </Card>
        <Card className="bg-white shadow rounded-lg p-4">
          <CardHeader>
            <CardTitle>Cement Type 2</CardTitle>
            <CardDescription>In Stock</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">Quantity: 300 Bags</p>
            <p className="text-sm text-gray-600">Last Updated: 1 hour ago</p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button variant="outline">View</Button>
          </CardFooter>
        </Card>
        <div>
          <div className="bg-white shadow rounded-lg p-4 mb-4">
            <h2 className="text-lg font-semibold mb-2">Recent Orders</h2>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium">Customer Name</p>
                  <p className="text-sm text-gray-600">Order #123</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Quantity 100 Bags</p>
                  <p className="text-sm text-gray-600">Price $500.00</p>
                </div>
                <Badge variant="secondary">Delivered</Badge>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium">Customer Name</p>
                  <p className="text-sm text-gray-600">Order #124</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Quantity 200 Bags</p>
                  <p className="text-sm text-gray-600">Price $1000.00</p>
                </div>
                <Badge variant="secondary">Shipped</Badge>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium">Customer Name</p>
                  <p className="text-sm text-gray-600">Order #125</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Quantity 150 Bags</p>
                  <p className="text-sm text-gray-600">Price $750.00</p>
                </div>
                <Badge variant="secondary">Processing</Badge>
              </div>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">Customers</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>CUSTOMER</TableHead>
                  <TableHead>ORDERS</TableHead>
                  <TableHead>DUE</TableHead>
                  <TableHead>ACTION</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Customer 1</TableCell>
                  <TableCell>3</TableCell>
                  <TableCell>$1500.00</TableCell>
                  <TableCell>
                    <Button variant="outline">View</Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Customer 2</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>$1000.00</TableCell>
                  <TableCell>
                    <Button variant="outline">View</Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Customer 3</TableCell>
                  <TableCell>4</TableCell>
                  <TableCell>$2000.00</TableCell>
                  <TableCell>
                    <Button variant="outline">View</Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
