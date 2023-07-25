import React from 'react'

const Btn = ({ btnName, addStyle, icon }) => {
    return (
        <button className={`${addStyle} bg-primary py-2 px-6 rounded-full hover:opacity-70 transition-opacity capitalize flex items-center gap-2`}>
            <span>{btnName}</span>
            <span>{icon}</span>
        </button>
    )
}

export default Btn