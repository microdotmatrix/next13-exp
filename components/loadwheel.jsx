"use client"
import { motion, LazyMotion, domAnimation } from 'framer-motion'
import { Icon } from '@iconify/react';
import { AnimatePresence } from 'framer-motion';

export default function LoadWheel() {
  return (
    <div className="loading">
      <AnimatePresence>
        
          <motion.div initial={{ opacity: 0, x: '-300px' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '300px' }} transition={{ duration: 0.5, type: "spring", stiffness: 250 }}>
            <Icon icon="fa:wheelchair-alt" width="150px" />
          </motion.div>
       
      </AnimatePresence>
    </div>
  )
}