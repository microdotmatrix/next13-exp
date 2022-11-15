"use client"

import { useCart } from 'react-use-cart'

export default function AddToCart({ product }) {
  const { addItem } = useCart();

  return (
    <button
      className="btn btn-primary"
      onClick={() => addItem({id: product.id, name: product.name, price: product.price, quantity: 1 })}
    >
      Add to cart
    </button>
  );
}