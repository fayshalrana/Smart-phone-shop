import React from 'react'
import logo from '@/assets/images/Logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Assistance, services } from '@/data/MainMenu'
import { FaFacebookF, FaTwitter, FaTiktok } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
const Footer = () => {
    return (
        <section className="py-12 lg:py-[144px] bg-black">
            <div className="container">
                <div className="flex items-start gap-[50px] flex-col lg:flex-row">
                    <div className="w-full lg:w-[40%] flex flex-col items-center md:items-start max-w-[400px]">
                        <div className="w-[65.2px] pb-6">
                            <Image src={logo} alt='logo' className='w-full h-full' />
                        </div>
                        <p className='text-[14px] font-medium text-white text-center md:text-left'>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
                    </div>
                    <div className="w-full lg:w-[55%] grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                        <div>
                            <h3 className='text-white pb-2 font-semibold text-center md:text-left'>Services</h3>
                            <ul className="flex flex-col gap-[10px] items-center md:items-start">
                                {
                                    services.map((service) => (
                                        <li key={service.id} className="text-[14px] font-normal text-white leading-[32px]"><Link href={`/${service.title.replace(/\s+/g, '-').toLowerCase()}`}>{service.title}</Link></li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-white pb-2 font-semibold text-center md:text-left'>Assistance to the buyer</h3>
                            <ul className="flex flex-col gap-[10px] items-center md:items-start">
                                {
                                    Assistance.map((item) => (
                                        <li key={item.id} className="text-[14px] font-normal text-white leading-[32px]"><Link href={`/${item.title.replace(/\s+/g, '-').toLowerCase()}`}>{item.title}</Link></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                        <ul className='flex items-center gap-[36.33px] justify-center md:justify-start'>
                            <li>
                                <Link href="#">
                                    <FaTwitter  className='text-white text-xl'/>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <FaFacebookF className='text-white text-xl'/>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <FaTiktok  className='text-white text-xl'/>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <RiInstagramFill  className='text-white text-xl'/>
                                </Link>
                            </li>
                        </ul>
                    </div>
            </div>
        </section>
    )
}

export default Footer
