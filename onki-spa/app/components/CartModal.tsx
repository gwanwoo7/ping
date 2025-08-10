'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { CheckIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'

interface CartModalProps {
  isOpen: boolean
  onClose: () => void
  productName: string
}

export default function CartModal({ isOpen, onClose, productName }: CartModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!mounted || !isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="fixed inset-0 bg-black bg-opacity-25" onClick={onClose} />
        
        <div className="relative bg-white rounded-lg p-6 max-w-md w-full mx-auto shadow-xl">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
              <CheckIcon className="h-6 w-6 text-green-600" />
            </div>
            
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Added to Cart!
            </h3>
            
            <p className="text-sm text-gray-500 mb-6">
              {productName} has been added to your cart.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={onClose}
                className="flex-1 bg-white text-primary border border-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                Continue Shopping
              </button>
              
              <Link
                href="/cart"
                className="flex-1 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-light transition-colors text-center flex items-center justify-center gap-2"
              >
                <ShoppingCartIcon className="h-5 w-5" />
                View Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
