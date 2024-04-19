"use client"
import React from 'react'
import Navbar from './Navbar'
import { FiShoppingCart } from "react-icons/fi";
import { FiUserPlus } from "react-icons/fi";
import { RiMenu2Fill } from "react-icons/ri";

import Logo from "@/Images/Logo/Logo.png"
import Image from 'next/image';
import Link from 'next/link';
import Banner from "@/Images/Banner/Banner.jpg"
import Nse from "@/Images/Banner/Smp2.png"
import Nse2 from "@/Images/Banner/Smp.png"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import "swiper/css";

import "@/Style/Swiper.css";
export default function Header() {
    return (
        <>
            <section className="w-[100vw] h-[200px] md:h-[90vh]">
                <Swiper className="mySwiper"
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                >
                    <SwiperSlide>
                        <Image
                            src={Banner}
                            alt="Header Image"
                            className='w-[100%] h-[100%]'
                            width={1280} height={720} objectFit="cover"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src={Nse}
                            alt="Header Image"
                            className='w-[100%] h-[100%]'
                            width={1280} height={720} objectFit="cover"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src={Nse2}
                            alt="Header Image"
                            className='w-[100%] h-[100%]'
                            width={1280} height={720} objectFit="cover"
                        />
                    </SwiperSlide>

                </Swiper>

            </section>        </>
    )
}

