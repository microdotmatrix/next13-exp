"use client"
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react';
import { AnimatePresence } from 'framer-motion';

export default function LoadWheel() {
  return (
    <div className="loading">
      <Icon icon="fa:wheelchair-alt" width="150px" className='load-motion' />
    </div>
  )
}