import getRating from '@/utils/rating';
import Image from 'next/image';
import React from 'react';

const Comment = ({ data }) => {
    let rating = data.rating;
    // console.log(data);
    return (
        <div className="flex justify-between items-start py-6 px-4 bg-secondaryBg rounded-[10px]">
            <div className="w-[27%] md:w-[10%]">
                <div className="w-14 h-14 rounded-full bg-[#D9D9D9] flex justify-center items-center overflow-hidden">
                    <Image src={data.img.src} alt="user image" width={100} height={100} className='w-full h-full object-cover' />
                </div>
            </div>
            <div className="w-full">
                <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-2">
                        <h3 className='text-[17px] font-bold leading-6 text-black'>{data.name}</h3>
                        <span>{getRating(rating, 100)}</span>
                    </div>
                    <p className='text-[14px] font-medium leading-4 text-secondary/50'>{data.date}</p>
                </div>
                <div className="mt-2">
                    <p className='text-[15px] font-medium leading-6 text-secondary'>{data.comment}</p>
                </div>
                <div className="flex items-center gap-2 mt-4">
                    {data.reviewImg &&
                        data.reviewImg.map((img, index) => (
                            <div key={index}  className="w-[118.34px] h-[88px] rounded-md">
                                <Image src={img} alt={`Review image ${index}`} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Comment;
