"use client";

import { useCart } from "@/app/[locale]/context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart, cartTotal } = useCart();

  if (cart.length === 0) return (
    <button className="group relative inline-flex items-center p-2 text-gray-700 hover:text-indigo-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-lg" aria-label="Shopping Cart">
  {/* Shopping Cart SVG Icon */}
  <svg className="h-6 w-6 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="Message: M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>

  {/* <!-- Floating Item Counter Badge --> */}
  {/* <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-semibold text-white ring-2 ring-white transform scale-100 group-hover:scale-110 transition-transform duration-200">
    0
  </span> */}
</button>
  );

  return (
    <><button className="group relative inline-flex items-center p-2 text-gray-700 hover:text-indigo-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-lg" aria-label="Shopping Cart">
  {/* Shopping Cart SVG Icon */}
  <svg className="h-6 w-6 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="Message: M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>

  {/* <!-- Floating Item Counter Badge --> */}
  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-semibold text-white ring-2 ring-white transform scale-100 group-hover:scale-110 transition-transform duration-200">
    {cart.length}
  </span>
</button>

    <div className="absolute right-0 top-full z-50 mt-2 w-80 rounded-lg bg-white p-4 border border-solid border-gray-200 shadow-xl">
      <h2><strong>Shopping Cart</strong></h2>

      {cart.map((item) => (
        <div key={item.id} className="flex items-center space-x-4">
          <div className="flex items-center border-b border-gray-300 py-2 space-x-4">
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
    </>    
  );
}
