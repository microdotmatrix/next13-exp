"use client"

import { usePathname } from 'next/navigation'
import { m, LazyMotion, domAnimation } from 'framer-motion'
import { Icon } from '@iconify/react'

export default function LoadWheel() {
  const location = usePathname();
  return (
    <div className="loading">
      <LazyMotion features={domAnimation}>
        <m.div 
          key={location}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <Icon icon="fa:circle-o-notch" width="100px" className='load-motion' />
        </m.div>
      </LazyMotion>
    </div>
  )
}