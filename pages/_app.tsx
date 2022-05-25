import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Head from 'next/head';
import Layout from '../components/Layout';

export const apolloClient = new ApolloClient({
  uri: `https://devapiv2.walcart.com/graphql`,
  cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ApolloProvider client={apolloClient as any}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>

  )
}

export default MyApp
