"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import { HiOutlineMenu } from "react-icons/hi";
import { menus } from '@/data/MainMenu';
import logoBlack from '@/assets/images/LogoBlack.svg'
import { AiOutlineClose } from "react-icons/ai";
import Image from 'next/image';
import MobileMenu from '@/components/mobileMenu/MobileMenu';
import { usePathname } from 'next/navigation';
const Header = () => {
    const pathname = usePathname()
    const [mobileMenu, setMobileMenu] = useState(false);
    // prevent scroll when mobile menu is active 
    useEffect(() => {
        if (mobileMenu) {
            document.body.style.overflow = "hidden"; // Prevent scrolling
        } else {
            document.body.style.overflow = ""; // Enable scrolling
        }
    }, [mobileMenu]);
    return (
        <section className='py-[15px] border-b'>
            <div className="container">
                <div className="flex items-center justify-between gap-[62.53px]">
                    {/* logo  */}
                    <Link href="/" className='font-SFbold'>
                        <div className="w-[65.4px]">
                            <Image src={logoBlack} alt='logo' className='w-full' />
                        </div>
                    </Link>

                    {/* SEARCH BOX  */}
                    <div className="lg:flex items-center gap-2 bg-[#F5F5F5] rounded-lg px-[16px] w-full hidden">
                        <FiSearch className='text-2xl text-[#989898]' />
                        <input type="text" placeholder='Search' className='py-[19px] text-[15px] text-[#989898] outline-none bg-transparent w-full' />
                    </div>

                    {/* MENU  */}
                    <div className="hidden lg:inline">
                        <ul className='flex items-center gap-[52px]'>
                            {
                                menus.map((menu) => (
                                    <li key={menu.id}>
                                        <Link href={menu.url} className={`whitespace-nowrap text-[16px] leading-[19.09px] ${pathname === menu.url ? 'text-black' : 'text-secondary'}`}>{menu.title}</Link>
                                    </li>
                                ))}
                        </ul>
                    </div>

                    {/* USER AND CART  */}
                    <div className="lg:flex items-center gap-4 hidden">
                        <Link href="#">
                            <FaRegHeart className='text-3xl' />
                        </Link>
                        <Link href="/cart">
                            <IoCartOutline egHeart className='text-3xl' />
                        </Link>
                        <Link href="#">
                            <LuUser className='text-3xl' />
                        </Link>
                    </div>
                    {!mobileMenu ? <button onClick={() => setMobileMenu(true)} className='border-none outline-none lg:hidden'><HiOutlineMenu className='text-2xl' /></button> :
                        <button onClick={() => setMobileMenu(false)} className='border-none outline-none lg:hidden'><AiOutlineClose className='text-2xl' /></button>}
                </div>
                {/* mobile menu  */}
                <MobileMenu setMobileMenu={setMobileMenu} mobileMenu={mobileMenu}/>
            </div>
        </section>
    )
}

export default Header
