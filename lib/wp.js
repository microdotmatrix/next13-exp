// Load GraphQL Request module
import { GraphQLClient, gql } from "graphql-request";

export const API_URL = process.env.WP_GRAPHQL_URL

export function sleep(n = 500) {
  return new Promise((r) => setTimeout(r, n));
}

// Init GraphQL Client with proper headers
export const graphql = new GraphQLClient(API_URL, {
  headers: {
    "Content-Type": "application/json"
  },
  credentials: 'same-origin',
  cache: 'force-cache'
});

export const getMenu = gql`
  query SiteNavigation {
    menu(id: "primary", idType: NAME) {
      menuItems(first: 10) {
        nodes {
          label
          path
        }
      }
    }
  }
`

export const allPostsQuery = gql`
  query getPosts {
    posts (first: 100, where: {orderby: {field: DATE, order: DESC}}) {
      nodes {
        postId
        date
        slug
        uri
        title
        excerpt
        featuredImage {
          node {
            sourceUrl
            title
            sizes
            description
            caption
            altText
          }
        }
        tags(first: 10) {
          nodes {
            name
          }
        }
        categories(first: 5) {
          nodes {
            name
          }
        }
        author {
          node {
            name
            slug
            firstName
            lastName
            email
            url
            avatar {
              url
            }
          }
        }
      } 
    }
  }
`

export const postQuery = gql`
  query getPost($slug: String!) {
    postBy(slug: $slug) {
      id
      slug
      ...PostFragment
    }
  }
  fragment PostFragment on Post {
    date
    title
    excerpt
    content
    featuredImage {
      node {
        sourceUrl
        title
        sizes
        description
        caption
        altText
      }
    }
    tags(first: 10) {
      nodes {
        name
      }
    }
    categories(first: 5) {
      nodes {
        name
      }
    }
    author {
      node {
        name
        firstName
        lastName
        email
        nickname
        slug
        avatar {
          url
        }
      }
    }
  }
`

export const pageQuery = gql`
  query getPage($slug: String!) {
    pageBy(uri: $slug) {
      id
      slug
      ...PageFragment
    }
  }
  fragment PageFragment on Page {
    date
    title
    content
    id
    pageId
    featuredImage {
      node {
        sourceUrl
        title
        sizes
        description
        caption
        altText
      }
    }
  }
`

export const productsQuery = gql`
  query GetProducts {
    products(first: 10) {
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

export const GET_PRODUCTS = gql`
  query GetProducts {
    products(first: 5) {
      nodes {
        name
        slug
        description
        image {
          altText
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
        ... on SimpleProduct {
          price
          salePrice
          regularPrice
        }
        ... on VariableProduct {
          price
          salePrice
          regularPrice
        }
        ... on ExternalProduct {
          price
          salePrice
          regularPrice
        }
      }
    }
  }
`;

export const GET_PRODUCT = gql`
  query GetProduct($slug: ID!) {
    product(id: $slug, idType: SLUG) {
      name
      slug
      description
      image {
        altText
        sourceUrl
        mediaDetails {
          height
          width
        }
      }
      ... on SimpleProduct {
        price
        salePrice
        regularPrice
      }
      ... on VariableProduct {
        price
        salePrice
        regularPrice
      }
      ... on ExternalProduct {
        price
        salePrice
        regularPrice
      }
    }
  }
`