import { gql } from 'graphql-request'

// Request for all pages
export const allPagesQuery = gql`
  query getPages {
    pages (first: 20) {
      nodes {
        id
        title
        slug
        uri
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
      }
    }
  }
`

// Request for single page
export const pageQuery = gql`
  query getPage($slug: String!) {
    pageBy(uri: $slug) {
      id
      slug
      date
      title
      content
      id
      pageId
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
  }  
}`