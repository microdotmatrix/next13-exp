"use client"

import Link from 'next/link'
import { Icon } from '@iconify/react';
import { modularScale } from 'polished';
import { useCart } from 'react-use-cart';
import { m, LazyMotion, domAnimation, useCycle } from 'framer-motion'


const navLinks = {
  fontSize: modularScale(2.68),
}

const iconStyle = {
  display: 'inline-flex'
}

const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const linkVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: 100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 10 }
    }
  }
};

export const Nav = ({ ...props }) => { 
  const [showCart, setShowCart] = useCycle(false, true)
  let { totalItems } = useCart()

  return (
    <nav id="desktop-nav" style={navLinks} {...props}>
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
        <Icon icon="carbon:shopping-cart" inline="true" style={iconStyle} /> <span>{totalItems}</span>
      </Link>
    </nav>
  )
}

export const MobileNav = ({ ...props }) => {
  const [navOpen, setNavOpen] = useCycle(false, true);
  let { totalItems } = useCart()

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
    <LazyMotion features={domAnimation}>
      <m.nav style={navLinks} initial={false} animate={navOpen ? "open" : "closed"} {...props}>
        <m.ul variants={navVariants}>
          <m.li variants={linkVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.98 }}>
            <Link href="/about" onClick={closeNav}>
              <Icon icon="carbon:information" inline="true" style={iconStyle} /> <span>About</span>
            </Link>
          </m.li>
          <m.li variants={linkVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.98 }}>
            <Link href="/blog" onClick={closeNav}>
              <Icon icon="carbon:blog" inline="true" style={iconStyle} /> <span>Blog</span>
            </Link>
          </m.li>
          <m.li variants={linkVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.98 }}>
            <Link href="/shop" onClick={closeNav}>
              <Icon icon="carbon:shopping-bag" inline="true" style={iconStyle} /> <span>Shop</span>
            </Link>
          </m.li>
          <m.li variants={linkVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.98 }}>
            <Link href="/contact" onClick={closeNav}>
              <Icon icon="carbon:chat" inline="true" style={iconStyle} /> <span>Contact</span>
            </Link>
          </m.li>
          <m.li variants={linkVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.98 }} onClick={() => setCartOpen(true)}>
            <Link href="/shop/cart" onClick={closeNav}>
              <Icon icon="carbon:shopping-cart" inline="true" style={iconStyle} /> <span>{totalItems}</span>
            </Link>
          </m.li>
        </m.ul>
      </m.nav>
      <div className="mobileNav flex md:hidden absolute right-4">
        <button
          onClick={() => toggleNav()}
          className="flex items-center justify-center w-12 h-12 text-white bg-liquid-900 rounded-full cursor-pointer"
        >
          {!navOpen ? (
            <Icon icon="carbon:menu" inline="true" width="2rem" style={iconStyle} />
          ) : (
            <Icon icon="carbon:close" inline="true" width="2rem" style={iconStyle} />
          )}
        </button>
      </div>
    </LazyMotion>
  )
}

export const NavBar = () => {
  return (
    <>
      <Nav className="hidden md:flex relative" />
      <MobileNav className="flex md:hidden absolute" />
    </>
  )
}

