import Image from 'next/image'
import React from 'react'
import logoBlack from '@/assets/images/LogoBlack.webp'
import Link from 'next/link'
const MobileMenu = ({ mobileMenu, setMobileMenu }) => {
    return (
        <div className={`lg:hidden fixed duration-300 top-0 rounded-e-xl p-4 w-[70%] min-[422px]:w-[50%] min-[500px]:w-[40%] shadow-lg h-screen bg-white z-[999] ${mobileMenu ? "left-0" : "-left-[100%]"}`}>
            <div className="flex justify-between">
                <div className="w-[4rem]">
                    <Image src={logoBlack} className="w-full" alt="logo" />
                </div>

            </div>
            <div className="mt-10">
                <ul className="w-full flex flex-col items-start gap-2">
                    <Link href="/" onClick={() => setMobileMenu(false)} className="text-secondary">Home</Link>
                    <Link href="/" onClick={() => setMobileMenu(false)} className="text-secondary">About</Link>
                    <Link href="/" onClick={() => setMobileMenu(false)} className="text-secondary">Contact Us</Link>
                    <Link href="/" onClick={() => setMobileMenu(false)} className="text-secondary">Blog</Link>
                </ul>
            </div>
        </div >
    )
}

export default MobileMenu
