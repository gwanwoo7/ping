'use client'

import { CldImage } from 'next-cloudinary'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="w-32 h-12 mb-4">
              <CldImage
                src="Onki_Logo_higher_qual_w8gbep"
                alt="ONKI Spa"
                width={128}
                height={48}
                className="object-contain w-full h-full brightness-0 invert"
                format="webp"
              />
            </div>
            <p className="text-neutral-light">
              Bringing the luxury spa experience into your home
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><a href="/shop" className="text-neutral-light hover:text-white">All Products</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-neutral-light hover:text-white">About Us</a></li>
              <li><a href="/contact" className="text-neutral-light hover:text-white">Contact</a></li>
              <li><a href="/shipping" className="text-neutral-light hover:text-white">Shipping</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Shop With Us</h4>
            <ul className="space-y-2">
              <li><a href="/instagram" className="text-neutral-light hover:text-white">Instagram</a></li>
              <li><a href="https://amazon.com" target="_blank" rel="noopener noreferrer" className="text-neutral-light hover:text-white">Amazon</a></li>
              <li><a href="https://etsy.com" target="_blank" rel="noopener noreferrer" className="text-neutral-light hover:text-white">Etsy</a></li>
              <li><a href="https://shopify.com" target="_blank" rel="noopener noreferrer" className="text-neutral-light hover:text-white">Shopify</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-neutral-light">
          <p>&copy; {new Date().getFullYear()} ONKI Spa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
