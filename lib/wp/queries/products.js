import { gql } from 'graphql-request'

// Request all products from WP WooCommerce
export const productsQuery = gql`
  query GetProducts {
    products(first: 100) {
      nodes {
        id
        name
        slug
        description
        shortDescription
        purchasable
        productTags(first: 10) {
          nodes {
            name
            slug
          }
        }
        image {
          sourceUrl
          sizes
          srcSet
          altText
          description
          mediaDetails {
            width
            height
          }
        }
        
        ... on SimpleProduct {
          name
          featured
          price
          salePrice
          regularPrice
        }
      }
    }
  }
`

// Request single product
export const productQuery = gql`
  query GetProduct($slug: ID!) {
    product(id: $slug, idType: SLUG) {
      id
        name
        slug
        description
        shortDescription
        purchasable
        productTags(first: 10) {
          nodes {
            name
            slug
          }
        }
        image {
          sourceUrl
          sizes
          srcSet
          altText
          description
          mediaDetails {
            width
            height
          }
        }
        galleryImages(first: 10) {
          nodes {
            sourceUrl
            sizes
            srcSet
            description
            altText
            mediaDetails {
              width
              height
            }
          }
        }
        
        ... on SimpleProduct {
          name
          featured
          price
          salePrice
          regularPrice
        }
    }
  }
`