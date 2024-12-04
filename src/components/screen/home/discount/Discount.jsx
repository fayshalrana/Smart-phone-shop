import ProductCard from '@/components/productCard/ProductCard'
import React from 'react'
import img0 from '@/assets/images/products/iphone-gold.webp';
import img1 from '@/assets/images/products/headset.webp';
import img2 from '@/assets/images/products/watch.webp';
import img3 from '@/assets/images/products/iphone-blue.webp';


// Array containing product information
const discountProducts = [
    {
        img: img0,
        name: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
        price: "$1437"
    },
    {
        img: img1,
        name: "AirPods Max Silver",
        price: "$549"
    },
    {
        img: img2,
        name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium Case",
        price: "$399"
    },
    {
        img: img3,
        name: "Apple iPhone 14 Pro 1TB white (MQ2V3)",
        price: "$1499"
    }
];
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
                            discountProducts.map((item, i) => (
                                <ProductCard key={i} product={item} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Discount
