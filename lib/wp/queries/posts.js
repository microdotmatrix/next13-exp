import { gql } from 'graphql-request'

// Request for all posts
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
            srcSet
            title
            sizes
            description
            caption
            altText
            mediaDetails {
              width
              height
            }
          }
        }
        tags(first: 10) {
          nodes {
            name
            slug
          }
        }
        categories(first: 5) {
          nodes {
            name
            slug
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

// Request for a single post
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
        srcSet
        title
        sizes
        description
        caption
        altText
        mediaDetails {
          width
          height
        }
      }
    }
    tags(first: 10) {
      nodes {
        name
        slug
      }
    }
    categories(first: 5) {
      nodes {
        name
        slug
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

// Request for post meta data
export const PostMetaQuery = gql`
  query PostMeta($slug: String!) {
    postBy(slug: $slug) {
      id
      slug
      seo {
        metaDesc
        opengraphDescription
        opengraphImage {
          sourceUrl
        }
        opengraphTitle
        twitterTitle
        twitterDescription
        twitterImage {
          sourceUrl
        }
        title
      }
    }
  }
`