"use client"

import { usePathname } from 'next/navigation'
import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'

export default function LoadWheel() {
  const location = usePathname();
  return (
    <AnimatePresence mode="wait">
      <LazyMotion features={domAnimation}>
        <m.div 
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="loading"
        >
          <Icon icon="fa:circle-o-notch" width="100px" className='load-motion' />
        </m.div>
      </LazyMotion>
    </AnimatePresence>
  )
}