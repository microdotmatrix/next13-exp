"use client"
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { modularScale, size, between } from 'polished'

const Logo = () => {
  return (
    <div className='flex px-2 lg:px-6 xl:px-12 w-fit rounded-full'>
      <Link href="/">
        <Icon icon="game-icons:triforce" className='logo-icon' />
      </Link>
    </div>
  )
}

export default Logo
