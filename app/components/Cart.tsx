"use client";

import { useCart } from "@/app/[locale]/context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart, cartTotal } = useCart();

  if (cart.length === 0) return <p>Your cart is empty.</p>;

  return (
    <div style={{ padding: "1rem", border: "1px solid black" }}>
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
        <div key={item.id} style={{ display: "flex", gap: "10px", margin: "5px 0" }}>
          <span>{item.name} (x{item.quantity}) - ${item.price * item.quantity}</span>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ${cartTotal}</h3>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}
