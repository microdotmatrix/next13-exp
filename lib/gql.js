"use client"

import { createClient, Provider } from 'urql';

const API_URL = process.env.NEXT_WP_GRAPHQL_URL;

export const client = createClient({
  url: API_URL,
});

export function GQLProvider({ children }) {
  return (
    <Provider value={client}>
      { children }
    </Provider>
  )
}