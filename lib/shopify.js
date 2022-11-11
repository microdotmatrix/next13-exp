// Load GraphQL Request module
import { GraphQLClient, gql } from "graphql-request";

export const API_URL = process.env.SHOPIFY_GRAPHQL_URL
export const ACCESS_TOKEN = process.env.SHOPIFY_ACCESS_TOKEN

export function sleep(n = 500) {
  return new Promise((r) => setTimeout(r, n));
}

// Init GraphQL Client with proper headers
export const graphql = new GraphQLClient(API_URL, {
  headers: {
    "Content-Type": "application/json",
    "X-Shopify-Storefront-Access-Token": ACCESS_TOKEN
  },
  credentials: 'same-origin',
  cache: 'force-cache'
});