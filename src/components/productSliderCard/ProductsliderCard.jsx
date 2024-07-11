import React from 'react'
import img from '@/assets/images/products/iPad.svg'
import Image from 'next/image'
import PrimaryButton from '../button/PrimaryButton'
const ProductsliderCard = ({index}) => {
    return (
        <div className={`pb-[56px] px-8 ${index == 0 && "bg-white"} ${index == 1 && "bg-[#F9F9F9]"} ${index == 2 && "bg-[#EAEAEA]"} ${index == 3 && "bg-[#2C2C2C]"}`}>
            <div className="w-full h-full">
                <Image src={img} alt='product image' className='w-full h-full object-contain' />
            </div>
            <div className="flex flex-col items-start gap-4">
                <h2 className={`text-2xl lg:text-3xl font-light text-black leading-12 ${index == 3 && "text-white"}`}>Popular Products</h2>
                <p className={`text-[14px] leading-6 text-secondary font-medium`}>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                <div className="mt-4">
                    <PrimaryButton name={"Shop Now"} normal path={"#"} className={`${index !==3 ? "border-black text-black hover:text-white": ""}`}/>
                </div>
            </div>
        </div>
    )
}

export default ProductsliderCard
