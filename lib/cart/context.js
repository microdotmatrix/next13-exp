"use client"

import React, { useState, useEffect, createContext } from 'react';

export const AppContext = createContext();

/**
 * Provides a global application context for the entire application with the cart contents
 * @param {Object} props
 */
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    // Check if we are client-side before we access the localStorage
    if (!process.browser) {
      return;
    }
    let cartData = localStorage.getItem('woocommerce-cart');
    cartData = null !== cartData ? JSON.parse(cartData) : '';
    setCart(cartData);
  }, []);

  const [cartItems, setCartitems] = useState([]);

  const handleAdd = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist && productExist.productinCart < product.quantity) {
      setCartitems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, productinCart: productExist.productinCart + 1 }
            : item
        )
      );
    } else {
      alert("Sorry, product is out of stock!");
    }
  }

  const handleDecrease = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist.productinCart === 1) {
      setCartitems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartitems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, productinCart: productExist.productinCart - 1 }
            : item
        )
      );
    }
  }; 
  
  const handleDelete = (product) => {
    setCartitems(cartItems.filter((item) => item.id !== product.id));
  };

  const totalQuantity = (cartItems) => {
    if (!cartItems.length) return 0;

    const totalItem = cartItems
      .map((item) => item.productinCart)
      .reduce((totalItem, n) => totalItem + n);

    return totalItem;
  };

  const handleAddtocart = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if(product.quantity!==0) {
      if (productExist) {
        alert("Product is alredy in the cart, please check the shopping cart!");
      } else {
        setCartitems([...cartItems, { ...product, productinCart: 1 }]);
      }
    } else {
      alert("Sorry, product is out of stock!");
    }
  };

  return (
    <AppContext.Provider value={[cart, setCart]}>
      {children}
    </AppContext.Provider>
  );
};
