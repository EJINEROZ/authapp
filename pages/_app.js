import Head from "next/head"
import { LRAuthProvider } from "loginradius-react"
import { ChakraProvider } from "@chakra-ui/react"
import Layout from "../layout/layout"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Loginradius Next</title>
      </Head>

      <LRAuthProvider
        appName="your-app-name"
        apiKey="your-api-key"
        redirectUri={"http://localhost:3000/"}
      >
        <ChakraProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </LRAuthProvider>
    </>
  )
}

export default MyApp