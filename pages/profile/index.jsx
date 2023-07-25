import Account from '@/components/Profile/Account'
import Order from '@/components/Profile/Order'
import Password from '@/components/Profile/Password'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaBicycle, FaHome, FaKey } from 'react-icons/fa'
import { RxExit } from 'react-icons/rx'

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
                    <p className="mt-3 text-2xl">user full name</p>
                    <div className="w-full mt-3">
                        <ul className="font-semibold">
                            <li onClick={() => setTabs(0)}
                                className={`flex items-center gap-2 w-full p-[11px] 
                                cursor-pointer hover:bg-primary transition-all ${tabs === 0 && "bg-primary"}`}> <FaHome /> account</li>
                            <li onClick={() => setTabs(1)}
                                className={`flex items-center gap-2 w-full p-[11px] 
                                cursor-pointer hover:bg-primary transition-all ${tabs === 1 && "bg-primary"}`}> <FaKey /> password</li>
                            <li onClick={() => setTabs(2)}
                                className={`flex items-center gap-2 w-full p-[11px] 
                                cursor-pointer hover:bg-primary transition-all ${tabs === 2 && "bg-primary"}`}> <FaBicycle /> orders</li>
                            <li onClick={() => alert("exit")}
                                className={`flex items-center gap-2 w-full p-[11px] 
                                cursor-pointer hover:bg-primary transition-all ${tabs === 3 && "bg-primary"}`}> <RxExit /> exit</li>
                        </ul>
                    </div>
                </div>
                <div className="md:w-3/4 w-[90%] mx-auto  md:pl-10 pt-4">

                    {tabs === 0 && (
                        // <Account user={user} />
                        <Account />
                    )}
                    {tabs === 1 && (
                        // <Password user={user} />
                        <Password />
                    )}
                    {tabs === 2 && (
                        <Order />
                    )}



                </div>
            </div>
        </div>
    )
}

export default Profile