'use client'

import { useCart } from '../context/CartContext'
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'
import { TrashIcon } from '@heroicons/react/24/outline'

export default function CartPage() {
  const { state, dispatch } = useCart()

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } })
  }

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }

  if (state.items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-display mb-4">Your Cart is Empty</h1>
        <p className="text-neutral-dark mb-8">Discover our collection of luxury spa products.</p>
        <Link
          href="/shop"
          className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-light transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-display mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {state.items.map((item) => (
            <div key={item.id} className="flex gap-4 py-4 border-b">
              <div className="w-24 h-24 relative rounded-lg overflow-hidden">
                <CldImage
                  src={item.image}
                  alt={item.name}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-neutral-dark mb-2">${item.price.toFixed(2)}</p>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center border rounded">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-1 hover:bg-neutral-lightest"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 border-x">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 hover:bg-neutral-lightest"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-neutral-lightest p-6 rounded-lg h-fit">
          <h2 className="text-xl font-medium mb-4">Order Summary</h2>
          
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${state.total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
          </div>

          <div className="border-t pt-4 mb-6">
            <div className="flex justify-between font-medium">
              <span>Total</span>
              <span>${state.total.toFixed(2)}</span>
            </div>
          </div>

          <Link
            href="/checkout"
            className="block w-full bg-primary text-white text-center py-3 rounded-lg hover:bg-primary-light transition-colors"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  )
}
