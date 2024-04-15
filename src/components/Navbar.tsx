"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Logo from "@/Images/Banner/Logo.png"
import { FiMenu } from "react-icons/fi";
import Link from 'next/link';


const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="py-4 px-6 md:px-20">
            <div className="flex justify-between items-center">
                <div className="flex items-center pl-0 md:pl-8">
                    <Link href={"/"}>
                        <Image
                            src={Logo}
                            alt="logo"
                            height={112}
                            width={78}
                        />
                    </Link>
                </div>

                {/* <!-- MOBILE NAV ICON --> */}
                <div className="md:hidden block ">
                    <button aria-label="navigation" type="button" className="md:hidden block text-black transition duration-300 focus:outline-none focus:text-white hover:text-white">
                        <FiMenu onClick={() => setToggle(!toggle)} color={"#000"} size={30} /> {/* Corrected color attribute */}
                    </button>
                </div>

                {/* <!-- NAVIGATION - LARGE SCREENS --> */}
                <div className="hidden md:flex">
                    <ul className="hidden md:flex">
                        <li className="text-md pr-8"><Link href="/Courses" className="transition duration-300 focus:outline-none focus:underline hover:underline">Courses</Link></li>
                        <li className="text-md pr-8"><Link href="/About" className="transition duration-300 focus:outline-none focus:underline hover:underline">About us</Link></li>
                        <li className="text-md pr-8"><Link href="/Study_Material" className="transition duration-300 focus:outline-none focus:underline hover:underline">Study Material</Link></li>
                        <li className="text-md pr-8"><Link href="/Careers" className="transition duration-300 focus:outline-none focus:underline hover:underline">Test Series</Link></li>
                        {/* <li className="text-md pr-8"><Link href="/Careers" className="transition duration-300 focus:outline-none focus:underline hover:underline">Careers</Link></li> */}
                        <li className="text-md pr-8"><Link href="/" className="transition duration-300 focus:outline-none focus:underline hover:underline">More</Link></li>
                    </ul>
                </div>

                <div className="hidden md:flex">
                    <button className="rounded-lg px-4 py-2 border-2 border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-blue-100 duration-300">Login</button>
                </div>
            </div>

            {/* <!-- MOBILE MENU --> */}
            <div id="mobileMenu" className={` ${toggle ? "flex" : "hidden"}  w-full mx-auto py-8 text-center`}>
                <div className="flex flex-col bg-[#151F63] justify-center items-center w-full">
                    <Link href="/Courses" className="block text-gray-200 cursor-pointer py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500">Courses</Link>
                    <Link href="/About" className="block text-gray-200 cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500">About us</Link>
                    <Link href="/Study_Material" className="block text-gray-200 cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500">Study Material</Link>
                    <Link href="/Careers" className="block text-gray-200 cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500">Test Series</Link>
                    {/* <Link href="/Careers" className="block text-gray-200 cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500">Careers</Link> */}
                    <Link href="/" className="block text-gray-200 cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500">More</Link>
                </div>
            </div>
        </nav>)
}

export default Navbar