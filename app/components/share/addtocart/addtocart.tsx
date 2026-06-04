'use client';

import { useState } from 'react';

export default function AddToCartButton( { id, name, price }: { id: string; name: string; price: string } ) {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
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