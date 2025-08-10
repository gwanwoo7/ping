import './globals.css'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'ONKI Spa - Luxury Home Spa Products',
  description: 'Discover ONKI Spa\'s collection of luxury home spa products. Experience tranquility with our natural, high-quality shower steamers and wellness products.',
}

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { CartProvider } from './context/CartContext'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <CartProvider>
          <Navbar />
          <div className="min-h-screen pt-24">
            {children}
          </div>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
