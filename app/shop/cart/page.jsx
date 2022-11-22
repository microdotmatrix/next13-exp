"use client"

import { Suspense } from 'react'
import dynamic from 'next/dynamic'

const Cart = dynamic(() => import('@comp/shop/cart'), { suspense: true })

export default function CartPage(props) {
  return (
    <div className='cart-content w-full h-full'>
      <Suspense fallback={"Loading..."}>
        <Cart />
      </Suspense>
    </div>
  )
}