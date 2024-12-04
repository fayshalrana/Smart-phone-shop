"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import image1 from '@/assets/images/products/phone1.webp';
import image2 from '@/assets/images/products/phone2.webp';
import image3 from '@/assets/images/products/phone3.webp';
import image4 from '@/assets/images/products/phone4.webp';

const ProductImg = () => {
    const [image, setImage] = useState(image1);

    return (
        <div className='flex gap-12 items-center flex-col-reverse lg:flex-row'>
            <div className="flex flex-row lg:flex-col gap-6">
                <div onClick={() => setImage(image1)} className="lg:w-[74.88px] lg:h-[74.88px] cursor-pointer">
                    <Image src={image1} alt='product image' className={`w-full h-full ${image === image1 ? 'opacity-100' : "opacity-50"}`} />
                </div>
                <div onClick={() => setImage(image2)} className="lg:w-[74.88px] lg:h-[74.88px] cursor-pointer">
                    <Image src={image2} alt='product image' className={`w-full h-full ${image === image2 ? 'opacity-100' : "opacity-50"}`} />
                </div>
                <div onClick={() => setImage(image3)} className="lg:w-[74.88px] lg:h-[74.88px] cursor-pointer">
                    <Image src={image3} alt='product image' className={`w-full h-full ${image === image3 ? 'opacity-100' : "opacity-50"}`} />
                </div>
                <div onClick={() => setImage(image4)} className="lg:w-[74.88px] lg:h-[74.88px] cursor-pointer">
                    <Image src={image4} alt='product image' className={`w-full h-full ${image === image4 ? 'opacity-100' : "opacity-50"}`} />
                </div>
            </div>
            <div className="md:w-[413px] h-[300px] md:h-[516px]">
                <Image src={image} alt='product image' className='w-full h-full object-contain' />
            </div>
        </div>
    );
};

export default ProductImg;
