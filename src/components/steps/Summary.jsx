import Image from 'next/image'
import React from 'react'
import img from '@/assets/images/products/Iphone14pro.webp'
const Summary = () => {
    return (
        <div className='w-full border rounded-[10px] px-6 py-8'>
            <h2 className='text-xl font-medium leading-4 text-black'>Summary</h2>
            <div className='mt-6 flex flex-col gap-4'>
                {
                    Array.from({ length: 3 }, (_, i) => (
                        <div key={i} className="p-4 rounded-[13px] bg-secondaryBg flex items-center justify-start gap-4">
                            <div className="w-10 h-10 flex items-center justify-center">
                                <Image src={img} alt='product image' className='w-full h-full object-contain' />
                            </div>
                            <h3 className='text-[16px] font-medium leading-6 text-black'>Apple iPhone 14 Pro Max 128Gb </h3>
                            <h3 className='text-[16px] font-bold leading-6 text-black ml-auto'>$1399</h3>
                        </div>
                    ))
                }
            </div>
            <div className="mt-6 flex flex-col gap-7">
                <div className="flex flex-col gap-5">
                    <h4 className='text-[14px] font-medium leading-4 text-[#545454]'>Address</h4>
                    <p className='text-[16px] font-normal leading-4 text-black'>1131 Dusty Townline, Jacksonville, TX 40322</p>
                </div>
                <div className="flex flex-col gap-5">
                    <h4 className='text-[14px] font-medium leading-4 text-[#545454]'>Shipment method</h4>
                    <p className='text-[16px] font-normal leading-4 text-black'>Free</p>
                </div>
            </div>
            <ul className='flex flex-col gap-2 mt-6'>
                <li className='w-full flex items-center justify-between'>
                    <span className='text-[16px] font-medium leading-8 text-black'>Subtotal</span>
                    <span className='text-[16px] font-medium leading-8 text-black'>$2347</span>
                </li>
                <li className='w-full flex items-center justify-between'>
                    <span className='text-[16px] font-normal leading-8 text-[#545454]'>Estimated Tax</span>
                    <span className='text-[16px] font-medium leading-8 text-black'>$50</span>
                </li>
                <li className='w-full flex items-center justify-between'>
                    <span className='text-[16px] font-normal leading-8 text-[#545454]'>Estimated shipping & Handling</span>
                    <span className='text-[16px] font-medium leading-8 text-black'>$29</span>
                </li>
                <li className='w-full flex items-center justify-between'>
                    <span className='text-[16px] font-medium leading-8 text-black'>Total</span>
                    <span className='text-[16px] font-medium leading-8 text-black'>$2426</span>
                </li>
            </ul>
        </div>
    )
}

export default Summary
