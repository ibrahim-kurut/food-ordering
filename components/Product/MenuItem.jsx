import Image from 'next/image'
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import Title from '../ui/Title'
import Link from 'next/link'

const MenuItem = () => {
    return (

        <div className="w-72 h-auto bg-secondary mb-2 rounded-xl overflow-hidden " >
            <div className="bg-[#f1f2f3] h-[216px] grid place-content-center rounded-bl-[46px]">
                <div className="relative w-36 h-w-36">
                    <Link href="/product">
                        <Image className="  rounded-full hover:scale-105 transition-all" src="/img/o1.jpg" alt="" width={500} height={500} priority />
                    </Link>
                </div>
            </div>
            <div className="p-6 text-white">
                <Title addStyle="text-xl font-semibold">Delicious Burger</Title>
                <p className="text-sm text-gray-400 py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ea perspiciatis praesentium repellendus aperiam recusandae?</p>
                <div className="flex justify-between">
                    <p className="">$10</p>
                    <button className="bg-primary p-0 w-8 h-8 flex justify-center items-center rounded-full text-black">
                        <FaShoppingCart />
                    </button>
                </div>
            </div>

        </div>

    )
}

export default MenuItem