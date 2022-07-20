import { withTRPC } from '@trpc/next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Toaster } from 'react-hot-toast'
import { AppRouter } from 'src/backend/router'
import superjson from 'superjson'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Learn Flash</title>
        <meta name='description' content='A nova forma de estudar com flashcards interativos' />
        <meta property='og:title' content='Learn Flash' />
        <meta
          property='og:description'
          content='A nova forma de estudar com flashcards interativos'
        />
        <meta property='og:type' content='website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Toaster />
      <Component {...pageProps} />
    </>
  )
}

const getBaseUrl = () => {
  if (typeof window !== 'undefined') {
    return ''
  }

  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`

  return `http://localhost:${process.env.PORT ?? 3000}`
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
    const url = `${getBaseUrl()}/api/trpc`

    return {
      headers: () => {
        return {
          cookie: ctx?.req?.headers.cookie,
        }
      },
      url,
      transformer: superjson,
    }
  },
  ssr: true,
})(MyApp)
