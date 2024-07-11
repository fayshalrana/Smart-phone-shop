"use client"
import React, { useState } from 'react'
import { FaMobileScreenButton } from "react-icons/fa6";
import { BsCpuFill } from "react-icons/bs";
import { PiCpuLight } from "react-icons/pi";
import { HiCamera } from "react-icons/hi2";
import { IoMdReverseCamera } from "react-icons/io";
import { PiBatteryVerticalHighBold } from "react-icons/pi";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsShop } from "react-icons/bs";
import { PiSealCheckLight } from "react-icons/pi";
const ProductInfo = () => {
    const [ram, setRem] = useState(1)
    const longText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae dicta ipsam quia, quod fugiat quos? Inventore quibusdam eligendi fugiat veniam, eaque dignissimos neque officiis consectetur rerum temporibus sequi ipsa est sit fuga! Illum, fuga? Molestias repudiandae consequatur ipsam illum libero quas soluta, doloribus tempore a pariatur suscipit ipsa. Neque sapiente numquam enim placeat, velit animi dolores aspernatur debitis error atque ab iste aperiam esse dignissimos nulla inventore adipisci fugit accusantium earum. Corrupti voluptatum libero, obcaecati est perferendis error fugit magnam suscipit repudiandae officiis voluptas saepe quas hic dicta dolore expedita, quibusdam sit quis qui tempora et! Cumque officiis magni expedita.";

    const [expanded, setExpanded] = useState(false);
    return (
        <div className='w-full flex flex-col'>
            <h1 className='text-[40px] font-bold text-black leading-10 pb-6'>Apple iPhone 14 Pro Max</h1>
            <h3 className='text-[32px] font-medium text-black leading-[48px tracking-[3%] pb-4'>$1399 <span className='text-2xl font-normal text-secondary line-through pl-4'>$1499</span></h3>

            <div className="flex items-center gap-6">
                <h5 className='text-[15px] font-normal leading-6 text-black'>Select color:</h5>
                <div className="flex items-center gap-2">
                    <button type='button' className="w-8 h-8 rounded-full bg-[#000000]"></button>
                    <button type='button' className="w-8 h-8 rounded-full bg-[#781DBC]"></button>
                    <button type='button' className="w-8 h-8 rounded-full bg-[#E10000]"></button>
                    <button type='button' className="w-8 h-8 rounded-full bg-[#E1B000]"></button>
                    <button type='button' className="w-8 h-8 rounded-full bg-[#E8E8E8]"></button>
                </div>
            </div>

            <div className="grid grid-cols-4 mt-6 gap-2 md:gap-4">
                <button type='button' onClick={() => setRem(1)} className={`py-2 md:py-4 md:px-6 rounded-lg bg-transparent border text-[14px] font-medium ${ram === 1 ? 'border-black text-black' : 'border-secondary text-secondary'}`}>128GB</button>

                <button type='button' onClick={() => setRem(2)} className={`py-2 md:py-4 md:px-6 rounded-lg bg-transparent border border-secondary text-[14px] font-medium ${ram === 2 ? 'border-black text-black' : 'border-secondary text-secondary'}`}>256GB</button>

                <button type='button' onClick={() => setRem(3)} className={`py-2 md:py-4 md:px-6 rounded-lg bg-transparent border text-[14px] font-medium ${ram === 3 ? 'border-black text-black' : 'border-secondary text-secondary'}`}>512GB</button>

                <button type='button' onClick={() => setRem(4)} className={`py-2 md:py-4 md:px-6 rounded-lg bg-transparent border text-[14px] font-medium  ${ram === 4 ? 'border-black text-black' : 'border-secondary text-secondary'}`}>1TB</button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                <div className="flex items-center gap-2 py-2 md:py-5 px-2 md:px-4 rounded-lg bg-secondaryBg">
                    <div className="w-6 h-6 flex items-center justify-center">
                        <FaMobileScreenButton className='text-2xl text-[#4E4E4E]' />
                    </div>
                    <div className="flex flex-col">
                        <h5 className='text-[14px] font-semibold leading-6 text-[#C4C4C4]'>Screen size <br />
                         <span className='text-[#4E4E4E]'>6.7&quot;</span></h5>
                    </div>
                </div>
                <div className="flex items-center gap-2 py-2 md:py-5 px-2 md:px-4 rounded-lg bg-secondaryBg">
                    <div className="w-6 h-6 flex items-center justify-center">
                        <BsCpuFill className='text-2xl text-[#4E4E4E]' />
                    </div>
                    <div className="flex flex-col">
                        <h5 className='text-[14px] font-semibold leading-6 text-[#C4C4C4]'>CPU <br /> <span className='text-[#4E4E4E] text-[12px]'>Apple A16 Bionic</span></h5>
                    </div>
                </div>
                <div className="flex items-center gap-2 py-2 md:py-5 px-2 md:px-4 rounded-lg bg-secondaryBg">
                    <div className="w-6 h-6 flex items-center justify-center">
                        <PiCpuLight className='text-2xl text-[#4E4E4E]' />
                    </div>
                    <div className="flex flex-col">
                        <h5 className='text-[12px] font-semibold leading-6 text-[#C4C4C4]'>Number of Cores <br /> <span className='text-[#4E4E4E] text-[14px]'>6</span></h5>
                    </div>
                </div>
                <div className="flex items-center gap-2 py-2 md:py-5 px-2 md:px-4 rounded-lg bg-secondaryBg">
                    <div className="w-6 h-6 flex items-center justify-center">
                        <HiCamera className='text-2xl text-[#4E4E4E]' />
                    </div>
                    <div className="flex flex-col">
                        <h5 className='text-[14px] font-semibold leading-6 text-[#C4C4C4]'>Main Camera <br /> <span className='text-[#4E4E4E]'>48-12-12 MP</span></h5>
                    </div>
                </div>
                <div className="flex items-center gap-2 py-2 md:py-5 px-2 md:px-4 rounded-lg bg-secondaryBg">
                    <div className="w-6 h-6 flex items-center justify-center">
                        <IoMdReverseCamera className='text-2xl text-[#4E4E4E]' />
                    </div>
                    <div className="flex flex-col">
                        <h5 className='text-[14px] font-semibold leading-6 text-[#C4C4C4]'>Front-camera <br /> <span className='text-[#4E4E4E]'>12 MP</span></h5>
                    </div>
                </div>
                <div className="flex items-center gap-2 py-2 md:py-5 px-2 md:px-4 rounded-lg bg-secondaryBg">
                    <div className="w-6 h-6 flex items-center justify-center">
                        <PiBatteryVerticalHighBold className='text-2xl text-[#4E4E4E]' />
                    </div>
                    <div className="flex flex-col gap-0">
                        <h5 className='text-[12px] font-semibold leading-6 text-[#C4C4C4]'>Battery capacity <br /> <span className='text-[#4E4E4E] text-[14px]'>4323 mAh</span></h5>
                    </div>
                </div>
            </div>

            <div className="mt-6">
                <p className='text-[14px] font-normal leading-6 tracking-[3%] text-secondary'>
                    {expanded ? longText : longText.slice(0, 200)}
                    {!expanded && longText.length > 200 && (
                        <span onClick={() => setExpanded(!expanded)} className="text-blue-500 cursor-pointer">
                            {' '} <span className='text-[#2C2C2C] underline'>more...</span>
                        </span>
                    )}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <button type='button' className="py-4 px-6 rounded-lg border border-black bg-transparent text-black text-[16px] font-medium hover:text-white hover:bg-black transition-all duration-300 ease-in-out">Buy now</button>
                <button type='button' className="py-4 px-6 rounded-lg bg-black text-white text-[16px] font-medium hover:text-black hover:bg-transparent transition-all duration-300 ease-in-out hover:border-black border border-transparent">Add to cart</button>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-6">
                <div className="flex items-center gap-2 flex-col md:flex-row">
                    <div className="w-[56px] h-[56px] flex items-center justify-center rounded-lg bg-[#F2F2F2]">
                        <CiDeliveryTruck className='text-secondary text-2xl' />
                    </div>
                    <div className="flex flex-col items-center">
                        <h5 className='text-[14px] font-semibold leading-6 text-secondary'>Free delivery</h5>
                        <p className='text-[12px] font-bold leading-6 text-black'>1-2 day</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 flex-col md:flex-row">
                    <div className="w-[56px] h-[56px] flex items-center justify-center rounded-lg bg-[#F2F2F2]">
                        <BsShop  className='text-secondary text-2xl' />
                    </div>
                    <div className="flex flex-col items-center">
                        <h5 className='text-[14px] font-semibold leading-6 text-secondary'>In Stock</h5>
                        <p className='text-[12px] font-bold leading-6 text-black'>Today</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 flex-col md:flex-row">
                    <div className="w-[56px] h-[56px] flex items-center justify-center rounded-lg bg-[#F2F2F2]">
                        <PiSealCheckLight   className='text-secondary text-2xl' />
                    </div>
                    <div className="flex flex-col items-center">
                        <h5 className='text-[14px] font-semibold leading-6 text-secondary'>Guaranteed</h5>
                        <p className='text-[12px] font-bold leading-6 text-black'>1 year</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo
