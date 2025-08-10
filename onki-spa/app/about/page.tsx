'use client'

import { CldImage } from 'next-cloudinary'

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl font-display mb-8 text-center">Onki Spa: A Global Journey to Your Daily Sanctuary</h1>
        
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="relative rounded-lg overflow-hidden bg-neutral-lightest md:w-1/2 mx-auto">
            <CldImage
              src="Concept_ONKI_Spa_2_mfmfhj"
              alt="ONKI Spa Concept"
              width={762}  // Increased by 10%
              height={1016}  // Increased by 10%
              className="w-full object-cover rounded-lg"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          
          <div className="space-y-6 prose prose-neutral md:w-1/2">
            <p className="text-neutral-dark">
              The story of Onki Spa begins not in a laboratory, but in the serene hot springs of Japan 
              and the healing spas of Korea. It was here, in the heartlands of bathing culture, that 
              our founder—a lifelong connoisseur of wellness—embarked on a global pilgrimage.
            </p>
            
            <p className="text-neutral-dark">
              This quest spanned over 30 countries and 200 cities, driven by a passion to uncover the world's most 
              profound moments of tranquility found in water and nature.
            </p>

            <p className="text-neutral-dark">
              From the quiet cypress onsens of Hakone to the mineral-rich thermal baths of Tuscany, 
              a single, powerful question emerged: Why must true restoration be a rare luxury we travel for, 
              rather than a daily ritual we can return to?
            </p>

          </div>
        </div>

        <div className="mt-12 space-y-6 prose prose-neutral max-w-none">
            
            <p className="text-neutral-dark">
              Onki Spa is the answer. We were born from the desire to close that distance, transforming 
              the simple, everyday shower into a mindful escape. Our mission is to bring the essence of a 
              world-class spa experience into the sanctuary of your own home.
            </p>

          <p className="text-neutral-dark">
            Drawing inspiration from the earth's purest elements and the serene power of water, each 
            product is thoughtfully crafted to be a vessel of peace. We meticulously select ingredients 
            that capture the healing gifts of nature, creating formulas that not only cleanse the body 
            but also restore the mind and spirit.
          </p>

          <p className="text-neutral-dark">
            When you step into your shower with Onki Spa, you are doing more than just cleansing. You 
            are beginning a ritual. A moment to wash away the noise of the day, to reconnect with yourself, 
            and to find a pocket of peace in your routine.
          </p>

          <p className="text-neutral-dark font-medium italic">
            This is your daily invitation to tranquility. Welcome to Onki Spa.
          </p>
        </div>
      </div>

      <div className="bg-neutral-lightest py-16 px-4 rounded-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-display mb-8">Our Commitment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-medium text-xl mb-3">Natural Ingredients</h3>
              <p className="text-neutral-dark">
                We use only the highest quality natural ingredients and essential oils.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-xl mb-3">Sustainable Practices</h3>
              <p className="text-neutral-dark">
                Our packaging is eco-friendly and we minimize our environmental impact.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-xl mb-3">Quality Assurance</h3>
              <p className="text-neutral-dark">
                Every product is carefully tested to ensure the highest standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
