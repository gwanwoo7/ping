'use client'

import Image from 'next/image'
import Link from 'next/link'
import { CldImage } from 'next-cloudinary'
import ProductCard from './components/ProductCard'
import { products } from './data/products'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-neutral-lightest">
          <CldImage
            src="Concept_ONKI_Spa_1_lqyhoi"
            alt="ONKI Spa Concept"
            fill
            className="object-cover w-full h-full"
            priority
            format="webp"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 z-10" />
        <div className="relative h-full flex flex-col items-center justify-end text-white z-20">
          <div className="text-center space-y-8 px-4 mb-32">
            <h1 className="font-display text-5xl md:text-7xl drop-shadow-lg">Your Sanctuary Awaits</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow">
              Experience the luxury of spa-quality aromatherapy in your own home
            </p>
            <Link 
              href="/shop"
              className="inline-block bg-white text-primary px-8 py-3 rounded-full text-lg font-medium hover:bg-opacity-90 transition-colors shadow-lg"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 bg-neutral-lightest">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-light transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-8">Our Philosophy</h2>
          <p className="text-lg text-neutral-dark mb-8">
            Inspired by the tranquility of nature and the serenity of water, ONKI brings the luxury spa experience into your home. 
            We believe in the power of small moments of self-care to transform your daily routine into a ritual of restoration.
          </p>
        </div>
      </section>


    </main>
  )
}
