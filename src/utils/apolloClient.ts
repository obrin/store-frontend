import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as _ApolloProvider,
} from "@apollo/client";

export const ApolloProvider = _ApolloProvider

const URI = process.env.REACT_APP_API_URI

export const client = new ApolloClient({
  uri: URI,
  cache: new InMemoryCache()
});

