'use client'

import { useState } from 'react'
import { CldImage } from 'next-cloudinary'
import { useCart } from '@/app/context/CartContext'
import CartModal from '@/app/components/CartModal'

type ProductType = {
  id: string
  name: string
  price: number
  image: string
  description: string
  benefits: string[]
  ingredients: string[]
  instructions: string[]
}

export default function ProductClient({ product }: { product: ProductType }) {
  const [quantity, setQuantity] = useState(1)
  const [showModal, setShowModal] = useState(false)
  const { dispatch } = useCart()

  const addToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity,
      },
    })
    setShowModal(true)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="aspect-square relative rounded-lg overflow-hidden">
          <CldImage
            src={product.image}
            alt={product.name}
            width={600}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-display mb-4">{product.name}</h1>
          <p className="text-2xl mb-6">${product.price.toFixed(2)}</p>
          
          <p className="text-neutral-dark mb-8">
            {product.description}
          </p>

          <div className="flex gap-4 mb-8">
            <div className="flex items-center border rounded">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 hover:bg-neutral-lightest"
              >
                -
              </button>
              <span className="px-3 py-1 border-x">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 hover:bg-neutral-lightest"
              >
                +
              </button>
            </div>

            <button
              onClick={addToCart}
              className="flex-1 bg-primary text-white py-2 px-6 rounded-lg hover:bg-primary-light transition-colors"
            >
              Add to Cart
            </button>
          </div>

          {/* Product Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-medium mb-2">Benefits</h2>
              <ul className="list-disc list-inside text-neutral-dark space-y-1">
                {product.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-2">Ingredients</h2>
              <ul className="list-disc list-inside text-neutral-dark space-y-1">
                {product.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-2">How to Use</h2>
              <ol className="list-decimal list-inside text-neutral-dark space-y-1">
                {product.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>

      <CartModal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        productName={product.name}
      />
    </div>
  )
}
