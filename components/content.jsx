"use client"

import { motion } from 'framer-motion';

export default function Content({ children, props }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} {...props}>
      { children }
    </motion.div>
  )
}