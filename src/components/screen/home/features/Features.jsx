import Image from 'next/image'
import React from 'react'
import playStation from '@/assets/images/PlayStationHalf.webp'
import halfheadphone from '@/assets/images/halfheadphone.webp'
import visonProHalf from '@/assets/images/visonProHalf.webp'
import hero__gFull from '@/assets/images/hero__gFull.webp'
import PlayStationFull from '@/assets/images/PlayStationFull.webp'
import halfPc from '@/assets/images/halfPc.webp'
import imageFull from '@/assets/images/imageFull.webp'
import MacBookProFull from '@/assets/images/MacBookProFull.webp'
import PrimaryButton from '@/components/button/PrimaryButton'
const Features = () => {
    return (
        <section className='max-w-[1440px] mx-auto'>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="flex flex-col-reverse md:grid lg:grid-rows-2">
                    <div className="flex flex-col md:flex-row items-center lg:items-stretch pt-10 lg:pt-0 lg:gap-4 justify-center">
                        <div className="w-full md:w-[40%] relative flex flex-col items-center">
                            <div className="w-[200px] lg:w-full h-[200px] lg:h-full">
                                <Image src={playStation} alt='features image' className='w-full h-full object-cover hidden lg:inline' />
                                <Image src={PlayStationFull} alt='features image' className='w-full h-full lg:hidden' />
                            </div>
                        </div>
                        <div className="w-full md:w-[60%] pt-6 pb-10 lg:py-[112px] md:pr-[48px]">
                            <h2 className='text-3xl text-center md:text-left xl:text-[49px] text-black font-bold leading-[40px] pb-[16px]'>Playstation 5</h2>
                            <p className='text-[16px] lg:text-[14px] text-center md:text-left text-secondary leading-6'>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="bg-[#EDEDED] flex gap-4 xl:gap-7 items-center flex-col lg:flex-row pt-10 lg:pt-0">
                            <div className="w-full lg:w-[30%] relative flex flex-col items-center">
                                <div className="w-[200px] lg:w-full h-[200px] lg:h-full">
                                    <Image src={halfheadphone} alt='features image' className='w-full h-full hidden lg:inline' />
                                    <Image src={hero__gFull} alt='features image' className='w-full h-full lg:hidden' />
                                </div>
                            </div>
                            <div className="w-full lg:w-[70%] py-10 lg:py-[64.5px] pr-2 xl:pr-[48px]">
                                <h2 className='text-2xl xl:text-[29px] leading-7 xl:leading-[40px] text-black pb-2 xl:pb-4 text-center lg:text-left'>Apple <br />AirPods <span className='font-bold'>Max</span> </h2>
                                <p className='text-[16px] lg:text-[14px] text-secondary leading-6 text-center lg:text-left'>Computational audio. Listen, it&quot;s powerful</p>
                            </div>
                        </div>
                        <div className="bg-[#353535] flex lg:gap-[16px] items-center flex-col lg:flex-row px-4 lg:px-0 md:justify-center">
                            <div className="w-full lg:w-[40%] relative flex flex-col items-center">
                                <div className="w-[320px] lg:w-full lg:h-full">
                                    <Image src={visonProHalf} alt='features image' className='w-full h-full hidden lg:inline' />
                                    <Image src={imageFull} alt='features image' className='w-full h-full lg:hidden' />
                                </div>
                            </div>
                            <div className="w-full lg:w-[60%] pb-10 xl:py-[112px] pr-2 xl:pr-[48px]">
                                <h2 className='text-[34px] md:text-2xl text-center lg:text-left xl:text-[29px] leading-[40px] text-white pb-2 xl:pb-4'>Apple Vision <span className='font-bold'>Pro</span></h2>
                                <p className='text-[16px] lg:text-[14px] text-secondary leading-6 text-center lg:text-left'>Computational audio. Listen, it&quot;s powerful</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#EDEDED] flex items-center flex-col-reverse md:flex-row md:px-[16px] lg:px-0">
                    <div className="w-full md:w-[50%] lg:w-[60%] pl-4 xl:pl-[56px] gap-4 md:gap-0 xl:gap-4 flex flex-col items-center lg:items-start lg:justify-start pb-10 lg:py-0 justify-center md:py-10">
                        <h2 className='text-[34px] xl:text-[60px] leading-10 lg:leading-[56px] font-bold lg:font-extralight text-black text-center lg:text-left'>Macbook <span className='font-extralight lg:font-bold'>Air</span></h2>
                        <p className='text-[16px] lg:text-[14px] text-secondary leading-6 text-center lg:text-left'>The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
                        <div className="mt-[16px] w-full md:w-auto flex md:justify-start px-[16px] md:px-0">
                            <PrimaryButton path={"/shop"} name={"Shop Now"} normal className={"text-black border-black hover:text-white hover:border-transparent w-full text-center"} />
                        </div>
                    </div>
                    <div className="w-full md:w-[50%] lg:w-[40%] relative flex flex-col items-center">
                        <div className="w-[320px] lg:w-full lg:h-full">
                            <Image src={halfPc} alt='features image' className='w-full h-full hidden lg:inline' />
                            <Image src={MacBookProFull} alt='features image' className='w-full h-full lg:hidden' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
