import Head from 'next/head'
import { Quicksand } from 'next/font/google'

import Hero from '@/components/Hero'
import Projects from '@/components/Projects'

const quicksand = Quicksand({ 
  subsets: ['latin'] 
})

export default function Home() {
  return (
    <>
      <Head>
        <title>John Golden</title>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className={quicksand.className}>
        <Hero />
        <Projects />
      </main>
    </>
  )
}
