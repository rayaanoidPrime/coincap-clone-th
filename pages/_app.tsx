import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      serverUrl={process.env.NEXT_PUBLIC_REACT_APP_SERVER_URL ?? ''}
      appId={process.env.NEXT_PUBLIC_REACT_APP_APPLICATION_ID ?? ''}
    >
      <Component {...pageProps} />
    </MoralisProvider>
  )
}
export default MyApp
