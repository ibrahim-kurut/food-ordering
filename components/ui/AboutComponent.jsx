import Image from 'next/image'
import React from 'react'
import Title from './Title'
import Btn from './Btn'

const AboutComponent = () => {
    return (
        <div className="bg-secondary py-24 ">
            <div className="container mx-auto">
                <div className="flex items-center flex-wrap-reverse gap-20 justify-center">
                    <div className="relative w-[15rem] h-[20rem] md:w-[27rem] md:h-[37rem]">
                        <Image className="" src="/img/about-img.png" alt="" width={500} height={500} />
                    </div>
                    <div className="text-white flex-1  text-center sm:text-left">
                        <Title title="We Are Feane" addStyle="text-[2.5rem]" />
                        <p className="my-8">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis soluta odit doloremque dicta officiis voluptates illum corporis dolorem officia placeat quae modi iure ratione, quasi repudiandae ut quisquam aut, omnis et, explicabo veniam quia. A sit quas exercitationem autem tempora.

                        </p>


                        <Btn btnName="Read More" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutComponent