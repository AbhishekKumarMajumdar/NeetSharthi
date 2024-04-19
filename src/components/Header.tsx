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
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>

            </section>        </>
    )
}

