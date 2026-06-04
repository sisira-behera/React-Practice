'use client';

import { useCart } from '@/app/[locale]/context/CartContext';
import { useState } from 'react';

export default function AddToCartButton( { id, name, price }: { id: string; name: string; price: number } ) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({ id, name, price})
    // Example: Call your cart API or update global state
    console.log(`Product ${id} ${name} ${price} added to cart`);
    setAdded(true);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="px-4 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      {added ? 'Added!' : 'Add to Cart'}
    </button>
  );
}