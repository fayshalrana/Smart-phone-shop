import ProductCard from '@/components/productCard/ProductCard'
import React from 'react'

const RelatedProduct = () => {
  return (
    <section className='py-20'>
      <div className="container">
        <h2 className='text-2xl font-medium leading-8 text-black'>Related Products</h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {
            Array.from({ length: 4 }).map((_, index) => (
              <ProductCard key={index} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default RelatedProduct
