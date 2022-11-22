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
  next: { revalidate: 60 }
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

export const navQuery = gql`
  query MenuQuery {
    menus(first: 3) {
      nodes {
        id
        name
        menuItems(first: 20) {
          nodes {
            label
            path
          }
        }
      }
    }
  }
`
