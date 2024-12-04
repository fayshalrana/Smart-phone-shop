"use client"
import React, { useState } from 'react'
import { HiMinus, HiPlus } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import Iphone14pro from '@/assets/images/products/Iphone14pro.webp'
import Image from 'next/image';
const CartItem = () => {
    const [count, setCount] = useState(1);
    const [price, setPrice] = useState(5657);

    const handleIncrease = () => {
        const newCount = count + 1;
        setCount(newCount);
        setPrice(price * newCount);
    };

    const handleDecrease = () => {
        if (count > 1) {
            const newCount = count - 1;
            setCount(newCount);
            setPrice(price / count);
        }
    };
    return (
        <div className="py-10 flex items-center justify-start border-b gap-[15px]">
            <div className="flex items-center justify-center w-[90px] h-[90px]">
                <Image src={Iphone14pro} alt="product image" className='w-full h-full' />
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-2">
                <div className="flex flex-col justify-start w-full lg:w-[40%] gap-2">
                    <h3 className='text-[16px] font-medium text-black'>Apple iPhone 14 Pro Max 128Gb Deep...</h3>
                    <p className='text-[14px] font-normal leading-6 text-black'>#25139526913984</p>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <button onClick={handleDecrease} className='h-6 w-6 flex justify-center items-center'><HiMinus className='text-xl' /></button>
                        <span className='w-[40px] h-[32px] rounded-[4px] border flex items-center justify-center text-[16px] font-medium leading-4 text-black'>{count}</span>
                        <button onClick={handleIncrease} className='h-6 w-6 flex justify-center items-center'><HiPlus className='text-xl' /></button>
                    </div>
                    <h3 className='text-xl font-medium leading-8 tracking-[3%] text-black'>${price}</h3>
                    <button><MdClose className='text-xl' /></button>
                </div>
            </div>
        </div>
    )
}

export default CartItem
