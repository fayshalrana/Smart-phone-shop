import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const BreadCrumb = () => {
  return (
    <section className='py-10 hidden md:block'>
    <div className="container">
        <ul className='flex items-center gap-4'>
            <li className='text-[16px] font-medium text-secondary leading-4'><Link href="#">Home</Link></li>
            <li><IoIosArrowForward className='text-[16px] font-medium text-secondary'/></li>
            <li className='text-[16px] font-medium text-secondary leading-4'><Link href="#">Catalog</Link></li>
            <li><IoIosArrowForward className='text-[16px] font-medium text-secondary'/></li>
            <li className='text-[16px] font-medium text-secondary leading-4'><Link href="#">Smartphones</Link></li>
            <li><IoIosArrowForward className='text-[16px] font-medium text-secondary'/></li>
            <li className='text-[16px] font-medium text-secondary leading-4'><Link href="#">Apple</Link></li>
            <li><IoIosArrowForward className='text-[16px] font-medium text-secondary'/></li>
            <li className='text-[16px] font-medium text-black leading-4'><Link href="#">iPhone 14 Pro Max</Link></li>
        </ul>
    </div>
</section>
  )
}

export default BreadCrumb
