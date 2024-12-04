"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import Link from 'next/link';
import PrimaryButton from '../button/PrimaryButton';

const ProductCard = ({product, index }) => {
    const [love, setLove] = useState(false);

    // Check if the index is within bounds
    // const product = products[index] || products[0]; // Fallback to the first product if index is out of bounds or undefined

    return (
        <div className='py-6 px-3 md:px-4 bg-secondaryBg rounded-[9px] flex flex-col'>
            <div className="flex justify-end mb-4">
                <button onClick={() => setLove(!love)}>
                    {love ?
                        <IoMdHeart className='text-3xl text-[#ff0000]' /> :
                        <IoMdHeartEmpty className='text-3xl text-secondary' />
                    }
                </button>
            </div>
            <Link href="/shop/products/1">
                <div className="w-[104px] lg:w-[160px] h-[104px] lg:h-[160px] mx-auto">
                    <Image src={product.img} alt={product.name} className='w-full h-full object-contain' />
                </div>
            </Link>
            <div className="flex flex-col justify-center items-center pt-4 mt-auto">
                <Link href="/shop/products/1">
                    <h3 className='text-[14px] leading-6 text-black font-medium text-center pb-4'>{product.name}</h3>
                </Link>
                <h2 className='text-2xl font-semibold text-black leading-6'>{product.price}</h2>
                <div className="flex justify-center mt-6 w-full md:w-auto">
                    <PrimaryButton name={"Buy Now"} path={"#"} className={"hover:border-black hover:text-black py-[12px] whitespace-nowrap w-full text-center px-0 md:px-[54px]"} />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
