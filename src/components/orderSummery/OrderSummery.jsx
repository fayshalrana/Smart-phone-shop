import React from 'react'
import PrimaryButton from '../button/PrimaryButton'

const OrderSummery = () => {
    return (
        <div className='py-14 px-4 lg:px-16 border rounded-[10px] flex flex-col'>
            <h2 className='text-xl font-bold leading-4 text-black'>Order Summary</h2>
            <div className="flex flex-col gap-6 mt-10">
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className='text-[14px] font-medium leading-4 tex-black'>Discount code / Promo code</label>
                    <div className="border rounded-[7px] overflow-hidden">
                        <input type="text" placeholder='Code' className='w-full p-4 focus:outline-none' />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className='text-[14px] font-medium leading-4 tex-black'>Discount code / Promo code</label>
                    <div className="border rounded-[7px] flex p-4 justify-between">
                        <input type="text" placeholder='Enter Card Number' className='w-[70%] focus:outline-none' />
                        <button className='w-[25%] bg-transparent border border-black text-black hover:border-transparent hover:text-white hover:bg-black text-[12px] font-medium p-2 rounded-[7px] duration-200'>Apply</button>
                    </div>
                </div>
                <ul className='flex flex-col gap-2'>
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
                <div className="mt-12 w-full">
                    <PrimaryButton name={"Checkout"} path={"/cart/checkout"} className={"w-full hover:text-black hover:bg-transparent hover:border-black flex justify-center"}/>
                </div>
            </div>
        </div>
    )
}

export default OrderSummery
