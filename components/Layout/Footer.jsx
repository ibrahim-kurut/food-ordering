import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaPinterest, FaTwitter } from "react-icons/fa"
import Title from "../ui/Title"

const Footer = () => {
    return (
        <div className="bg-secondary text-white text-center py-8 capitalize">
            <div className="container mx-auto">
                <div className="inline-block sm:flex flex-wrap">
                    <div className="flex-1">
                        <Title addStyle="text-4xl font-dancing">Contact Us</Title>
                        <div className="flex flex-col items-center py-10">
                            <p className="flex items-center gap-x-2 "> <FaMapMarkerAlt /> location</p>
                            <p className="flex items-center gap-x-2 py-3"> <FaPhoneAlt /> call +0123456789</p>
                            <p className="flex items-center gap-x-2 "> <FaEnvelope /> email@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex-1">
                        <Title addStyle="text-5xl font-dancing">logo</Title>
                        <div className="py-10">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus quo non, error maxime sit

                            </p>
                        </div>
                        <div>
                            <ul className="flex gap-x-2 justify-center">
                                <li className="footer-icon text-gray-400  text-lghover:text-primary cursor-pointer transition-all" ><FaFacebookF /></li>
                                <li className="footer-icon text-gray-400  text-lg hover:text-primary cursor-pointer transition-all" ><FaTwitter /></li>
                                <li className="footer-icon text-gray-400 text-lg  hover:text-primary cursor-pointer transition-all" ><FaLinkedinIn /></li>
                                <li className="footer-icon text-gray-400 text-lg  hover:text-primary cursor-pointer transition-all" ><FaInstagram /></li>
                                <li className="footer-icon text-gray-400  text-lg hover:text-primary cursor-pointer transition-all" ><FaPinterest /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex-1 mt-10 sm:mt-0">
                        <Title addStyle="text-4xl font-dancing">Opening Hours</Title>
                        <div className="flex flex-col items-center py-10">
                            <p className="flex items-center gap-x-2 ">Everyday</p>
                            <p className="flex items-center gap-x-2 py-3">10.00 Am -10.00 Pm</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="sm:mt-10">
                <p className=" ">copy rigth </p>
            </div>
        </div>
    )
}

export default Footer