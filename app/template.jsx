"use client"
// Load async motion components from Framer Motion library
// Template wrapper renders client side to support synchronous effects utilized by 
import { usePathname } from 'next/navigation';
import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';

export default function Template({ children }) {
  let location = usePathname()
  return (
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
  )
}