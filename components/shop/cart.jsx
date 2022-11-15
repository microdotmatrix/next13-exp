"use client"

import { useEffect } from 'react'
import { useCart } from 'react-use-cart'


export default function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <>
      <h2>Cart ({totalUniqueItems})</h2>

      <ul>
        {items.map((item) => (
          <li key={item.id} className='w-full'>
            <div className='flex flex-row justify-between items-center'>
              <h4>{item.name}</h4>
              <div className='flex-1 flex flex-row justify-end'>
                <div>
                  <h5 className='text-slate-500'>Qty:</h5>
                  <button
                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span className='font-bold'>{item.quantity}</span>
                  <button
                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <button onClick={() => removeItem(item.id)}>&times;</button>
                </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
