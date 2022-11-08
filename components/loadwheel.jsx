"use client"
import { Icon } from '@iconify/react';

export default function LoadWheel() {
  return (
    <div className="loading">
      <h1>
        <Icon icon="fa:wheelchair-alt" width="150px" className="load-motion" />
      </h1>
    </div>
  )
}