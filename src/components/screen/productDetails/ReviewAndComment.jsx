import Comment from '@/components/comment/Comment'
import { reviews } from '@/data/customerReview'
import getRating from '@/utils/rating'
import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
const rating = [
    { id: 1, name: 'Excellent', value: 100, parent: 98 },
    { id: 2, name: 'Good', value: 11, parent: 70 },
    { id: 3, name: 'Average', value: 3, parent: 30 },
    { id: 4, name: 'Below Average', value: 8, parent: 50 },
    { id: 5, name: 'Poor', value: 1, parent: 20 },
]
const ReviewAndComment = () => {
    return (
        <section className='py-[88px]'>
            <div className="container">
                <h3 className='text-2xl font-medium leading-8 text-black pb-8'>Reviews</h3>
                <div className="flex gap-8 lg:gap-[60px] justify-between flex-col items-center md:flex-row">
                    <div className="w-full md:w-[40%] lg:w-[20%] h-[192px rounded-[25px] bg-[#FAFAFA] flex flex-row md:flex-col justify-center items-center p-8 gap-5 lg:gap-0">
                        <div className="flex flex-col items-center">
                            <h2 className='text-[40px] lg:text-[56px] font-medium leading-[56px] text-black'>4.8</h2>
                            <p className='text-[15px] font-medium leading-4 text-secondary py-4'>of 125 reviews</p>
                        </div>
                        <span className='text-2xl'>{getRating(4.8, 200)}</span>
                    </div>
                    <div className="flex flex-col gap-6 w-[95%]">
                        {
                            rating.map((item) => {
                                return (
                                    <div key={item.id} className="flex items-center gap-4">
                                        <div className="w-[50%] lg:w-[25%] xl:w-[20%]">
                                            <h4 className='whitespace-nowrap text-lg font-medium leading-4 text-black'>{item.name}</h4>
                                        </div>
                                        <div className="w-full h-[5px] bg-[#D9D9D9] rounded-lg">
                                            <div className={` h-[5px] bg-[#FFB547] rounded-lg`} style={{ width: `${item.parent}%` }}></div>
                                        </div>
                                        <p className='w-[5%] text-right text-[16px] font-medium text-secondary leading-4'>{item.value}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="mt-12">
                    <input type="text" placeholder='Leave Comment' className='w-full h-[50px] rounded-[7px] border border-[#D9D9D9] pl-4 focus:outline-none text-[14px] font-normal leading-4 -tracking-[.5%]' />
                </div>
                <div className="mt-8 flex flex-col gap-6">
                    {
                        reviews.map(item => {
                            return (
                                <Comment key={item.id} data={item} />
                            )
                        })
                    }
                </div>
                <div className="flex items-center justify-center mt-6">
                    <button type='button' className='bg-transparent border border-black rounded-lg text-black flex items-center gap-2 py-3 px-14 hover:bg-black hover:text-white transition duration-300 ease-in-out hover:border-transparent text-[14px] font-medium leading-6 capitalize'>View more <IoIosArrowDown className='text-2xl' /></button>
                </div>
            </div>
        </section>
    )
}

export default ReviewAndComment
