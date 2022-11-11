"use client"

import { useRef } from 'react'
import { Icon } from '@iconify/react'
import { useDarkMode } from "@help/useDarkMode"

export default function DarkSwitch(props) {
  const [isDark, toggleDark] = useDarkMode()
  const { width = '1em', color = '#101010' } = useRef(null)
  
  return (
    <a
      className="darkMode-icon"
      title="dark-mode"
      onClick={toggleDark}
    >
      {isDark ?
        <Icon icon="game-icons:gooey-eyed-sun" width={width} color={color} inline={true} {...props} />
        :
        <Icon icon="game-icons:moon-bats" width={width} color={color} inline={true} {...props} />
      }
    </a>
  )
}