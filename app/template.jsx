"use client"
// Load async motion components from Framer Motion library
// Template wrapper renders client side to support synchronous effects utilized by 

import { CartProvider } from 'react-use-cart'
import { usePathname } from 'next/navigation'
import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion'

export default function Template({ children }) {
  let location = usePathname()

  return (
    <CartProvider>
      <AnimatePresence mode="wait">
        <LazyMotion features={domAnimation}>
          <m.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.25, staggerChildren: 0.5 } }}
            exit={{ opacity: 0, transition: { duration: 0.5, delay: 0, staggerChildren: 0 } }}
            className="arf"
          >
            {children}
          </m.div>
        </LazyMotion>
      </AnimatePresence>
    </CartProvider>
  )
}