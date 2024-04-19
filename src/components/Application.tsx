import React from 'react'
import Image from 'next/image'
import App from "@/Images/Banner/app.png"
import { FaVideo } from "react-icons/fa6";
import { FcCollaboration } from "react-icons/fc";
import { FcGraduationCap } from "react-icons/fc";
import { FcFinePrint } from "react-icons/fc";
import { FcIdea } from "react-icons/fc";
import { FcStart } from "react-icons/fc";

const Application = () => {

    const Data = [
        {
            id: 1,
            icon: FcStart,
            title: "Two Way Live Sessions",
            list: [
                "First time in India, Physical classes like",
                "Experience from comfort of Home.",
                "Two way live interactive sessions. Clear",
                "your doubt on Video session"
            ]
        },
        {
            id: 2,
            icon: FcGraduationCap,
            title: "Live Scheduled Test",
            list: [
                "Attempt NTA style Scheduled live Test",
                "Live discussion with Our faculty"
            ]
        },
        {
            id: 3,
            icon: FcFinePrint,
            title: "Chapterwise Practice Test",
            list: [
                "Attemt chapterwise practice tests from",
                "your phone. Check  Result, Solution ,",
                "Performance Analysis .Watch Video",
                "solutions."
            ]
        },
        {
            id: 4,
            icon: FcIdea,
            title: "Study Material",
            list: [
                "Handwritten Topper's Class Notes",
                "from our classes. Available in easy to",
                "read ebook format ",
            ]
        },
        {
            id: 5,
            icon: FcCollaboration,
            title: "Doubt Clarification on Chat",
            list: [
                "Doubt clarification via APP Chat",
                "Also avalable on WhatsApp and",
                "Telegram",
            ]
        },
    ]
    return (
        <>
            <h1 className="lg:mx-20 mx-6 font-bold sm:text-2xl text-xl md:text-3xl mt-2"> NEET Sarthi Mobile App
            </h1>
            <section className="w-full px-6 py-10 md:px-10 lg:px-20  flex flex-col-reverse md:flex-row">
                <div className="p-2 w-[100%]  flex flex-col gap-4">
                    {Data.map((item) => (
                        <div key={item.id} className="flex flex-row py-2 px-6 justify-center gap-20">
                            <div className="flex justify-center items-center">
                                <item.icon size={60} color='#FF6161' />
                            </div>
                            <div className="">
                                <h2 className='text-black font-bold text-xl'>{item.title}</h2>
                                <div className='text-para text-sm py-2 '>
                                    <ul>
                                        {item?.list.map((e) => (
                                            <li key={e}>{e}</li>

                                        ))}
                                    </ul>


                                </div>
                            </div>
                        </div>

                    ))}

                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                </div>
                <div className="p-2 w-[100%]">
                    <Image
                        src={App}
                        alt="Application Banner"
                    />
                </div>
            </section>
        </>
    )
}

export default Application