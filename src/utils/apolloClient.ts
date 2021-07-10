import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as _ApolloProvider,
} from "@apollo/client";

export const ApolloProvider = _ApolloProvider

export const client = new ApolloClient({
  uri: 'http://api.home.local/graphql',
  cache: new InMemoryCache()
});

