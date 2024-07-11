import PrimaryButton from '@/components/button/PrimaryButton'
import Image from 'next/image'
import React from 'react'
import bannerImg from '@/assets/images/banner.png'
const Banner = () => {
    return (
        <section className='bg-[#211c24] overflow-hidden'>
            <div className="container">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-[48px]">
                    <div className="flex flex-col items-center lg:items-start w-full lg:w-[70%] pt-[88px] lg:pt-[180px] pb-[204px] gap-6">
                        <h3 className='text-[25px] leading-[32px] font-bold text-secondary'>Pro.Beyond.</h3>
                        <h1 className='text-[72px] lg:text-[90px] xl:text-[96px] font-extralight leading-[72px] -tracking-[1px] text-white text-center lg:text-left'>IPhone 14 <span className='font-SFbold'>Pro</span></h1>
                        <p className=' text-[19px] text-center lg:text-left lg:text-lg leading-6 text-secondary'>Created to change everything for the better. For everyone</p>
                        <PrimaryButton path={"/shop/products"} name={"Shop Now"} normal />
                    </div>
                    <div className="w-full lg:w-[30%] h-[10rem] lg:h-[1rem] relative">
                        <div className="w-full h-full absolute -top-[200px] left-0">
                            <Image src={bannerImg} alt='banner image' className='w-full' />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Banner
