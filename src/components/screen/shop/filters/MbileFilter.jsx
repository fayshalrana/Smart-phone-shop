import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import Brand from './Brand';
import { brandData } from '@/data/Brand';
const MbileFilter = ({setFilter}) => {
    return (
        <div className="w-full fixed top-[4rem] overflow-auto h-[96vh] left-0 bg-white md:hidden z-50 flex flex-col px-4 py-5">
            <div className="">
                <button type='button' onClick={()=>setFilter(false)} className='flex justify-between py-4 gap-4 items-center text-2xl font-medium leading-8'><IoIosArrowBack />Filter</button>
            </div>
            <div className="md:flex flex-col gap-6">
                <Brand data={brandData} name={"Brand"} isOpen />
                <Brand data={brandData} name={"Battery capacity"} />
                <Brand data={brandData} name={"Screen type"} />
                <Brand data={brandData} name={"Screen diagonal"} />
                <Brand data={brandData} name={"Protection class"} />
                <Brand data={brandData} name={"Built-in memory"} />
            </div>
            <div className="my-[2rem]">
                <button type='button' className='w-full bg-black rounded-md flex justify-center items-center text-[14px] font-medium text-white leading-6 border border-transparent hover:bg-transparent hover:text-black hover:border-black py-3'>Apply</button>
            </div>
        </div>
    )
}

export default MbileFilter
