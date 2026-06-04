"use client";

import { useCart } from "@/app/[locale]/context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart, cartTotal } = useCart();

  if (cart.length === 0) return <p>Your cart is empty.</p>;

  return (
    <div className="absolute right-0 top-full z-50 mt-2 w-80 rounded-lg bg-white p-4 border border-solid border-gray-200 shadow-xl">
      <h2><strong>Shopping Cart</strong></h2>

      {cart.map((item) => (
        <div key={item.id} className="flex items-center space-x-4">
          <div className="flex items-center space-x-4">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <h3>
                <a href="#">
                  {item.name} (x{item.quantity}) - ${item.price * item.quantity}
                </a>
              </h3>
            </div>
            <div className="flex flex-1 items-end justify-between text-sm">
              <button
                className="font-medium text-indigo-600 hover:text-indigo-500"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
