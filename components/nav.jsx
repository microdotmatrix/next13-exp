"use client"

import Link from 'next/link'
import { Icon } from '@iconify/react';
import { modularScale } from 'polished';
import DarkSwitch from './darkswitch';

const navLinks = {
  fontSize: modularScale(2.62)
}

const Nav = () => {
  return (
    <nav className="flex flex-row justify-between px-8" style={navLinks}>
      <Link href="/">
        <Icon icon="carbon:home" inline="true" style={{ display: 'inline-flex' }} /> <span>Home</span>
      </Link>
      <Link href="/about">
        <Icon icon="carbon:information" inline="true" style={{ display: 'inline-flex' }} /> <span>About</span>
      </Link>
      <Link href="/blog">
        <Icon icon="carbon:blog" inline="true" style={{ display: 'inline-flex' }} /> <span>Blog</span>
      </Link>
      <Link href="/shop">
        Shop
      </Link>
      <div className="theme-switch">
        <DarkSwitch />
      </div>
    </nav>
  )
}

export default Nav
