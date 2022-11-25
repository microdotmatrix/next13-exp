"use client"

import { useState, useEffect, createContext } from 'react'

export const CartContext = createContext()

export const ShopProvider = ({ children }) => {
  const [isCartOpen, setCartOpen] = useState(false)
  
  return (
    <CartContext.Provider value={[isCartOpen, setCartOpen]}>
      {children}
    </CartContext.Provider>
  )
}