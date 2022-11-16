"use client"

import { useState } from 'react';
import Link from 'next/link'
import { Icon } from '@iconify/react';
import { modularScale } from 'polished';

const navLinks = {
  fontSize: modularScale(3.33),
}

const iconStyle = {
  display: 'inline-flex'
}

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <nav className={navOpen ? "flex" : "hidden"} style={navLinks}>
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
      <div className="mobileNav absolute right-0">
        <div
          onClick={() => setNavOpen()}
          className="flex items-center justify-center w-10 h-10 text-white bg-blue-500 rounded-full cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </div>
      </div>
    </>
  )
}

export default Nav
