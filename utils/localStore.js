"use client"

import { useState } from 'react'

// Get/Set cached values for functions utilizing client storage (eg. Dark Mode)
export function useStorage(key, defaultValue = '') {
  if (process.browser) {
    return [defaultValue]
  }

  const [value, setValue] = useState(
    window.localStorage.getItem(key) || defaultValue
  )

  return [
    value,
    (newValue = '') => {
      window.localStorage.setItem(key, newValue)
      return setValue(newValue)
    },
  ]
}