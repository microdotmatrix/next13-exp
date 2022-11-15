"use client"

import Link from 'next/link'
import { Icon } from '@iconify/react';
import { modularScale } from 'polished';

const navLinks = {
  fontSize: modularScale(2.62)
}

const iconStyle = {
  display: 'inline-flex'
}

const Nav = () => {
  return (
    <nav className="flex flex-row justify-between px-8" style={navLinks}>
      <Link href="/about">
        <Icon icon="carbon:information" inline="true" style={iconStyle} /> <span>About</span>
      </Link>
      <Link href="/blog">
        <Icon icon="carbon:blog" inline="true" style={iconStyle} /> <span>Blog</span>
      </Link>
      <Link href="/shop">
        <Icon icon="carbon:shopping-bag" inline="true" style={iconStyle} /> <span>Shop</span>
      </Link>
      <Link href="/shop/cart">
        <Icon icon="carbon:shopping-cart" inline="true" style={iconStyle} />
      </Link>
    </nav>
  )
}

export default Nav
