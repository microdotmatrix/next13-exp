"use client"

import { useCart } from 'react-use-cart'

export default function AddToCart({ product }) {
  const { inCart, addItem } = useCart();
  if (inCart(product.id)) {
    return (
      <button className='btn' disabled>Added to Cart</button>
    )
  }
  return (
    <button
      className="btn btn-primary"
      onClick={() => addItem({id: product.id, name: product.name, price: product.price, image: product.image, quantity: 1 })}
    >
      Add to Cart
    </button>
  );
}