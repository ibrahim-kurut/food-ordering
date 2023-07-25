// import Link from 'next/link'
// import { useRouter } from 'next/router';
// import React, { useState } from 'react'
// import { GiCancel } from "react-icons/gi"
// const NavbarItem = () => {

//     const [isMenuModal, setIsMenuModal] = useState(false);
//     const router = useRouter();
//     const menuItems = [
//         {
//             name: "Home",
//             url: "/",
//             pathname: "/"
//         },
//         {
//             name: "About",
//             url: "/about",
//             pathname: "/about"
//         },
//         {
//             name: "Menu",
//             url: "/menu",
//             pathname: "/menu"
//         },
//         {
//             name: "Book table",
//             url: "/booktable",
//             pathname: "/booktable"
//         }
//     ]
//     return (
//         <nav className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-full sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden ${isMenuModal === true && "!grid place-content-center"
//             }`}>
//             <ul className="flex gap-x-2 sm:flex-row flex-col items-center">
//                 <li className="capitalize  sm:flex gap-5">
//                     {
//                         menuItems.map((item, index) =>

//                             <Link key={index}
//                                 className={`flex items-center justify-center py-5 font-bold ${router.pathname === item.pathname ? "text-primary" : "text-gray-500"}`}
//                                 href={item.url} >{item.name}
//                             </Link>

//                         )
//                     }
//                 </li>
//             </ul>
//             {isMenuModal && (
//                 <button
//                     className="absolute  top-4 right-4 z-50"
//                     onClick={() => setIsMenuModal(false)}
//                 >
//                     <GiCancel size={25} className=" transition-all" />
//                 </button>
//             )}
//         </nav>
//     );
// }

// export default NavbarItem