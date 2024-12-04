import React from 'react'
import Image from 'next/image'
import PrimaryButton from '../button/PrimaryButton'
const ProductsliderCard = ({ item, index }) => {
    return (
        <div key={index} className={`pb-[56px] px-8 ${item.bgColor}`}>
            <div className="w-full h-[327px]">
                <Image width='100' height='100' src={item.img} alt='product image' className='w-full h-full object-contain' />
            </div>
            <div className="flex flex-col items-start gap-4">
                <h2 className={`text-2xl lg:text-3xl font-light text-black leading-12 ${item.index == 3 && "text-white"}`}>{item.title}</h2>
                <p className="text-[14px] leading-6 text-secondary font-medium">{item.description}</p>
                <div className="mt-4">
                    <PrimaryButton name={"Shop Now"} normal path={item.buttonLink} className={item.buttonClass} />
                </div>
            </div>
        </div>
    )
}

export default ProductsliderCard
