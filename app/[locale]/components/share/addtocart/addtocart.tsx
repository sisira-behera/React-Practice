'use client';

import { useState } from 'react';

type AddToCartButtonProps = {
  productId: string;
};

export default function AddToCartButton({ productId }: AddToCartButtonProps) {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    // Example: Call your cart API or update global state
    console.log(`Product ${productId} added to cart`);
    setAdded(true);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      {added ? 'Added!' : 'Add to Cart'}
    </button>
  );
}