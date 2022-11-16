"use client"

import { useState } from 'react';
import Link from 'next/link'
import { Icon } from '@iconify/react';
import { modularScale } from 'polished';
import { useCart } from 'react-use-cart';

const navLinks = {
  fontSize: modularScale(3.33),
}

const iconStyle = {
  display: 'inline-flex'
}



const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const closeNav = () => { 
    setNavOpen(false);
  }
  const openNav = () => {
    setNavOpen(true);
  }
  const toggleNav = () => { 
    setNavOpen(!navOpen);
  }
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem
  } = useCart();
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
          <Icon icon="carbon:shopping-cart" inline="true" style={iconStyle} /> <span>({totalUniqueItems})</span>
        </Link>
        <button onClick={closeNav} className="block md:hidden absolute top-0 right-6">
          <Icon icon="carbon:close" inline="true" width="1.5rem" />
        </button>
      </nav>
      <div className="mobileNav flex md:hidden absolute right-0">
        <button
          onClick={() => toggleNav()}
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
        </button>
      </div>
    </>
  )
}

export default Nav
