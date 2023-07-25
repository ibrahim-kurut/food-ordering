import React, { Component } from "react";
import Slider from "react-slick";
import SliderItem from "./SliderItem";

const SliderCom = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };
    return (
        <div className="absolute top-[25%] left-[10%] bg-red-400">
            <div className=" w-80 sm:w-[35rem]">
                <Slider {...settings}>
                    <div>
                        <SliderItem />
                    </div>
                    <div>
                        <SliderItem />
                    </div>
                    <div>
                        <SliderItem />
                    </div>
                </Slider>

            </div>
        </div>
    )
}

export default SliderCom