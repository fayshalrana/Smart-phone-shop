import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryCard = ({ img, name }) => {
    return (
        <Link href={`/category/${name.replace(/\s+/g, '-').toLowerCase()}`} className='group'>
            <div className='py-6 px-[52px] rounded-[15px] bg-[#EDEDED] flex flex-col items-center gap-2 group-hover:shadow-lg duration-200'>
                <div className="w-12 h-12 flex items-center justify-center">
                    <Image src={img} alt='category image ' className='w-full h-full' />
                </div>
                <h3 className='text-[16px] leading-6 text-black whitespace-nowrap font-medium'>{name}</h3>
            </div>
        </Link>
    )
}

export default CategoryCard
