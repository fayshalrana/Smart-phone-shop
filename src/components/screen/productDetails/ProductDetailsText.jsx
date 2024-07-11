import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
const ProductDetailsText = () => {
    return (
        <section className='py-[80px] bg-[#FAFAFA]'>
            <div className="container">
                <div className="py-12 px-10 bg-white">
                    <div className="">
                        <h3 className='text-2xl font-medium leading-8 text-black pb-8'>Details</h3>
                        <p className='text-[13.5px] font-medium leading-6 text-secondary'>Just as a book is judged by its cover, the first thing you notice when you pick up a modern smartphone is the display. Nothing surprising, because advanced technologies allow you to practically level the display frames and cutouts for the front camera and speaker, leaving no room for bold design solutions. And how good that in such realities Apple everything is fine with displays. Both critics and mass consumers always praise the quality of the picture provided by the products of the Californian brand. And last year&quot;s 6.7-inch Retina panels, which had ProMotion, caused real admiration for many.</p>
                    </div>
                    <div className="mt-8">
                        <h3 className='text-2xl font-medium leading-8 text-black'>Screen</h3>
                        <ul className="flex flex-col mt-4 gap-6">
                            <li className='flex justify-between items-center border-b pb-2'>
                                <span className='text-[16px] font-normal leading-6 text-black'>Screen diagonal</span>
                                <span className='text-[15px] font-normal leading-6 text-black'>6.7&quot;</span>
                            </li>
                            <li className='flex justify-between items-center border-b pb-2'>
                                <span className='text-[16px] font-normal leading-6 text-black'>The screen resolution</span>
                                <span className='text-[15px] font-normal leading-6 text-black'>2796x1290</span>
                            </li>
                            <li className='flex justify-between items-center border-b pb-2'>
                                <span className='text-[16px] font-normal leading-6 text-black'>The screen refresh rate</span>
                                <span className='text-[15px] font-normal leading-6 text-black'>120 Hz</span>
                            </li>
                            <li className='flex justify-between items-center border-b pb-2'>
                                <span className='text-[16px] font-normal leading-6 text-black'>The pixel density</span>
                                <span className='text-[15px] font-normal leading-6 text-black'>460 ppi</span>
                            </li>
                            <li className='flex justify-between items-center border-b pb-2'>
                                <span className='text-[16px] font-normal leading-6 text-black'>Screen type</span>
                                <span className='text-[15px] font-normal leading-6 text-black'>OLED</span>
                            </li>
                            <li className='flex justify-between items-start border-b pb-2'>
                                <span className='text-[16px] font-normal leading-6 text-black'>Additionally</span>
                                <div className="flex flex-col items-end justify-start">
                                    <span className='text-[15px] font-normal leading-6 text-black'>Dynamic Island</span>
                                    <span className='text-[15px] font-normal leading-6 text-black'>Always-On display</span>
                                    <span className='text-[15px] font-normal leading-6 text-black'>HDR display</span>
                                    <span className='text-[15px] font-normal leading-6 text-black'>True Tone</span>
                                    <span className='text-[15px] font-normal leading-6 text-black'>Wide color (P3)</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-8">
                        <h3 className='text-2xl font-medium leading-8 text-black'>CPU</h3>
                        <ul className="flex flex-col mt-4 gap-6">
                            <li className='flex justify-between items-center border-b pb-2'>
                                <span className='text-[16px] font-normal leading-6 text-black'>CPU</span>
                                <span className='text-[15px] font-normal leading-6 text-black'>A16 Bionic</span>
                            </li>
                            <li className='flex justify-between items-center pb-2'>
                                <span className='text-[16px] font-normal leading-6 text-black'>Number of cores</span>
                                <span className='text-[15px] font-normal leading-6 text-black'>6</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center justify-center">
                        <button type='button' className='bg-transparent border border-black rounded-lg text-black flex items-center gap-2 py-3 px-14 hover:bg-black hover:text-white transition duration-300 ease-in-out hover:border-transparent text-[14px] font-medium leading-6 capitalize'>View more <IoIosArrowDown className='text-2xl'/></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetailsText
