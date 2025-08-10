import { Metadata } from 'next'
import ProductClient from './ProductClient'
import { SearchParams } from 'next/navigation'

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

type PageParams = {
  id: string;
}

type Props = {
  params: PageParams;
  searchParams?: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = await getProduct(params.id)
  return {
    title: `${product.name} | Onki Spa`,
    description: product.description,
  }
}

interface PageProps {
  params: PageParams;
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function ProductPage({ params }: PageProps) {
  const product = await getProduct(params.id)
  return <ProductClient product={product} />
}
