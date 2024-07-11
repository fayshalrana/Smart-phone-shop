'use client'
import React, { useState } from 'react'
import { FaPen } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { BsPlusCircleFill } from "react-icons/bs";
const StepOne = () => {
    const [select, setSelect] = useState(1)
    return (
        <div>
            <h3 className='text-xl font-semibold leading-6 text-[#17183B]'>Select Address</h3>
            <div className="flex flex-col gap-6 mt-8">
                <div onClick={() => setSelect(1)} className="p-6 bg-secondaryBg rounded-[7px] flex justify-between cursor-pointer">
                    <div className="w-[80%] md:w-[50%] flex gap-2 md:gap-4">
                        <div className="w-[14%] md:w-6 h-6 inline-flex bg-transparent border-2 border-black rounded-full mr-2 items-center justify-center">
                            {
                                select === 1 &&
                                <div className="w-3 h-3 bg-black rounded-full"></div>
                            }
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <h3 className='text-lg font-normal leading-6 text-[#17183B]'>2118 Thornridge</h3>
                                <span className='uppercase py-1 px-2 bg-black text-white rounded text-[12px] font-medium'>Home</span>
                            </div>
                            <p className='text-[16px] font-normal leading-6 text-[#17183B]'>2118 Thornridge Cir. Syracuse, Connecticut 35624 <br />
                                Contact - (209) 555-0104
                            </p>
                        </div>
                    </div>
                    <div className="ml-auto flex items-center gap-2 md:gap-6">
                        <button className='w-6 h-6 flex justify-center items-center'><FaPen className='text-xl' /></button>
                        <button className='w-6 h-6 flex justify-center items-center'><MdOutlineClose className='text-2xl' /></button>
                    </div>
                </div>
                <div onClick={() => setSelect(2)} className="p-6 bg-secondaryBg rounded-[7px] flex justify-between cursor-pointer">
                    <div className="w-[80%] md:w-[50%] flex gap-4">
                        <div className="w-[14%] lg:w-6 h-6 bg-transparent border-2 border-black rounded-full mr-2 flex items-center justify-center">
                            {
                                select === 2 &&
                                <div className="w-[14%] md:w-3 h-3 bg-black rounded-full"></div>
                            }
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <h3 className='text-lg font-normal leading-6 text-[#17183B]'>2118 Thornridge</h3>
                                <span className='uppercase py-1 px-2 bg-black text-white rounded text-[12px] font-medium'>Home</span>
                            </div>
                            <p className='text-[16px] font-normal leading-6 text-[#17183B]'>2118 Thornridge Cir. Syracuse, Connecticut 35624 <br />
                                Contact - (209) 555-0104
                            </p>
                        </div>
                    </div>
                    <div className="ml-auto flex items-center gap-2 md:gap-6">
                        <button className='w-6 h-6 flex justify-center items-center'><FaPen className='text-xl' /></button>
                        <button className='w-6 h-6 flex justify-center items-center'><MdOutlineClose className='text-2xl' /></button>
                    </div>
                </div>
                <div className="w-full flex justify-center items-center flex-col gap-4 mt-12">
                    <div className="w-full relative border-t">
                        <button className="w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center"><BsPlusCircleFill className='text-xl text-black' /></button>
                    </div>
                    <h3 className='text-[14px] font-normal leading-4 text-black'>Add New Address</h3>
                </div>

            </div>
        </div>
    )
}

export default StepOne
