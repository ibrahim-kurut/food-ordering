import MenuWrapper from '@/components/Product/MenuWrapper'
import AboutComponent from '@/components/ui/AboutComponent'
import Campaigns from '@/components/ui/Campaigns'
import Customers from '@/components/Customer/Customers'
import Reservation from '@/components/ui/Reservation'
import Slider from '@/components/ui/SliderCom'
import Image from 'next/image'
import React from 'react'

const Home = () => {
    return (
        <>
            <div className="relative h-[calc(100vh_-_64px)]">
                <div className="relative w-full h-full">
                    <Image
                        src="/img/hero-bg3.jpg"
                        alt=""
                        fill
                        objectFit="cover"
                    />
                </div>
                {/* <Slider /> */}
            </div>
            <Campaigns />
            <MenuWrapper />
            <div className="my-5">
                <AboutComponent />
            </div>
            <div className="my-5">
                <Reservation />
            </div>
            <div className="my-5">
                <Customers />
            </div>
        </>
    )
}

export default Home