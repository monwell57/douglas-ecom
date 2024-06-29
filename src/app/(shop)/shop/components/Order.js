import React from "react";

function Order() {
  const products = [
    { _id: 1, name: "product 1", quantity: 2, paid: 100, status: "in transit" },
    { _id: 2, name: "product 2", quantity: 2, paid: 200, status: "delivered" },
  ];
  return (
    <div className="max-w-3xl mx-auto mt-20">
      <h1 className="text-3xl text-center font-semibold text-[#5b20b6]">
        Your Orders
      </h1>
      <table className="w-full border-collapse mt-10">
        <thead>
          <tr className="text-[#5b20b6] border-b border-gray-200">
            <th className="py-2 px-4">Product</th>
            <th className="py-2 px-4">Quantity</th>
            <th className="py-2 px-4">Paid</th>
            <th className="py-2 px-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              key={product._id}
              className="hover:bg-gray-50 text-center border-b border-gray-300 text-[#5b20b6]"
            >
              <td className="py-2 px-4">{product.name}</td>
              <td className="py-2 px-4">{product.quantity}</td>
              <td className="py-2 px-4">{product.paid}</td>
              <td className="py-2 px-4">{product.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Order;
