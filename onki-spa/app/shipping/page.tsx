'use client'

export default function ShippingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-display mb-12 text-center">Shipping Information</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-display mb-4">Delivery Options</h2>
          <div className="bg-neutral-lightest p-6 rounded-lg space-y-4">
            <div>
              <h3 className="font-medium">Standard Shipping (Free)</h3>
              <p className="text-neutral-dark">Delivery in 5-7 business days</p>
            </div>
            <div>
              <h3 className="font-medium">Express Shipping ($12.99)</h3>
              <p className="text-neutral-dark">Delivery in 2-3 business days</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-display mb-4">Shipping Policy</h2>
          <div className="prose prose-neutral max-w-none">
            <ul className="space-y-4">
              <li>Free standard shipping on all orders within the United States</li>
              <li>Orders are processed and shipped Monday through Friday, excluding holidays</li>
              <li>Orders placed after 2 PM EST will be processed the next business day</li>
              <li>Tracking information will be provided via email once your order ships</li>
              <li>International shipping is currently not available</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-display mb-4">Returns</h2>
          <div className="prose prose-neutral max-w-none">
            <p>
              We accept returns within 30 days of delivery for unused items in their original packaging. 
              Return shipping costs will be covered by ONKI Spa for defective items only.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-display mb-4">Contact Us</h2>
          <p className="text-neutral-dark">
            For any shipping-related questions, please contact our customer service team at 
            <a href="mailto:support@onkispa.com" className="text-primary hover:text-primary-dark ml-1">
              support@onkispa.com
            </a>
          </p>
        </section>
      </div>
    </div>
  )
}
