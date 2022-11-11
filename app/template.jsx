"use client"
// Load async motion components from Framer Motion library
// Template wrapper renders client side to support synchronous effects utilized by 

import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';

export default function Template({ children }) {
  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait">
        <m.div
          key={location}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </m.div>
      </AnimatePresence>
    </LazyMotion>
  )
}