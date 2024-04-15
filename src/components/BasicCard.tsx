import React from 'react'
import { FaUserClock } from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";
import { GiBookmarklet } from "react-icons/gi";

const BasicCard = ({ data }: any) => {
    return (
        <>
            <div className="flex flex-col p-6 w-[100%] gap-2 md:gap-5">
                <div className="py-6">

                    <data.icon size={40} color={"#e74040"} />

                </div>
                <div className="font-bold">{data.title}</div>
                <div className="h-[2px] w-[20%] bg-[#e74040]"></div>
                <div className="text-[#3e3e3e]">{data.para}</div>
            </div>
        </>
    )
}

export default BasicCard