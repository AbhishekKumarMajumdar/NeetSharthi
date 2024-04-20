import Image from 'next/image'
import React from 'react'
import Nse from "@/Images/Banner/Paper.png"
import Download from '@/components/Download'
const page = () => {

    const Data = [
        {
            name: "Animal Kingdom - Zoology",
            para: "DPP with Solution ",
            color: "#F2BF5E",
            pdfSrc: "/Doc/Neet.pdf",
        },
        {
            name: "Mole Concepts - Physical Chemistry",
            para: "DPP with Solution ",
            color: "#C76C3C",
            pdfSrc: Nse,
        },
        {
            name: "Periodic Table - Inorganic Chemistry",
            para: "DPP with Solution ",
            color: "#FF6161",
            pdfSrc: Nse,
        },
        {
            name: "Ray Optics - Physics",
            para: "DPP with Solution ",
            color: "#536EB7",
            pdfSrc: Nse,
        },
        {
            name: "The Living World - Botany",
            para: "DPP with Solution ",
            color: "#536EB7",
            pdfSrc: Nse,
        },
        {
            name: "Quadratic Equation - Mathematics",
            para: "DPP with Solution ",
            color: "#B08484",
            pdfSrc: Nse,
        },
    ]
    const DataSecond = [
        {
            name: "NEET 2021",
            para: "Question Paper and Solution",
            color: "#F2BF5E",
            pdfSrc: "/Doc/Neet.pdf",
        },
        {
            name: "NEET 2020",
            para: "Question Paper and Solution",
            color: "#C76C3C",
            pdfSrc: Nse,
        },
        {
            name: "NEET 2019",
            para: "Question Paper and Solution",
            color: "#FF6161",
            pdfSrc: Nse,
        },
        {
            name: "NEET 2018",
            para: "Question Paper and Solution",
            color: "#536EB7",
            pdfSrc: Nse,
        },
        {
            name: "NEET 2017",
            para: "Question Paper and Solution",
            color: "#536EB7",
            pdfSrc: Nse,
        },
        {
            name: "NEET 2016",
            para: "Question Paper and Solution",
            color: "#B08484",
            pdfSrc: Nse,
        },
    ]
    return (
        <>
            <section className="w-[100vw] h-[150px] md:h-[342px]">
                <Image
                    src={Nse}
                    alt="Header Image"
                    className='w-[100%] h-[100%]'
                    width={1280} height={720} objectFit="cover"
                />

            </section>
            <section className="w-full py-4  flex flex-col justify-center items-center px-6  md:px-10 lg:px-20 bg-[#fff]">

                <div className="lg:w-[80%] w-full h-auto lg:h-auto  rounded-xl flex flex-col   items-center bg-[#151F63]">
                    <div className='text-white py-4 px-6 md:px-12 text-left mt-0 md:mt-12'>
                        NEET SARTHI does not only prepare students for the National Eligibility Cum Entrance Test but also understands how anxious and curious they are to know as to how they have performed in their exam. The expert faculty members at the institute thus solve the NEET question paper on the same day as the National Entrance Cum Eligibility Test is held. The solved paper is uploaded on the website within hours and is available for free access.​The solved question paper is equally beneficial for the students who aim to sit for the National Entrance Cum Eligibility Test the year after. It helps them understand the difficulty level as well as the pattern of this competitive examination.​It is highly recommended to solve previous years’ papers so as to get an idea about how well-prepared you are and how much you still have to cover. Solving these papers within 3 hours time will also help you build speed which is of utmost importance in this exam.
                    </div>

                </div>
            </section>
            <section className='px-6 py-10 md:px-10 lg:px-20 '>
                <p className='text-para'>Click below to see previous  5 years Question Paper </p>
                <h1 className="font-bold sm:text-2xl text-xl md:text-3xl mt-2">  Answer key and solutions
                </h1>
            </section>

            <section className="flex flex-row justify-evenly gap-y-4 flex-wrap w-full h-auto px-6 md:px-64 py-4">

                {Data.map((e) => (
                    <Download key={e.name} data={e} />
                ))}

            </section>
            <section className='px-6 py-10 md:px-10 lg:px-20 '>
                <p className='text-para'>Click below to see Daily Practice papers(DPPs)</p>
                <h1 className="font-bold sm:text-2xl text-xl md:text-3xl mt-2">  Answer key and solutions
                </h1>
            </section>

            <section className="flex flex-row justify-evenly gap-y-4 flex-wrap w-full h-auto px-6 md:px-64 py-4">

                {DataSecond.map((e) => (
                    <Download key={e.name} data={e} />
                ))}

            </section>

        </>
    )
}
export default page