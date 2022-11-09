"use client"
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react';

export default function LoadWheel() {
  return (
    <div className="loading">
      <motion.div initial={{ x: '-500px' }} animate={{ x: 0 }} exit={{ x: '500px' }}>
        <Icon icon="fa:wheelchair-alt" width="150px" className="load-motion" />
      </motion.div>
    </div>
  )
}