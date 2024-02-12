import '@/styles/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {

  const router = useRouter()

  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('769331605091435') // facebookPixelId
        ReactPixel.pageView()

        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView()
        })
      })
  }, [router.events])

  return <Component {...pageProps} />
}
