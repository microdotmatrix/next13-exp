// Load GraphQL Request module
import { GraphQLClient, gql } from "graphql-request";

export const API_URL = process.env.WP_GRAPHQL_URL

async function fetchAPI(query = '', { variables } = {}) {
  const headers = { 'Content-Type': 'application/json' }

  // WPGraphQL Plugin must be enabled
  const res = await fetch(API_URL, {
    headers,
    method: 'POST',
    body: JSON.stringify({
      query,
      variables,
    }),
  }).then((res) => res.json())

  return await res
}

export async function getPostSlugs() {
  const data = await fetchAPI({
    query: gql`
      query {
        posts(first: 10000) {
          edges {
            node {
              slug
            }
          }
        }
      }
    `,
  })

  return data?.posts?.edges.map(({ node }) => node)
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(
    gql`query fetchPosts{
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  return data?.posts
}


export async function fetchPostBySlug(slug) {
  const data = await fetchAPI(
    gql`query fetchBySlug($slug: STRING!) {
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
    }`
  )
  return data?.postBy
}

const is404 = (error) => /not found/i.test(error.message)

// Return promise function with a load delay timer for suspense animations
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

// GraphQL query posts
export const GET_POSTS = gql`
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
`;

// Fetching posts from WordPress
export async function getPosts() {
  try {
    let data = await graphql.request(GET_POSTS, {});
    return data?.posts
  } catch (error) {
    throw error.message
  }
}

export const GET_POST_SLUGS = gql`
  query getPostSlugs {
    posts (first: 100, where: {orderby: {field: DATE, order: DESC}}) {
      nodes {
        slug
      }
    }
  }
`

// GraphQL query post by slug
export const GET_POST = gql`
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
`;

// Fetching single post by it's slug param from WordPress
export async function getPost({ slug }) {
  try {
    let data = await graphql.request(GET_POST, { slug });
    return data?.postBy;
  } catch (error) {
    if (is404(error)) return
    throw error.message
  }
}
