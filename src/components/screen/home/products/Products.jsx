"use client"
import EmptyCard from '@/components/productCard/EmptyCard';
import ProductCard from '@/components/productCard/ProductCard';
import React, { useState } from 'react'
import img0 from '@/assets/images/products/Iphone14pro.webp';
import img1 from '@/assets/images/products/camera.webp';
import img2 from '@/assets/images/products/watch.webp';
import img3 from '@/assets/images/products/headset.webp';
import img4 from '@/assets/images/products/watch2.webp';
import img5 from '@/assets/images/products/z-fold.webp';
import img6 from '@/assets/images/products/airbirds.webp';
import img7 from '@/assets/images/products/ipd2.webp';

// Array containing product information
const newArriveProducts = [
    {
        img: img0,
        name: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
        price: "$3456"
    },
    {
        img: img1,
        name: "Blackmagic Pocket Cinema Camera 6k",
        price: "$3899"
    },
    {
        img: img2,
        name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium Case",
        price: "$2998"
    },
    {
        img: img3,
        name: "AirPods Max Silver",
        price: "$1699"
    },
    {
        img: img4,
        name: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
        price: "$3456"
    },
    {
        img: img5,
        name: "Blackmagic Pocket Cinema Camera 6k",
        price: "$3899"
    },
    {
        img: img6,
        name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium Case",
        price: "$2998"
    },
    {
        img: img7,
        name: "AirPods Max Silver",
        price: "$1699"
    }
];
const Products = () => {
    const [current, setCurrent] = useState(1);
    return (
        <section className='py-[56px]'>
            <div className="container">
                {/* product heaer  */}
                <div className="">
                    <ul className='flex items-center gap-8'>
                        <li onClick={() => setCurrent(1)} className={`lg:text-lg font-medium leading-8  cursor-pointer border-b-2 text-[16px] ${current === 1 ? "border-black text-black" : "text-secondary border-transparent"}`}>New Arrival</li>
                        <li onClick={() => setCurrent(2)} className={`lg:text-lg font-medium leading-8 cursor-pointer border-b-2 text-[16px] ${current === 2 ? "border-black text-black" : "border-transparent text-secondary"}`}>Bestseller</li>
                        <li onClick={() => setCurrent(3)} className={`lg:text-lg font-medium leading-8 cursor-pointer border-b-2 text-[16px] ${current === 3 ? "border-black text-black" : "border-transparent text-secondary"}`}>Featured Products</li>
                    </ul>
                </div>
                {/* product body  */}
                <div className="mt-8">
                    {/* new Arrival  */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {current === 1 &&
                            newArriveProducts.map((item, i) => (
                                <ProductCard key={i} index={i} product={item} />
                            ))
                        }
                        {current === 2 &&
                            Array.from({ length: 8 }).map((_, i) => (
                                <EmptyCard key={i} name={"Bestseller product coming soon"} />
                            ))
                        }
                        {current === 3 &&
                            Array.from({ length: 8 }).map((_, i) => (
                                <EmptyCard key={i} name={"Featured product coming soon"} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products
