"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Logo from "@/Images/Logo/Logo.png"
import { FiMenu } from "react-icons/fi";
import Link from 'next/link';


const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [opneSubMenu, setOpenSubMenu] = useState(false)
    const [test, setTest] = useState(false)

    return (
        // <>
        //     <div className="w-full h-[50px] bg-[#FF6161] flex justify-center items-center font-bold text-[18px] md:text-[25px] text-white">Institute for Foundation, CUET, NEET & JEE</div>
        //     <nav className="py-2 px-6 md:px-20 bg-[#749CD2]">
        //         <div className="flex justify-between items-center">
        //             <div className="flex items-center pl-0 md:pl-8">
        //                 <Link href={"/"}>
        //                     <Image
        //                         src={Logo}
        //                         alt="logo"
        //                         height={102}
        //                         width={68}
        //                     />
        //                 </Link>
        //             </div>

        //             {/* <!-- MOBILE NAV ICON --> */}
        //             <div className="md:hidden block ">
        //                 <button aria-label="navigation" type="button" className="md:hidden block text-black transition duration-300 focus:outline-none focus:text-white hover:text-white">
        //                     <FiMenu onClick={() => setToggle(!toggle)} color={"#000"} size={30} /> {/* Corrected color attribute */}
        //                 </button>
        //             </div>

        //             {/* <!-- NAVIGATION - LARGE SCREENS --> */}
        //             <div className="hidden md:flex pl-32 ">
        //                 <ul className="hidden md:flex md:gap-6">
        //                     <li className="text-lg font-bold "><Link href="/Courses" className="transition duration-300 focus:outline-none focus:underline hover:underline">Courses</Link></li>
        //                     <li className="text-lg font-bold "><Link href="/About" className="transition duration-300 focus:outline-none focus:underline hover:underline">About us</Link></li>
        //                     <li className="text-lg font-bold "><Link href="/Study_Material" className="transition duration-300 focus:outline-none focus:underline hover:underline">Study Material</Link></li>
        //                     <li className="text-lg font-bold "><Link href="/Careers" className="transition duration-300 focus:outline-none focus:underline hover:underline">Test Series</Link></li>
        //                     {/* <li className="text-md pr-8">Link href="/Careers" className="transition duration-300 focus:outline-none focus:underline hover:underline">Careers</Link></li> */}
        //                     <li className="text-lg font-bold "><Link href="/" className="transition duration-300 focus:outline-none focus:underline hover:underline">More</Link></li>
        //                 </ul>
        //             </div>

        //             <div className="hidden md:flex md:gap-4">
        //                 <button className="rounded-lg px-4 py-2 bg-[#FF6161] text-bold text-white hover:bg-blue-600 hover:text-blue-100 duration-300">+918090908042</button>
        //                 <button className="rounded-lg px-4 py-2 bg-[#FF6161] text-bold text-white hover:bg-blue-600 hover:text-blue-100 duration-300">Join Us</button>
        //             </div>
        //         </div>

        //         {/* <!-- MOBILE MENU --> */}
        //         <div id="mobileMenu" className={` ${toggle ? "flex" : "hidden"}  w-full mx-auto py-8 text-center`}>
        //             <div className="flex flex-col bg-[#151F63] justify-center items-center w-full">
        //                 <Link href="/Courses" className="block text-gray-200 cursor-pointer py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500">Courses</Link>
        //                 <Link href="/About" className="block text-gray-200 cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500">About us</Link>
        //                 <Link href="/Study_Material" className="block text-gray-200 cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500">Study Material</Link>
        //                 <Link href="/Careers" className="block text-gray-200 cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500">Test Series</Link>
        //                 {/* <Link href="/Careers" className="block text-gray-200 cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500">Careers</Link> */}
        //                 <Link href="/" className="block text-gray-200 cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500">More</Link>
        //             </div>
        //         </div>
        //     </nav>
        // </>
        <>
            <div className="w-full h-[50px] bg-[#FF6161] flex justify-center items-center font-bold text-[18px] md:text-[25px] text-white">Institute for Foundation, CUET, NEET & JEE</div>
            <nav className="py-2 px-6 md:px-20 bg-[#749CD2]">
                <div className="flex justify-between items-center">
                    <div className="flex items-center pl-0 md:pl-8">
                        <Link href={"/"}>
                            <Image
                                src={Logo}
                                alt="logo"
                                height={102}
                                width={68}
                            />
                        </Link>
                    </div>

                    {/* MOBILE NAV ICON */}
                    <div className="md:hidden block ">
                        <button aria-label="navigation" type="button" className="md:hidden block text-black transition duration-300 focus:outline-none focus:text-white hover:text-white">
                            <FiMenu onClick={() => setToggle(!toggle)} color={"#000"} size={30} /> {/* Corrected color attribute */}
                        </button>
                    </div>

                    {/* NAVIGATION - LARGE SCREENS */}
                    <div className="hidden md:flex md:pl-32 ">
                        <ul className="hidden md:flex md:gap-6">
                            <li className="text-lg font-bold relative">
                                <div className="transition duration-300 relative focus:outline-none focus:underline hover:underline"
                                    onMouseEnter={() => setOpenSubMenu(true)}
                                >Courses</div>
                                <div onMouseLeave={() => setOpenSubMenu(false)}
                                    className={` top-full -left-[50%] mt-2 bg-[#e8e3f8] shadow-lg rounded-md py-2 w-48 z-10 ${opneSubMenu ? "absolute" : "hidden"}`}>
                                    <Link href="/Courses" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">Popular Courses</Link>
                                    <Link href="/Samagra" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">Samagra Neet Jee-2024</Link>
                                    <Link href="/Ntse" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">Class-X NTSE</Link>
                                    <Link href="/Nse" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">Class-X IJSO</Link>
                                </div>
                            </li>
                            <li className="text-lg font-bold "><Link href="/About" className="transition duration-300 focus:outline-none focus:underline hover:underline">About us</Link></li>
                            <li className="text-lg font-bold relative">
                                <div className="transition duration-300 relative focus:outline-none focus:underline hover:underline"
                                    onMouseEnter={() => setTest(true)}
                                >Study Material</div>
                                <div onMouseLeave={() => setTest(false)}
                                    className={` top-full -left-[50%] mt-2 bg-[#e8e3f8] shadow-lg rounded-md py-2 w-48 z-10 ${test ? "absolute" : "hidden"}`}>
                                    <Link href="/Study_Material" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">Pre Nurture</Link>
                                    <Link href="/Neet" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">Neet</Link>
                                    <Link href="/Jee" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">Jee</Link>
                                </div>
                            </li>
                            <li className="text-lg font-bold "><Link href="/Careers" className="transition duration-300 focus:outline-none focus:underline hover:underline">Test Series</Link></li>
                            <li className="text-lg font-bold "><Link href="/More" className="transition duration-300 focus:outline-none focus:underline hover:underline">More</Link></li>
                        </ul>
                    </div>

                    <div className="hidden md:flex md:gap-4">
                        <button className="rounded-lg px-4 py-2 bg-[#FF6161] text-bold text-white hover:bg-blue-600 hover:text-blue-100 duration-300">+918090908042</button>
                        <button className="rounded-lg px-4 py-2 bg-[#FF6161] text-bold text-white hover:bg-blue-600 hover:text-blue-100 duration-300">Join Us</button>
                    </div>
                </div>

                {/* MOBILE MENU */}
                <div id="mobileMenu" className={` ${toggle ? "flex" : "hidden"}  w-full mx-auto py-8 text-center`}>
                    <div className="flex flex-col rounded-xl bg-[#151F63] justify-center items-center w-full">
                        <div className="text-lg font-bold relative">
                            <div
                                className="block text-gray-200 font-normal cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"
                                onClick={() => setOpenSubMenu(!opneSubMenu)}
                            >Courses</div>
                            <div
                                className={` top-full  -left-[50%] mt-2 bg-[#e8e3f8] shadow-lg rounded-md py-2 w-52 md:w-48 z-10 ${opneSubMenu ? "absolute" : "hidden"}`}>
                                <Link href="/Courses" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">Popular Courses</Link>
                                <Link href="/Samagra" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">Samagra Neet Jee-2024</Link>

                                <Link href="/Ntse" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">Class-X NTSE</Link>
                                <Link href="/Nse" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200">Class-X IJSO</Link>
                                {/* Add more submenu items as needed */}
                            </div>
                        </div>
                        <Link href="/About"
                            className="block text-gray-200 cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"
                        >About us</Link>
                        <Link href="/Study_Material" className="block text-gray-200 cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500">Study Material</Link>
                        <Link href="/Careers" className="block text-gray-200 cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500">Test Series</Link>
                        {/* <Link href="/Careers" className="block text-gray-200 cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500">Careers</Link> */}
                        <Link href="/More" className="block text-gray-200 cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500">More</Link>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Navbar