"use client"
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { modularScale, size } from 'polished'

const logoStyles = {
  ...size(modularScale(9))
}

const Logo = () => {
  return (
    <div className='flex p-6 w-fit rounded-full'>
      <Link href="/">
        <Icon icon="game-icons:triforce" style={logoStyles} />
      </Link>
    </div>
  )
}

export default Logo
