import Image from 'next/image'
import React, { useState } from 'react'
import CreditCard_Image from '@/assets/images/CreditCard_Image.svg'
import CheckBox from '../checkBox/CheckBox'
const Payment = ({setShowStep}) => {
    const [isOpen, setIsOpen] = useState(1)
    return (
        <div className='flex flex-col'>
            <h2 className='text-xl font-bold leading-4 text-black'>Payment</h2>
            <ul className='flex items-center gap-14 mt-6'>
                <li onClick={() => setIsOpen(1)} className={`py-2 text-[14px] font-medium leading-4 border-b cursor-pointer ${isOpen == 1 ? "border-black text-black" : "border-transparent text-secondary"}`}>Credit Card</li>
                <li onClick={() => setIsOpen(2)} className={`py-2 text-[14px] font-medium leading-4 border-b cursor-pointer ${isOpen == 2 ? "border-black text-black" : "border-transparent text-secondary"}`}>PayPal</li>
                <li onClick={() => setIsOpen(3)} className={`py-2 text-[14px] font-medium leading-4 border-b cursor-pointer ${isOpen == 3 ? "border-black text-black" : "border-transparent text-secondary"}`}>PayPal Credit</li>
            </ul>
            <div className="w-full md:w-[337px] h-[190px] mt-10">
                <Image src={CreditCard_Image} alt='credit card image' className='w-full h-full' />
            </div>
            <div className="mt-10">
                <form className='flex flex-col gap-4'>
                    <div className="">
                        <input type="text" placeholder='Cardholder Name' className='w-full p-4 border border-[#E8E8E8] rounded-md text-[14px] font-normal leading-4 placeholder:text-[#979797] text-black focus:outline-none' />
                    </div>
                    <div className="">
                        <input type="text" placeholder='Card Number' className='w-full p-4 border border-[#E8E8E8] rounded-md text-[14px] font-normal leading-4 placeholder:text-[#979797] text-black focus:outline-none' />
                    </div>
                    <div className="flex gap-4">
                        <input type="text" placeholder='Exp.Date' className='w-full p-4 border border-[#E8E8E8] rounded-md text-[14px] font-normal leading-4 placeholder:text-[#979797] text-black focus:outline-none' />

                        <input type="text" placeholder='CVV' className='w-full p-4 border border-[#E8E8E8] rounded-md text-[14px] font-normal leading-4 placeholder:text-[#979797] text-black focus:outline-none' />
                    </div>
                    <div className="mt-[49px]">
                        <CheckBox item={{ id: 1, name: "Same as billing address" }} />
                    </div>
                    <div className="mt-[49px] flex gap-6">
                        <button onClick={() => setShowStep(prevStep => (prevStep > 1 && prevStep <= 3) ? prevStep - 1 : prevStep)}
                            className="bg-transparent border-black text-black hover:border-transparent duration-200 hover:bg-black hover:text-white border lg:px-[86px] py-6 rounded-md text-[16px] font-medium leading-4 w-full">back</button>
                        <button className="bg-black border-transparent text-white hover:border-black duration-200 hover:bg-transparent hover:text-black border lg:px-[86px] py-6 rounded-md text-[16px] font-medium leading-4 w-full">pay</button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Payment
