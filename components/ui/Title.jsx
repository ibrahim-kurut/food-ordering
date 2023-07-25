import React from 'react'

const Title = ({ title, addStyle }) => {
    return (
        <div
            className={`capitalize text-3xl font-dancing font-bold ${addStyle}`}>
            {title}
        </div>
    )
}

export default Title