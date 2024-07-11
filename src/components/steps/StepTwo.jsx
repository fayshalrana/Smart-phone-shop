import React, { useState } from 'react'

const StepTwo = () => {
    const [select, setSelect] = useState(1)
    return (
        <div>
            <h3 className='text-xl font-semibold leading-6 text-[#17183B]'>Shipment Method</h3>
            <div className="flex flex-col gap-6 mt-8">
                <div onClick={() => setSelect(1)} className="p-6 rounded-[7px] flex justify-between cursor-pointer border items-center">
                    <div className="w-[50%] flex gap-4 flex-col md:flex-row">
                        <div className="w-6 h-6 bg-transparent border-2 border-black rounded-full mr-2 flex items-center justify-center">
                            {
                                select === 1 &&
                                <div className="w-3 h-3 bg-black rounded-full"></div>
                            }
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-start md:items-center gap-4 flex-col md:flex-row">
                                <h3 className={`text-[16px] font-medium leading-6 ${select === 1 ? 'text-[#17183B]' : 'text-[#A2A3B1]'}`}>Free</h3>
                                <p className={`text-[16px] font-normal leading-6 ${select === 1 ? 'text-[#17183B]' : 'text-[#A2A3B1]'}`}>Regulary shipment</p>
                            </div>
                        </div>
                    </div>
                    <div className="ml-auto">
                        <p className={`text-[16px] font-normal leading-6 ${select === 1 ? 'text-[#17183B]' : 'text-[#A2A3B1]'}`}>17 Oct, 2023</p>
                    </div>
                </div>
                <div onClick={() => setSelect(2)} className="p-6 rounded-[7px] flex justify-between cursor-pointer border items-center">
                    <div className="w-[50%] flex gap-4 flex-col md:flex-row">
                        <div className="w-6 h-6 bg-transparent border-2 border-black rounded-full mr-2 flex items-center justify-center">
                            {
                                select === 2 &&
                                <div className="w-3 h-3 bg-black rounded-full"></div>
                            }
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-start md:items-center gap-4 flex-col md:flex-row">
                                <h3 className={`text-[16px] font-medium leading-6 ${select === 2 ? 'text-[#17183B]' : 'text-[#A2A3B1]'}`}>Free</h3>
                                <p className={`text-[16px] font-normal leading-6 ${select === 2 ? 'text-[#17183B]' : 'text-[#A2A3B1]'}`}>Regulary shipment</p>
                            </div>
                        </div>
                    </div>
                    <div className="ml-auto">
                        <p className={`text-[16px] font-normal leading-6 ${select === 2 ? 'text-[#17183B]' : 'text-[#A2A3B1]'}`}>17 Oct, 2023</p>
                    </div>
                </div>
                <div onClick={() => setSelect(3)} className="p-6 rounded-[7px] flex justify-between cursor-pointer border items-center">
                    <div className="w-[50%] flex gap-4 flex-col md:flex-row">
                        <div className="w-6 h-6 bg-transparent border-2 border-black rounded-full mr-2 flex items-center justify-center">
                            {
                                select === 3 &&
                                <div className="w-3 h-3 bg-black rounded-full"></div>
                            }
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-start md:items-center gap-4 flex-col md:flex-row">
                                <h3 className={`text-[16px] font-medium leading-6 ${select === 3 ? 'text-[#17183B]' : 'text-[#A2A3B1]'}`}>Free</h3>
                                <p className={`text-[16px] font-normal leading-6 ${select === 3 ? 'text-[#17183B]' : 'text-[#A2A3B1]'}`}>Regulary shipment</p>
                            </div>
                        </div>
                    </div>
                    <div className="ml-auto">
                        <p className={`text-[16px] font-normal leading-6 ${select === 3 ? 'text-[#17183B]' : 'text-[#A2A3B1]'}`}>17 Oct, 2023</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StepTwo
