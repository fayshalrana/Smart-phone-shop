import cn from '@/utils/cn'
import Link from 'next/link'
import React from 'react'

const PrimaryButton = ({ path, name, className, normal }) => {
    return (
        <Link href={path} className={cn("py-[16px] px-[56px] border rounded-md text-[16px] leading-6 duration-200",
            normal ? "bg-transparent text-white hover:bg-black border-white hover:border-transparent" : "bg-black text-white hover:bg-transparent hover:border-white",
            className)
            }>
            {name}
        </Link>
    )
}

export default PrimaryButton
