import React from 'react'

const EmptyCard = ({name}) => {
    return (
        <div className='py-6 px-4 bg-secondaryBg rounded-[9px] flex justify-center items-center'>
            <h3 className='text-xl leading-6 text-black/50 font-bold text-center pb-4'>{name}</h3>
        </div>
    )
}

export default EmptyCard
