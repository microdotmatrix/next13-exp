import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export function removeLastTrailingSlash(url) {
  if (typeof url !== 'string') return url;
  return url.replace(/\/$/, '');
}

let client;

/**
 * getApolloClient
 */

export function getApolloClient() {
  if (!client) {
    client = _createApolloClient();
  }
  return client;
}

/**
 * createApolloClient
 */

export function _createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: removeLastTrailingSlash(process.env.WP_GRAPHQL_URL),
    }),
    cache: new InMemoryCache({
      typePolicies: {
        RootQuery: {
          queryType: true,
        },
        RootMutation: {
          mutationType: true,
        },
      },
    }),
  });
}