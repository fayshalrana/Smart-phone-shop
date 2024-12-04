"use client"
import ProductCard from '@/components/productCard/ProductCard'
import React, { useEffect, useState } from 'react'
import Brand from './filters/Brand'
import { brandData } from '@/data/Brand';
import DropDown from '@/components/dropDown/DropDown';
import Pagination from '@/components/pagination/Pagination';
import settingImg from '@/assets/images/setting.webp'
import Image from 'next/image';
import MbileFilter from './filters/MbileFilter';
import img0 from '@/assets/images/products/Iphone14pro.webp';
import img1 from '@/assets/images/products/camera.webp';
import img2 from '@/assets/images/products/watch.webp';
import img3 from '@/assets/images/products/headset.webp';
import img4 from '@/assets/images/products/watch2.webp';
import img5 from '@/assets/images/products/z-fold.webp';
import img6 from '@/assets/images/products/airbirds.webp';
import img7 from '@/assets/images/products/ipd2.webp';
const phones = [
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
    const [filter, setFilter] = useState(false)


    // prevent scroll when mobile menu is active 
    useEffect(() => {
        if (filter) {
            document.body.style.overflow = "hidden"; // Prevent scrolling
        } else {
            document.body.style.overflow = ""; // Enable scrolling
        }
    }, [filter]);
    return (
        <section className='pt-6 pb-[56px]'>
            <div className="container">
                <div className="grid grid-cols-4 gap-8">
                    <div className="md:flex flex-col gap-6 hidden">
                        <Brand data={brandData} name={"Brand"} isOpen />
                        <Brand data={brandData} name={"Battery capacity"} />
                        <Brand data={brandData} name={"Screen type"} />
                        <Brand data={brandData} name={"Screen diagonal"} />
                        <Brand data={brandData} name={"Protection class"} />
                        <Brand data={brandData} name={"Built-in memory"} />
                    </div>
                    <div className="col-span-4 md:col-span-3">
                        {/* sorting  */}
                        <div className="flex md:items-center justify-between flex-col-reverse md:flex-row items-start gap-6 relative">
                            <div className="">
                                <h3 className='text-[16px] font-medium leading-4 text-secondary'>Selected Products: <span className='text-xl text-black pl-2'>85</span></h3>
                            </div>
                            <div className="grid grid-cols-2 gap-4 w-full md:w-auto md:inline-block">
                                <button type='button' onClick={() => setFilter(true)} className='flex justify-between border rounded-lg md:hidden py-4 px-5 items-center text-[16px] font-medium leading-4'>Filter
                                    <Image src={settingImg} alt='setting img' className='w-6 h-6' />
                                </button>
                                <DropDown />
                            </div>
                            {filter && <MbileFilter setFilter={setFilter} />}
                        </div>
                        {/* products  */}
                        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                            {
                                phones.map((item, index) => (
                                    <ProductCard key={index} product={item} />
                                ))
                            }
                        </div>
                        <div className="flex justify-center mt-6">
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products
