"use client"

import { useEffect, useState } from 'react'
import { useCart } from 'react-use-cart'
import Image from 'next/image'
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
      <h2>Cart</h2>

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
              <div className='flex flex-col justify-between pl-8'>
                <h3>{item.name}</h3>
                <span className='block text-3xl font-bold'>{item.price}</span>
              </div>
              <div className='flex-1 flex flex-row justify-end'>
                <h5 className='text-slate-500'>Qty:</h5>
                <div className='grid grid-cols-3 items-center border border-gray-600 bg-neutral-900'>
                  <div className='item-qty subtract'>
                    <button
                      onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                    >
                      <Icon icon="mdi:minus" width="1.25rem" />
                    </button>
                  </div>
                  <div className='item-qty text-center bg-slate-50'>
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
        <button className='btn' onClick={() => emptyCart()}>Empty Cart</button>
        <h4 className='my-0'>Total Items: {totalItems}</h4>
      </div>
    </>
  );
}