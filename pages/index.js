import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Link href="/Login"><h1>Hello</h1></Link>
    </>
  )
}
