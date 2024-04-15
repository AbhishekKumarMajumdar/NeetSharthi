import React from 'react'
import Navbar from './Navbar'
import { FiShoppingCart } from "react-icons/fi";
import { FiUserPlus } from "react-icons/fi";
import { RiMenu2Fill } from "react-icons/ri";

import Logo from "@/Images/Logo/Logo.png"
import Image from 'next/image';
import Link from 'next/link';
import Banner from "@/Images/Banner/Banner.jpg"
const Header = () => {

    return (
        <>
            <section className="w-[100vw] h-[90vh]">
                <Image
                    src={Banner}
                    alt="Header Image"
                    className='w-[100%] h-[100%]'
                    width={1280} height={720} objectFit="cover"
                />
            </section>
        </>
    )
}

export default Header