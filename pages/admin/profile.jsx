import Categories from '@/components/AdminPanal/Categories'
import Footer from '@/components/AdminPanal/Footer'
import Orders from '@/components/AdminPanal/Orders'
import Products from '@/components/AdminPanal/Products'
import { MdOutlineFastfood } from "react-icons/md"
import { RiEBike2Line } from "react-icons/ri"
import { BiCategoryAlt } from "react-icons/bi"
import { FaWindowMaximize } from 'react-icons/fa'
import { IoMdExit } from 'react-icons/io'

import Image from 'next/image'
import React, { useState } from 'react'


const Profile = () => {
    const [tabs, setTabs] = useState(0)
    return (
        <div className="container mx-auto ">
            <div className="flex flex-wrap my-5 min-h-[calc(100vh_-_(470px))] capitalize">
                <div className="md:w-1/4 w-full border border-gray-300 flex flex-col  items-center pt-5">
                    <div className="img relative w-32 h-32">
                        <Image
                            src="/img/user/user2.png"
                            alt='' fill className='rounded-full' />
                    </div>
                    <p className="mt-3 text-2xl">admin</p>
                    <div className="w-full mt-3">
                        <ul className="font-semibold">
                            <li onClick={() => setTabs(0)}
                                className={`flex items-center gap-2 w-full p-[11px]  cursor-pointer hover:bg-primary transition-all ${tabs === 0 && "bg-primary"}`}><MdOutlineFastfood /> products</li>
                            <li onClick={() => setTabs(1)}
                                className={`flex items-center gap-2 w-full p-[11px]  cursor-pointer hover:bg-primary transition-all ${tabs === 1 && "bg-primary"}`}><RiEBike2Line />orders</li>
                            <li onClick={() => setTabs(2)}
                                className={`flex items-center gap-2 w-full p-[11px]  cursor-pointer hover:bg-primary transition-all ${tabs === 2 && "bg-primary"}`}><BiCategoryAlt /> category</li>
                            <li onClick={() => setTabs(3)}
                                className={`flex items-center gap-2 w-full p-[11px]  cursor-pointer hover:bg-primary transition-all ${tabs === 3 && "bg-primary"}`}><FaWindowMaximize /> footer</li>
                            <li
                                onClick={() => alert("exit")}
                                className={`flex items-center gap-2 w-full p-[11px]  cursor-pointer hover:bg-primary transition-all ${tabs === 4 && "bg-primary"}`}><IoMdExit /> exit</li>
                        </ul>
                    </div>
                </div>
                <div className="md:w-3/4 w-[90%] mx-auto  md:pl-10 pt-4">

                    {tabs === 0 && (

                        <Products />
                    )}
                    {tabs === 1 && (

                        <Orders />

                    )}
                    {tabs === 2 && (
                        <Categories />
                    )}
                    {tabs === 3 && (
                        <Footer />
                    )}



                </div>
            </div>
        </div>
    )
}

export default Profile