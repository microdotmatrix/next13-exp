"use client"

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
// import { useCart } from 'react-use-cart'
// import { useAsync } from 'react-use'

// import Cart from '@comp/shop/cart'
// const Cart = dynamic(() => import('@comp/shop/cart'), { ssr: false, suspense: true })
const Cart = dynamic(() => import('@comp/shop/cart'), { suspense: true })

export default function CartPage(props) {
  // const { items, totalItems, cartTotal, updateItemQuantity, removeItem, emptyCart } = useAsync(async () => {
  //   await useCart()
  // }, [])
  return (
    <div className='cart-content w-full h-full'>
      <Suspense fallback={"Loading..."}>
        <Cart />
      </Suspense>
    </div>
  )
}