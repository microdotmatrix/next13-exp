"use client"
// Next.js v13 loads all components by default as server components
// The "use client" declaration overrides this default for loading components that
// have useState, useEffect and useContext functions which should be run client side.

// My favorite Icon library, Iconify, requires client side functions, so we can wrap
// it in a utility component with the "use client" declaration to utilize it within
// server rendered pages and components.
import { Icon } from '@iconify/react'

export const ClientIcon = ({ icon, size, ...props }) => {
  return (
    <Icon
      icon={icon}
      width={size}
      height={size}
      {...props}
    />
  )
}