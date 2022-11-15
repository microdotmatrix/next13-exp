import { gql } from 'graphql-request'

export const GET_CART = gql`
  query GET_CART {
    cart {
      contents {
        nodes {
          key
          product {
            id
            databaseId
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
            databaseId
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
          databaseId
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

export const ADD_TO_CART = gql`
  mutation ($input: AddToCartInput!) {
    addToCart(input: $input) {
      cartItem {
        key
        product {
          id
          databaseId
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
          databaseId
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
export const CHECKOUT_MUTATION = gql`
  mutation CHECKOUT_MUTATION($input: CheckoutInput!) {
    checkout(input: $input) {
      result
      redirect
    }
  }
`;
export const UPDATE_CART = gql`
  mutation ($input: UpdateItemQuantitiesInput!) {
    updateItemQuantities(input: $input) {
      items {
        key
        product {
          id
          databaseId
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
          databaseId
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
      removed {
        key
        product {
          id
          databaseId
        }
        variation {
          id
          databaseId
        }
      }
      updated {
        key
        product {
          id
          databaseId
        }
        variation {
          id
          databaseId
        }
      }
    }
  }
`;