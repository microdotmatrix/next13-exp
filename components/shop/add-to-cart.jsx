"use client"

import { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { graphql } from '@lib/wp';

import { AppContext } from '@lib/cart/context';
import LoadWheel from '@comp/loadwheel';

import { GET_CART, ADD_TO_CART } from '@lib/cart/queries';

import { getFormattedCart } from '@util/functions';

/**
 * Display and process product object when we click on the Add To Cart button
 * Adds product to shopping cart
 * @param {Object} product
 */
const AddToCartButton = ({ product }) => {
  const [, setCart] = useContext(AppContext);
  const [, setRequestError] = useState(null);
  const [, setShowViewCart] = useState(false);
  const [showAddToCart, setshowAddToCart] = useState(false);
  const [addToCartLoading, setAddToCartLoading] = useState(false);

  const productId = product.databaseId ? product.databaseId : product;

  const productQueryInput = {
    clientMutationId: uuidv4(), // Generate a unique id.
    productId,
  };

  // Get Cart Data.
  const { data, refetch } = graphql.request(GET_CART, {
    onCompleted: () => {
      refetch();
      // Update cart in the localStorage.
      const updatedCart = getFormattedCart(data);

      if (!updatedCart) {
        return;
      }

      localStorage.setItem('woocommerce-cart', JSON.stringify(updatedCart));

      // Update cart data in React Context.
      setCart(updatedCart);
    },
  });

  const { addToCart } =
    graphql.request(ADD_TO_CART, {
      variables: {
        input: productQueryInput,
      },
      onCompleted: () => {
        // Update the cart with new values in React context.
        refetch();
        // If error.
        if (error) {
          setRequestError(error.message);
        }
        // Show View Cart Button
        setShowViewCart(true);
        setshowAddToCart(true);
      },
      onError: (error) => {
        if (error) {
          setRequestError(error);
        }
      },
    });

  const handleAddToCartClick = () => {
    setRequestError(null);
    addToCart();
    refetch();
  };

  // Separate out conditions here for increased readability


  return (
    <>
      <button
        onClick={handleAddToCartClick}
        className="px-4 py-2 font-bold bg-white border border-gray-400 border-solid rounded hover:bg-gray-400"
      >
        ADD TO CART
      </button>

      {addToCartLoading && (
        <>
          <div className="mt-4 text-xl text-left">
            Legger i handlekurv, vennligst vent ...
            <br />
          </div>
          <div className="absolute ml-32">
            <LoadingSpinner />
          </div>
        </>
      )}
    </>
  );
};

export default AddToCartButton;