import ProductImg from '@/components/productDetails/ProductImg'
import ProductInfo from '@/components/productDetails/ProductInfo'
import React from 'react'

const ProductInformation = () => {
    return (
        <section className='py-[112px]'>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <ProductImg/>
                    <ProductInfo/>
                </div>
            </div>
        </section>
    )
}

export default ProductInformation
