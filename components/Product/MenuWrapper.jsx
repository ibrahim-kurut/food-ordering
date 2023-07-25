import React from 'react'
import Title from '../ui/Title'
import MenuItem from './MenuItem'
import Btn from '../ui/Btn'

const MenuWrapper = () => {
    return (
        <div className="container mx-auto flex flex-col items-center ">
            <Title title="our menu" addStyle="text-5xl" />
            <div className="my-5">
                <button className="px-6 py-2 bg-secondary rounded-3xl text-white capitalize ">all</button>
                <button className="px-6 py-2  rounded-3xl capitalize ">burger</button>
                <button className="px-6 py-2  rounded-3xl capitalize ">pizza</button>
                <button className="px-6 py-2  rounded-3xl capitalize ">drink</button>
            </div>
            <div className="flex gap-x-6 flex-wrap justify-center">
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </div>
            <Btn btnName="View More" addStyle="mt-10" />

        </div>
    )
}

export default MenuWrapper