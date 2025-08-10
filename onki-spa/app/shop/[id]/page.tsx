import { Metadata } from 'next'
import ProductClient from './ProductClient'
import { products } from '../../data/products'

// Define return type for product data
type Product = {
  id: string
  name: string
  price: number
  image: string
  description: string
  benefits: string[]
  ingredients: string[]
  instructions: string[]
}
// This would typically come from your database
const getProduct = async (id: string): Promise<Product> => {
  // Find product from data
  const product = products.find(p => p.id === id)
  
  if (!product) {
    throw new Error(`Product with id ${id} not found`)
  }

  // Return enhanced product data with additional details
  return {
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image,
    description: product.description,
    benefits: getProductBenefits(id),
    ingredients: getProductIngredients(id),
    instructions: getProductInstructions(),
  }
}

// Get product-specific benefits
const getProductBenefits = (id: string): string[] => {
  const benefitsMap: Record<string, string[]> = {
    'clear-focus': [
      'Opens airways and promotes deep breathing',
      'Perfect for morning showers or when feeling congested',
      'Made with 100% natural essential oils',
      'Long-lasting aromatherapy experience',
    ],
    'forest-bath': [
      'Creates a forest bathing experience at home',
      'Reduces stress and promotes relaxation',
      'Pure pine essential oil for authentic scent',
      'Sustainable and eco-friendly ingredients',
    ],
    'quiet-mind': [
      'Promotes mental clarity and focus',
      'Reduces anxiety and stress',
      'Traditional Japanese Hinoki cypress scent',
      'Perfect for meditation and mindfulness',
    ],
    'midnight-calm': [
      'Promotes restful sleep and relaxation',
      'Calming lavender and chamomile blend',
      'Perfect for evening wind-down routine',
      'Natural stress relief properties',
    ],
    'radiant-energy': [
      'Boosts energy and mood naturally',
      'Refreshing citrus and yuzu blend',
      'Perfect morning pick-me-up',
      'Vitamin C-rich essential oils',
    ],
    'gentle-grace': [
      'Luxurious rose essence for self-care',
      'Moisturizing and skin-loving properties',
      'Promotes feelings of love and compassion',
      'Perfect for special occasions',
    ],
  }
  
  return benefitsMap[id] || [
    'Premium aromatherapy experience',
    'Made with natural essential oils',
    'Long-lasting fragrance',
    'Perfect for daily wellness routine',
  ]
}

// Get product-specific ingredients
const getProductIngredients = (id: string): string[] => {
  const ingredientsMap: Record<string, string[]> = {
    'clear-focus': [
      'Sodium Bicarbonate',
      'Citric Acid',
      'Eucalyptus Essential Oil',
      'Menthol Crystals',
      'Natural Colorant',
    ],
    'forest-bath': [
      'Sodium Bicarbonate',
      'Citric Acid',
      'Pine Essential Oil',
      'Natural Forest Blend',
      'Natural Colorant',
    ],
    'quiet-mind': [
      'Sodium Bicarbonate',
      'Citric Acid',
      'Hinoki Cypress Essential Oil',
      'Natural Wood Extract',
      'Natural Colorant',
    ],
    'midnight-calm': [
      'Sodium Bicarbonate',
      'Citric Acid',
      'Lavender Essential Oil',
      'Chamomile Extract',
      'Natural Colorant',
    ],
    'radiant-energy': [
      'Sodium Bicarbonate',
      'Citric Acid',
      'Citrus Essential Oil Blend',
      'Yuzu Extract',
      'Natural Colorant',
    ],
    'gentle-grace': [
      'Sodium Bicarbonate',
      'Citric Acid',
      'Rose Essential Oil',
      'Natural Rose Petals',
      'Natural Colorant',
    ],
  }
  
  return ingredientsMap[id] || [
    'Sodium Bicarbonate',
    'Citric Acid',
    'Natural Essential Oils',
    'Natural Extracts',
    'Natural Colorant',
  ]
}

// Common instructions for all products
const getProductInstructions = (): string[] => {
  return [
    'Place the steamer tablet on the shower floor',
    'Position away from direct water stream',
    'Allow the steam to activate the aromatherapy',
    'Enjoy for 1-2 showers',
    'Store remaining tablets in a dry place',
  ]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const product = await getProduct(id)
  return {
    title: `${product.name} | Onki Spa`,
    description: product.description,
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = await getProduct(id)
  return <ProductClient product={product} />
}
