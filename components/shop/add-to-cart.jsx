import Link from "next/link";
import { useState, useContext } from "react";
import { AppContext } from "@lib/cart/context";
import { addFirstProduct, updateCart, getFormattedCart } from "@util/functions";
// import { useQuery, useMutation } from '@apollo/client';
import { v4 } from "uuid";
import gql from "graphql-request"; //parses graphql query string into abstract syntax

//wp graphql woo commerce maintaining session for the carts, if it got cleared or processed or not
const GET_CART = gql`
  query GET_CART {
    cart {
      contents {
        nodes {
          key
          product {
            id
            productId
            name
            description
            type
            onSale
            slug
            averageRating
            reviewCount
            image {
              id
              sourceUrl
              srcSet
              altText
              title
            }
            galleryImages {
              nodes {
                id
                sourceUrl
                srcSet
                altText
                title
              }
            }
          }
          variation {
            id
            variationId
            name
            description
            type
            onSale
            price
            regularPrice
            salePrice
            image {
              id
              sourceUrl
              srcSet
              altText
              title
            }
            attributes {
              nodes {
                id
                name
                value
              }
            }
          }
          quantity
          total
          subtotal
          subtotalTax
        }
      }
      appliedCoupons {
        nodes {
          id
          couponId
          discountType
          amount
          dateExpiry
          products {
            nodes {
              id
            }
          }
          productCategories {
            nodes {
              id
            }
          }
        }
      }
      subtotal
      subtotalTax
      shippingTax
      shippingTotal
      total
      totalTax
      feeTax
      feeTotal
      discountTax
      discountTotal
    }
  }
`;

//mutations
const ADD_TO_CART = gql`
  mutation ($input: AddToCartInput!) {
    addToCart(input: $input) {
      cartItem {
        key
        product {
          id
          productId
          name
          description
          type
          onSale
          slug
          averageRating
          reviewCount
          image {
            id
            sourceUrl
            altText
          }
          galleryImages {
            nodes {
              id
              sourceUrl
              altText
            }
          }
        }
        variation {
          id
          variationId
          name
          description
          type
          onSale
          price
          regularPrice
          salePrice
          image {
            id
            sourceUrl
            altText
          }
          attributes {
            nodes {
              id
              attributeId
              name
              value
            }
          }
        }
        quantity
        total
        subtotal
        subtotalTax
      }
    }
  }
`;

const AddToCart = (props) => {
  const { product } = props;
  const productQryInput = {
    clientMutationId: v4(), //generate a unique id
    productId: product.productId,
  };
  const [cart, setCart] = useContext(AppContext);
  const [showViewCart, setShowViewCart] = useState(false);
  const [requestError, setRequestError] = useState(null);

  console.log("cart added".cart);

  //testing to see something

  // const handleAddToCartClick=()=>{
  //     if(process.browser){
  //         let existingCart = localStorage.getItem('woo-next-cart');

  //         //if cart has item(s) already, then update the exiting
  //         if(existingCart){
  //             //pull stuff out of existing cart, and convert to object (its in string format right now)
  //             existingCart = JSON.parse(existingCart)
  //             const qtyToBeAdded=1;

  //             const updatedCart = updateCart(existingCart, product, qtyToBeAdded)
  //             setCart(updatedCart)
  //         }else{

  //             //if no item in the cart, create an empty array and push the item
  //             const newCart = addFirstProduct(product);
  //             setCart(newCart)
  //         }
  //         setShowViewCart(true)
  //     }
  //     // setShowViewCart(true)
  // }

  //get cart data query
  const { loading, error, data, refetch } = useQuery(GET_CART, {
    //usequery is a method || //refetch function query will be made again if you call it
    notifyOnNetworkStatusChange: true,
    onCompleted: () => {
      //update cart in the local storage
      const updateCart = getFormattedCart(data); //just to get the format that we want
      localStorage.setItem("woo-next-cart", JSON.stringify(updateCart));

      //update cart data in React context
      setCart(updateCart);
    },
  });

  //add to cart mutation
  const [
    addToCart,
    { data: addToCartRes, loading: addToCartLoading, error: addToCartError },
  ] = useMutation(ADD_TO_CART, {
    variables: {
      input: productQryInput, //*!!
    },
    onCompleted: () => {
      //if error
      if (addToCartError) {
        setRequestError(addToCartError.graphQLErrors[0].message);
      }

      //on success:
      //1 make the GET_CART query to update the cart w/ new values in React context
      refetch();

      //2. show view cart buttnon
      setShowViewCart(true);
    },
    onError: (error) => {
      if (error) {
        setRequestError(error.graphQLErrors[0].message);
      }
    },
  });

  const handleAddToCartClick = () => {
    //handle addd to cart local storage
    setRequestError(null);
    addToCart();
  };

  return (
    //add to cart loading
    <div>
      {addToCartLoading && <p>Adding to cart ...</p>}
      {/* check if its an external product then put its external buy link */}
      {"ExternalProduct" === product.__typename ? (
        <a
          href={product.externalUrl}
          target="_blank"
          className="px 3 py -1 rounded-sm mr-3 text-sm border-solid border border-current inline-block hover:bg-purple-600 hover:text-white hover:border-purple-600"
        >
          Buy now
        </a>
      ) : (
        <>
          <button onClick={handleAddToCartClick} className="btn btn-secondary">
            Add to cart
          </button>
          {showViewCart ? (
            <Link href="/cart">
              <button
                className="woo-next-view-cart-btn btn btn-secondary"
                style={{ marginLeft: "5px" }}
              >
                View Cart
              </button>
            </Link>
          ) : (
            ""
          )}
        </>
      )}
      {/* (<>
        <button onClick={handleAddToCartClick} className="btn btn-secondary">Add to cart</button>
        {showViewCart?(<Link href="/cart">
            <button className="woo-next-view-cart-btn btn btn-secondary" style={{marginLeft:"5px"}}>View Cart</button>
        </Link>):''}
        </>) */}
    </div>
  );
};

export default AddToCart;
