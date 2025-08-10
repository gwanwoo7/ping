'use client'

import { useCart } from '../context/CartContext'
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'
import { useState } from 'react'

export default function CheckoutPage() {
  const { state } = useCart()
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle checkout logic here
    console.log('Checkout submitted:', formData)
    alert('Thank you for your order! This is a demo checkout.')
  }

  if (state.items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-display mb-4">Your Cart is Empty</h1>
        <p className="text-neutral-dark mb-8">Add some products to your cart before checking out.</p>
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
      <h1 className="text-3xl font-display mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Checkout Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contact Information */}
            <div>
              <h2 className="text-xl font-medium mb-4">Contact Information</h2>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-neutral-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Shipping Address */}
            <div>
              <h2 className="text-xl font-medium mb-4">Shipping Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="p-3 border border-neutral-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="p-3 border border-neutral-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-neutral-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mt-4"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="p-3 border border-neutral-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                  className="p-3 border border-neutral-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  name="zipCode"
                  placeholder="ZIP Code"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  required
                  className="p-3 border border-neutral-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Payment Information */}
            <div>
              <h2 className="text-xl font-medium mb-4">Payment Information</h2>
              <input
                type="text"
                name="cardNumber"
                placeholder="Card number"
                value={formData.cardNumber}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-neutral-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mb-4"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="expiryDate"
                  placeholder="MM/YY"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  required
                  className="p-3 border border-neutral-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  required
                  className="p-3 border border-neutral-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-light transition-colors font-medium"
            >
              Complete Order
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-neutral-lightest p-6 rounded-lg">
            <h2 className="text-xl font-medium mb-6">Order Summary</h2>
            
            {/* Cart Items */}
            <div className="space-y-4 mb-6">
              {state.items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-16 h-16 relative rounded-lg overflow-hidden">
                    <CldImage
                      src={item.image}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-neutral-dark">Qty: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${state.total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${(state.total * 0.08).toFixed(2)}</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-medium text-lg">
                <span>Total</span>
                <span>${(state.total * 1.08).toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Link
              href="/cart"
              className="text-primary hover:text-primary-light"
            >
              ← Back to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
