import React from 'react'
import Summary from './Summary'
import Payment from './Payment'

const StepThree = ({setShowStep}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12  lg:gap-16 xl:gap-24 pb-[72px]'>
            <Summary />
            <Payment setShowStep={setShowStep}/>
        </div>
    )
}

export default StepThree
