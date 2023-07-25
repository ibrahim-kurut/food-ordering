import Title from '../ui/Title'
import CustomerItem from './CustomerItem'
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Customers = ({ srcImg }) => {

    //create next btn function
    const NextBtn = ({ onClick }) => {
        return (
            <button className="bg-primary w-8 h-8 flex items-center justify-center text-xl rounded-full absolute -bottom-12 left-[51%] " onClick={onClick}>
                <FaAngleRight />
            </button>
        )
    }
    //create Prev btn function
    const PrevBtn = ({ onClick }) => {
        return (
            <button className="bg-primary w-8 h-8 flex items-center justify-center text-xl rounded-full absolute -bottom-12 right-[51%] " onClick={onClick}>
                <FaAngleLeft />
            </button>
        )
    }



    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: true,
        nextArrow: <NextBtn />,
        prevArrow: <PrevBtn />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    };
    return (
        <div className="mb-24">
            <div className="container mx-auto">
                <Title addStyle="text-[2.5rem] font-dancing text-center">What Says Our Customers</Title>
                <Slider {...settings}>
                    <CustomerItem srcImg="/img/client1.jpg" />
                    <CustomerItem srcImg="/img/client2.jpg" />
                    <CustomerItem srcImg="/img/client1.jpg" />
                    <CustomerItem srcImg="/img/client2.jpg" />
                </Slider>
            </div>

        </div>
    )
}

export default Customers



