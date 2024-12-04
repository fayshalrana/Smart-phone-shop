import PrimaryButton from '@/components/button/PrimaryButton'
import Image from 'next/image'
import React from 'react'
import img1 from '@/assets/images/left.webp'
import img2 from '@/assets/images/right.webp'

import pc from '@/assets/images/calltoaction/pc.webp'
import laptop from '@/assets/images/calltoaction/laptop.webp'
import phone from '@/assets/images/calltoaction/phone.webp'
import tab from '@/assets/images/calltoaction/tab.webp'
import watch from '@/assets/images/calltoaction/watch.webp'

const CallToAction = () => {
    return (
        <section className='pt-[100px] md:pt-[189px] pb-[89px] bg-gradient-to-r from-[#2e2e2e] to-[#040404] relative overflow-hidden'>
            <Image src={img1} alt='action background' className='absolute top-1/2 -translate-y-1/2 left-0 w-[24rem] xl:w-[43rem] z-0 hidden lg:inline' />
            <Image src={img2} alt='action background' className='absolute  top-1/2 -translate-y-1/2 -right-[1rem] w-[26rem] xl:w-[30rem] z-0 hidden lg:inline' />

            {/* mobile version image  */}
            <Image src={pc} alt='action background' className='absolute top-0 left-0 w-[2rem] md:w-[6rem] z-0 lg:hidden' />
            <Image src={laptop} alt='action background' className='absolute top-0 -translate-x-1/2 left-1/2 w-[10rem] md:w-[20rem] z-0 lg:hidden' />
            <Image src={phone} alt='action background' className='absolute top-0 -right-[1rem] w-[10rem] md:w-[20rem] z-0 lg:hidden' />
            <Image src={tab} alt='action background' className='absolute bottom-0 left-0 w-[4rem] md:w-[7rem] z-0 lg:hidden' />
            <Image src={watch} alt='action background' className='absolute bottom-0 -right-[1px] w-[4rem] md:w-[7rem] z-0 lg:hidden' />
            <div className="container">
                <div className="flex flex-col items-center justify-center z-50">
                    <h2 className='text-center text-[48px] lg:text-[72px] font-extralight text-white -tracking-[1%]'>Big Summer <span className='font-bold'>Sale</span></h2>
                    <p className='text-center text-[16px] font-normal text-secondary leading-8'>Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
                    <div className="flex items-center mt-10">
                        <PrimaryButton name={"Shop Now"} normal path={"#"} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CallToAction
