import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as _ApolloProvider,
} from "@apollo/client";

export const ApolloProvider = _ApolloProvider

const URI = process.env.API_URI || 'http://api.home.local/graphql'

export const client = new ApolloClient({
  uri: URI,
  cache: new InMemoryCache()
});

