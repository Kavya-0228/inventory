import { useState, useEffect } from "react";
import { Link } from "react-router";   // <-- Add this import

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  useEffect(() => {
    const bill = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
    setTotal(bill);
  }, [cartItems]);

  const updateQty = (id, delta) => {
    const updated = cartItems.map(item =>
      item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
    );
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🛒 Your Cart</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {cartItems.map(item => (
          <div key={item.id} className="bg-gray-100 p-4 rounded-xl w-[300px] shadow-xl text-center">
            <img src={item.image} alt={item.name} className="w-[250px] h-[250px] mx-auto mb-3 rounded-lg" />
            <p className="text-xl font-semibold">{item.name}</p>
            <p className="text-lg">₹ {item.price}</p>
            <div className="flex justify-center items-center gap-4 mt-2">
              <button onClick={() => updateQty(item.id, -1)} className="px-3 py-1 bg-red-400 text-white rounded">-</button>
              <span className="text-lg">{item.qty}</span>
              <button onClick={() => updateQty(item.id, 1)} className="px-3 py-1 bg-green-400 text-white rounded">+</button>
            </div>
          </div>
        ))}
      </div>

      {/* Total Bill */}
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-bold">Total Amount: ₹ {total}</h2>

        {/* Place Order Button */}
        <button
          onClick={() => {
            localStorage.setItem("orders", JSON.stringify(cartItems));
            localStorage.removeItem("cart");
            setCartItems([]);
            alert("Order placed successfully!");
          }}
          className="mt-6 bg-purple-700 text-white px-4 py-2 rounded-xl"
        >
          Place Order
        </button>

        {/* My Orders Link */}
        <button className="bg-purple-900 py-3 px-5 rounded-xl shadow-xl mx-auto mt-10 text-white text-center block">
          <Link to='/orders'>My Orders</Link>
        </button>
      </div>
    </div>
  );
};

export default Cart;