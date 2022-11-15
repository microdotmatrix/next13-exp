"use client"
import { m, LazyMotion, domAnimation } from 'framer-motion'

const FeaturedImage = ({ children }) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        className="w-full md:w-1/3 h-80 md:h-full mx-auto md:ml-0 md:mr-auto overflow-hidden absolute md:fixed left-0 top-0">
        { children }
      </m.div>
    </LazyMotion>
  )
}

export default FeaturedImage
