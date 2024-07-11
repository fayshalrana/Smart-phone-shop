import React from 'react'
import './CheckBox.css'
const CheckBox = ({ item }) => {
    return (
        <div className="checkbox-wrapper-46">
            <input type="checkbox" id={item.id} className="inp-cbx" />
            <label htmlFor={item.id} className="cbx flex items-center">
                <span>
                    <svg viewBox="0 0 12 10" height="10px" width="12px">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                </span>
                <div className="flex items-center gap-1">
                    <h4 className='text-black font-medium leading-6 text-[18px]'>{item.name}</h4>
                    <p className='text-[14px] text-secondary'>{item.quantity}</p>
                </div>
            </label>
        </div>

    )
}

export default CheckBox
