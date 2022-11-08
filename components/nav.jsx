"use client"
import Link from 'next/link'
import { Icon } from '@iconify/react';
import { modularScale } from 'polished';

const navLinks = {
  fontSize: modularScale(2.62)
}

const Nav = () => {
  return (
    <nav className="flex flex-row justify-between px-8" style={navLinks}>
      <Link href="/">
        <span><Icon icon="carbon:home" inline="true" style={{ display: 'inline-flex' }} /> Home</span>
      </Link>
      <Link href="/about">
        <Icon icon="carbon:information" inline="true" style={{ display: 'inline-flex' }} /> About
      </Link>
      <Link href="/blog">
        <Icon icon="carbon:blog" inline="true" style={{ display: 'inline-flex' }} /> Blog
      </Link>
    </nav>
  )
}

export default Nav
