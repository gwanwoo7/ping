import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Delete existing records
  await prisma.orderItem.deleteMany()
  await prisma.order.deleteMany()
  await prisma.product.deleteMany()
  await prisma.newsletter.deleteMany()
  await prisma.contact.deleteMany()

  // Create products
  const products = [
    {
      name: 'Eucalyptus & Menthol Shower Steamer',
      description: 'Transform your shower into a spa-like experience with our invigorating Eucalyptus & Menthol shower steamer.',
      price: 14.99,
      image: '/images/products/eucalyptus-steamer.jpg',
      category: 'shower-steamers'
    },
    {
      name: 'Lavender & Chamomile Shower Steamer',
      description: 'Unwind and relax with the calming scents of lavender and chamomile in your daily shower ritual.',
      price: 14.99,
      image: '/images/products/lavender-steamer.jpg',
      category: 'shower-steamers'
    },
    {
      name: 'Citrus Blend Shower Steamer',
      description: 'Start your day with an energizing burst of citrus essential oils in your morning shower.',
      price: 14.99,
      image: '/images/products/citrus-steamer.jpg',
      category: 'shower-steamers'
    }
  ]

  for (const product of products) {
    await prisma.product.create({
      data: product
    })
  }

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
