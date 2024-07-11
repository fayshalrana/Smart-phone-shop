import ProductCard from '@/components/productCard/ProductCard'
import React from 'react'

const Discount = () => {
    return (
        <section className='py-20'>
            <div className="container">
                <div className="">
                    <h2 className='text-2xl font-medium leading-8 text-black '>Discounts up ot -50%</h2>
                </div>
                <div className="mt-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {
                            Array.from({ length: 4 }).map((_, i) => (
                                <ProductCard key={i} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Discount
