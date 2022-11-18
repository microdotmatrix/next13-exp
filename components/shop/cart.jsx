"use client"

import Image from 'next/image'
import { useCart } from 'react-use-cart'
import { Icon } from '@iconify/react'

export default function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <>
      <div className='flex flex-row items-center justify-between border-b border-b-gray-300 mb-6'>
        <h2>Cart</h2>
        <button className='btn' onClick={() => emptyCart()}>Empty Cart</button>
      </div>

      <ul>
        {items?.map((item) => (
          <li key={item.id} className='w-full'>
            <div className='flex flex-row justify-between items-center'>
              <div className='overflow-hidden' style={{ maxWidth: '360px' }}>
                <Image
                  src={item.image?.sourceUrl}
                  alt={item.name}
                  width={400}
                  height={400}
                />
              </div>
              <div className='flex-1 flex flex-col justify-between pl-8'>
                <h3>{item.name}</h3>
                <h2 className='text-liquid-600'>{item.price}</h2>
              </div>
              <div className='flex-none flex flex-col justify-end'>
                <h5 className='text-slate-500'>Qty:</h5>
                <div className='grid grid-cols-3 items-center border border-gray-800 bg-neutral-800'>
                  <div className='item-qty subtract'>
                    <button
                      onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                    >
                      <Icon icon="mdi:minus" width="1.25rem" />
                    </button>
                  </div>
                  <div className='item-qty total'>
                    <span className='font-semibold text-2xl'>{item.quantity}</span>
                  </div>
                  <div className='item-qty add'>
                    <button
                      onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                    >
                      <Icon icon="mdi:plus" width="1.25rem" />
                    </button>
                  </div>
                </div>
                <button onClick={() => removeItem(item.id)}>&times;</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className='flex flex-row items-center justify-end'>
        <h4 className='my-0'>Total Items: {totalItems}</h4>
      </div>
    </>
  );
}