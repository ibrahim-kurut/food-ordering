import React from 'react'
import Title from './Title'
import Btn from './Btn'

const SliderItem = () => {
    return (
        <div className="px-5">
            <Title title="fast food restaurant" addStyle="text-6xl text-gray-300" />
            <p className="py-5 text-gray-500 italic">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus asperiores ea explicabo impedit assumenda modi, provident
            </p>
            <Btn btnName="order now" />
        </div>
    )
}

export default SliderItem