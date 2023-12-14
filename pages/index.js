import { Inter } from 'next/font/google'
import Link from 'next/link'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Link href="/Login"><h1>Hello</h1></Link>
      <div id="otpless-login-page"></div>
      <Script type="text/javascript" src="https://otpless.com/auth.js" />
    </>
  )
}
