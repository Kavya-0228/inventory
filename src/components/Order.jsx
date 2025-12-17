import { useEffect, useState } from "react";

const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">📦 Your Orders</h1>
      {orders.length === 0 ? (
        <p className="text-center text-xl">No orders placed yet.</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {orders.map((item, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-xl w-[300px] shadow-xl text-center">
              <img src={item.image} alt={item.name} className="w-[250px] h-[250px] mx-auto mb-3 rounded-lg" />
              <p className="text-xl font-semibold">{item.name}</p>
              <p className="text-lg">₹ {item.price}</p>
              <p className="text-md">Qty: {item.qty}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Order;