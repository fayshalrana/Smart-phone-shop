"use client"
import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import CheckBox from '@/components/checkBox/CheckBox';
const Brand = ({data,name, isOpen}) => {
    const [open, setOpen] = useState(isOpen)
    return (
        <div className='flex flex-col'>
            <div onClick={() => setOpen(!open)} className="flex items-center justify-between py-3 border-b cursor-pointer">
                <h1 className='text-lg font-medium'>{name}</h1>
                <IoIosArrowDown className={`text-black text-2xl duration-200 ${open? "rotate-180":""}`}/>
            </div>
            {
                open && (
                    <>
                        <div className="w-full pl-4 bg-secondaryBg rounded-lg mt-4 flex items-center gap-2">
                            <FiSearch className='text-secondary text-2xl' />
                            <input type="text" placeholder='Search' className='w-full bg-transparent py-[11px] text-[14px] font-medium placeholder:text-[#656565] focus:outline-none text-black' />
                        </div>
                        <div className="mt-4 flex flex-col gap-2">
                            {
                                data.map((item) => (
                                    <div key={item.id} className="py-[4.4px]">
                                        <CheckBox key={item.id} item={item} />
                                    </div>
                                ))
                            }
                        </div>
                        </>
                )
            }
        </div>
    )
}

export default Brand
