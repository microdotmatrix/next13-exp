"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link'
import { Icon } from '@iconify/react';
import { modularScale } from 'polished';
import { useCart } from 'react-use-cart';

const navLinks = {
  fontSize: modularScale(2.68),
}

const iconStyle = {
  display: 'inline-flex'
}



const Nav = (props) => {
  const [navOpen, setNavOpen] = useState(false);
  const { totalItems } = useCart();

  const closeNav = () => { 
    setNavOpen(false);
  }
  const openNav = () => {
    setNavOpen(true);
  }
  const toggleNav = () => { 
    setNavOpen(!navOpen);
  }
  
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
        <Link href="/contact">
          <Icon icon="carbon:chat" inline="true" style={iconStyle} /> <span>Contact</span>
        </Link>
        <Link href="/shop/cart">
          <Icon icon="carbon:shopping-cart" inline="true" style={iconStyle} /> <span>({props.totalItems})</span>
        </Link>
        <button onClick={closeNav} className="block md:hidden absolute top-0 right-6">
          <Icon icon="carbon:close" inline="true" width="1.5rem" />
        </button>
      </nav>
      <div className="mobileNav flex md:hidden absolute right-12">
        <button
          onClick={() => toggleNav()}
          className="flex items-center justify-center w-12 h-12 text-white bg-liquid-900 rounded-full cursor-pointer"
        >
          <Icon icon="carbon:menu" inline="true" width="2rem" style={iconStyle} />
        </button>
      </div>
    </>
  )
}

export default Nav
