import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'is-my-coffee-cold',
  description: 'A simple web application to work out how long until your coffee goes cold.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
