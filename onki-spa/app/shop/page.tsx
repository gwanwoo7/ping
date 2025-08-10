import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function ShopPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-display text-center mb-12">Our Products</h1>
      
      {/* Current Products Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-display mb-8">Shower Steamers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="bg-neutral-lightest rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-display mb-8">Coming Late 2025</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-2">Luxury Shampoo</h3>
            <p className="text-neutral-dark">Experience the perfect balance of cleansing and nourishment with our upcoming premium shampoo.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-2">Body Cleanser</h3>
            <p className="text-neutral-dark">Transform your daily shower with our gentle yet effective body cleanser, coming soon.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-2">Facial Cleanser</h3>
            <p className="text-neutral-dark">Complete your spa routine with our specially formulated facial cleanser.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
