import React, { useState } from 'react'
import Logo from '../ui/Logo'
import NavbarItem from './NavbarItem'
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa"
import { RxHamburgerMenu } from "react-icons/rx"
import { GiCancel } from "react-icons/gi"
import Link from 'next/link'
import Btn from '../ui/Btn'
import SearchModal from '../ui/SearchModal'
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux'

const Header = () => {

    const cart = useSelector((state) => state.cart)

    const [searchModalOpen, setSearchModalOpen] = useState(false)
    const [isMenuModal, setIsMenuModal] = useState(false);
    const router = useRouter();
    const menuItems = [
        {
            name: "Home",
            url: "/",
            pathname: "/"
        },
        {
            name: "About",
            url: "/about",
            pathname: "/about"
        },
        {
            name: "Menu",
            url: "/menu",
            pathname: "/menu"
        },
        {
            name: "Book table",
            url: "/booktable",
            pathname: "/booktable"
        }
    ]
    return (
        <div className="bg-secondary text-white">
            <div className="container h-16 mx-auto flex  justify-between items-center">
                <Logo />

                <div className="">
                    <nav className={`sm:static absolute top-0 left-0 z-50 sm:w-auto sm:h-auto w-full h-full sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden ${isMenuModal === true && "!grid place-content-center"
                        }`}>
                        <ul className="flex gap-x-2 sm:flex-row flex-col items-center">
                            <li className="capitalize  sm:flex gap-5">
                                {
                                    menuItems.map((item, index) =>

                                        <Link key={index}
                                            className={`flex items-center justify-center py-5 font-bold ${router.pathname === item.pathname ? "text-primary" : "text-gray-500"}`}
                                            href={item.url} >{item.name}
                                        </Link>

                                    )
                                }
                            </li>
                        </ul>
                        {isMenuModal && (
                            <button
                                className="absolute  top-4 right-4 z-50"
                                onClick={() => setIsMenuModal(false)}
                            >
                                <GiCancel size={25} className=" transition-all" />
                            </button>
                        )}
                    </nav>
                </div>

                <div className="flex gap-x-4 items-center">
                    <Link href="/auth/login" className="hover:text-primary ease-linear duration-100">
                        <FaUserAlt />
                    </Link>
                    <Link href="/cart" className="relative hover:text-primary ease-linear duration-100">
                        <div className="">
                            <FaShoppingCart />
                            <span
                                className='absolute bottom-3 left-3 bg-primary px-1 text-black rounded-xl'>
                                {cart.products.length}
                            </span>
                        </div>
                    </Link>
                    {/* ============== search btn ============== */}
                    <button className="hover:text-primary ease-linear duration-100">
                        <FaSearch onClick={() => setSearchModalOpen(true)} />
                    </button>
                    {/* ============== burger btn ============== */}
                    <div
                        onClick={() => setIsMenuModal(true)}
                        className="cursor-pointer hover:text-primary transition-colors sm:hidden">
                        <RxHamburgerMenu size={25} />
                    </div>


                    <div className="md:inline-block hidden">
                        <Btn btnName="order online" />
                    </div>
                </div>

            </div>
            {/* =============== SearchModal =============== */}
            {
                searchModalOpen ?

                    <SearchModal setSearchModalOpen={setSearchModalOpen} />
                    : ""
            }

        </div>
    )
}

export default Header