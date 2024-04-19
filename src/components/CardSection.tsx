import React from 'react'
import BasicCard from './BasicCard'
import { FaUserClock } from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";
import { GiBookmarklet } from "react-icons/gi";
const CardSection = () => {

    const data = [
        {
            icon: FaUserClock,
            title: "Lifetime access",
            para: "The gradualaccumulation of information about "
        },
        {
            icon: FaBookBookmark,
            title: "Best Study Material",
            para: "The gradual accumulation of information about "
        },
        {
            icon: GiBookmarklet,
            title: "Test Package",
            para: "The gradual accumulation of information about "
        },
    ]
    return (
        <>
            <section className="w-full h-auto px-6 md:px-10 lg:px-48 py-4  flex flex-col md:flex-row gap-6 md:justify-between ">
                {data.map((e) => (
                    <BasicCard key={e.title} data={e} />
                ))}

            </section>
        </>
    )
}

export default CardSection