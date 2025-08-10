'use client'

import Link from 'next/link'
import { CldImage } from 'next-cloudinary'

interface ProductCardProps {
  id: string
  name: string
  subtitle: string
  description: string
  price: number
  image: string
}

export default function ProductCard({ id, name, subtitle, price, image }: ProductCardProps) {
  return (
    <div className="group">
      <Link href={`/shop/${id}`}>
        <div className="aspect-square relative overflow-hidden rounded-lg bg-neutral-lightest mb-4">
          <CldImage
            src={image}
            alt={name}
            width={400}
            height={400}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            format="webp"
          />
        </div>
        <div className="text-center">
          <h3 className="text-lg font-display text-primary">{name}</h3>
          <p className="text-sm text-neutral-dark mb-2">{subtitle}</p>
          <p className="text-accent">${price.toFixed(2)}</p>
        </div>
      </Link>
    </div>
  )
}
