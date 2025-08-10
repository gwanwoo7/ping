'use client'

import Link from 'next/link'
import { CldImage } from 'next-cloudinary'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
                    <Link href="/" className="block h-20 py-2">
            <CldImage
              src="Onki_Logo_higher_qual_w8gbep"
              alt="ONKI Spa"
              width={720}
              height={192}
              className="object-contain w-auto h-full"
              priority
              format="webp"
            />
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/shop" className="text-neutral-dark hover:text-primary">
              Shop
            </Link>
            <Link href="/about" className="text-neutral-dark hover:text-primary">
              About
            </Link>
            <Link href="/contact" className="text-neutral-dark hover:text-primary">
              Contact
            </Link>
          </div>

          <div className="flex items-center">
            <Link href="/cart" className="p-2 text-neutral-dark hover:text-primary">
              <ShoppingBagIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
