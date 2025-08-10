'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useCart } from '@/app/context/CartContext'

// This would typically come from your database
const getProduct = async (id: string) => {
  // Mock product data
  return {
    id,
    name: 'Eucalyptus & Menthol Shower Steamer',
    price: 14.99,
    image: '/images/products/eucalyptus-steamer.jpg',
    description: 'Transform your shower into a spa-like experience with our invigorating Eucalyptus & Menthol shower steamer. This aromatherapy tablet releases therapeutic vapors as it dissolves, helping to clear your airways and refresh your senses.',
    benefits: [
      'Opens airways and promotes deep breathing',
      'Perfect for morning showers or when feeling congested',
      'Made with 100% natural essential oils',
      'Long-lasting aromatherapy experience',
    ],
    ingredients: [
      'Sodium Bicarbonate',
      'Citric Acid',
      'Eucalyptus Essential Oil',
      'Menthol Crystals',
      'Natural Colorant',
    ],
    instructions: [
      'Place the steamer tablet on the shower floor',
      'Position away from direct water stream',
      'Allow the steam to activate the aromatherapy',
      'Enjoy for 1-2 showers',
    ],
  }
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)
  const { dispatch } = useCart()
  const product = getProduct(params.id) // In a real app, this would be async

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
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="aspect-square relative rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
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
    </div>
  )
}
