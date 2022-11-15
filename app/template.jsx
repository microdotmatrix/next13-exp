"use client"
// Load async motion components from Framer Motion library
// Template wrapper renders client side to support synchronous effects utilized by 
import { API_URL } from '@lib/wp';
import { CartProvider } from 'react-use-cart'
import { usePathname } from 'next/navigation';
import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';

export default function Template({ children }, pageProps) {
  let location = usePathname()

  return (
    <CartProvider>
      <AnimatePresence mode="wait">
        <LazyMotion features={domAnimation}>
          <m.div
            key={location}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            >
            {children}
          </m.div>
        </LazyMotion>
      </AnimatePresence>
    </CartProvider>
  )
}