import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: `https://devapiv2.walcart.com/graphql`,
  cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient as any}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
