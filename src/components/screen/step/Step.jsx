"use client"
import React, { useEffect, useState } from 'react'
import { MdLocationOn } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi";
import { RiSecurePaymentLine } from "react-icons/ri";
import StepOne from '@/components/steps/StepOne';
import StepTwo from '@/components/steps/StepTwo';
import StepThree from '@/components/steps/StepThree';
const Step = () => {
    const [showStep, setShowStep] = useState(1);

    // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // useEffect(() => {
    //     const handleResize = () => {
    //         setWindowWidth(window.innerWidth);
    //     };

    //     handleResize(); 

    //     window.addEventListener('resize', handleResize);

    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, []);
    return (
        <section>
            <div className="container">
                <div className="py-10 md:py-[72px]">
                    <ul className='flex items-center justify-between w-full'>
                        <li onClick={() => setShowStep(1)} className={`flex items-center gap-2 cursor-pointer ${showStep === 1 ? "opacity-100" : "opacity-40"}`}>
                            <div className="">
                                <div className="w-6 h-6 rounded-full flex justify-center items-center bg-black">
                                    <MdLocationOn className='text-xl text-white' />
                                </div>
                            </div>
                            <div className="">
                                <h4>Step 1</h4>
                                <h2>Address</h2>
                            </div>
                        </li>
                        <li onClick={() => setShowStep(2)} className={`flex items-center gap-2 cursor-pointer ${showStep == 2 ? "opacity-100" : "opacity-40"}`}>
                            <div className="">
                                <div className="w-6 h-6 rounded-full flex justify-center items-center bg-black">
                                    <HiShoppingCart className='text-xl text-white' />
                                </div>
                            </div>
                            <div className="">
                                <h4>Step 2</h4>
                                <h2>Shipping</h2>
                            </div>
                        </li>
                        <li onClick={() => setShowStep(3)} className={`flex items-center gap-2 cursor-pointer ${showStep === 3 ? "opacity-100" : "opacity-40"}`}>
                            <div className="">
                                <div className="w-6 h-6 rounded-full flex justify-center items-center bg-black">
                                    <RiSecurePaymentLine className='text-xl text-white' />
                                </div>
                            </div>
                            <div className="">
                                <h4>Step 3</h4>
                                <h2>Payment</h2>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="mt-12">
                    {/* step 1 */}
                    {showStep === 1 && <StepOne />}
                    {/* step 2 */}
                    {showStep === 2 && <StepTwo />}
                    {/* step 3 */}
                    {showStep === 3 && <StepThree setShowStep={setShowStep}/>}
                </div>
                {
                    showStep !== 3 && (
                        <div className="mt-16 flex justify-end gap-6 pb-12">
                            <button onClick={() => setShowStep(prevStep => (prevStep > 1 && prevStep <= 3) ? prevStep - 1 : prevStep)}
                                className="bg-transparent border-black text-black hover:border-transparent duration-200 hover:bg-black hover:text-white border w-full lg:w-auto lg:px-[86px] py-6 rounded-md text-[16px] font-medium leading-4">back</button>
                            <button onClick={() => setShowStep(prevStep => (prevStep < 3 && prevStep >= 1) ? prevStep + 1 : prevStep)}
                                className="bg-black border-transparent text-white hover:border-black duration-200 hover:bg-transparent hover:text-black border w-full lg:w-auto lg:px-[86px] py-6 rounded-md text-[16px] font-medium leading-4">Next</button>

                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default Step
