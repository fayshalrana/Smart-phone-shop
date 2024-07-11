"use client"
import React, { useState } from 'react'
import { MdOutlineArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { RxBorderDotted } from "react-icons/rx";
const Pagination = () => {
    const [select, setSelect] =useState(1)
    return (
        <nav>
            <ul className="flex flex-wrap items-center gap-2">
                <li className="flex h-8 w-8 items-center justify-center cursor-pointer">
                        <MdOutlineArrowBackIos />
                </li>
                <li onClick={()=>setSelect(1)} className={`flex items-center justify-center rounded h-8 w-8 font-medium cursor-pointer ${select === 1 ? 'bg-black text-white' : 'bg-secondaryBg text-black'}`}>1</li>
                <li onClick={()=>setSelect(2)} className={`flex items-center justify-center rounded h-8 w-8 font-medium cursor-pointer ${select === 2 ? 'bg-black text-white' : 'bg-secondaryBg text-black'}`}>2</li>
                <li onClick={()=>setSelect(3)} className={`flex items-center justify-center rounded h-8 w-8 font-medium cursor-pointer ${select === 3 ? 'bg-black text-white' : 'bg-secondaryBg text-black'}`}>3</li>
                <li onClick={()=>setSelect(4)} className={`flex items-center justify-center rounded h-8 w-8 font-medium cursor-pointer ${select === 4 ? 'bg-black text-white' : 'bg-secondaryBg text-black'}`}>4</li>
                <li onClick={()=>setSelect(5)} className={`flex items-center justify-center rounded h-8 w-8 font-medium cursor-pointer ${select === 5 ? 'bg-black text-white' : 'bg-secondaryBg text-black'}`}>5</li>
                <li className="flex items-end justify-center rounded h-8 w-8 font-medium">
                    <RxBorderDotted className='text-xl text-secondary'/>
                </li>
                <li onClick={()=>setSelect(6)} className={`flex items-center justify-center rounded h-8 w-8 font-medium cursor-pointer ${select === 6 ? 'bg-black text-white' : 'bg-secondaryBg text-black'}`}>10</li>
                <li className="flex h-8 w-8 items-center justify-center cursor-pointer">
                        <MdArrowForwardIos />
                </li>
            </ul>
        </nav>

    )
}

export default Pagination
