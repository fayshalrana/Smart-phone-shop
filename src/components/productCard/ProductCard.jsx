"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import img0 from '@/assets/images/products/Iphone14pro.svg';
import img1 from '@/assets/images/products/camera.svg';
import img2 from '@/assets/images/products/watch.svg';
import img3 from '@/assets/images/products/headset.svg';
import img4 from '@/assets/images/products/watch2.svg';
import img5 from '@/assets/images/products/z-fold.svg';
import img6 from '@/assets/images/products/airbirds.svg';
import img7 from '@/assets/images/products/ipd2.svg';
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import Link from 'next/link';
import PrimaryButton from '../button/PrimaryButton';

// Array containing product information
const products = [
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
    name: "Samsung Galaxy Watch6 Classic 47mm Black",
    price: "$2996"
  },
  {
    img: img5,
    name: "Galaxy Z Fold5 Unlocked | 256GB | Phantom Black",
    price: "$3697"
  },
  {
    img: img6,
    name: "Galaxy Buds FE Graphite",
    price: "$1799"
  },
  {
    img: img7,
    name: "Apple iPad 9 10.2 64GB Wi-Fi Silver (MK2L3) 2021",
    price: "$4995"
  }
];

const ProductCard = ({ index }) => {
    const [love, setLove] = useState(false);

    // Check if the index is within bounds
    const product = products[index] || products[0]; // Fallback to the first product if index is out of bounds or undefined

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
