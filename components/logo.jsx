"use client"
import { Icon } from '@iconify/react'
import { modularScale, size } from 'polished'

const logoStyles = {
  ...size(modularScale(9))
}

const Logo = () => {
  return (
    <>
      <Icon icon="game-icons:bullet-bill" style={logoStyles} />
    </>
  )
}

export default Logo
