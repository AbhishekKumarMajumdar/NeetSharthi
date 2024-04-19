import Image from 'next/image'
import React from 'react'
import Nse from "@/Images/Banner/Nse.png"
import Video from '@/components/Video'
const page = () => {

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
            <section className="w-full py-4 lg:py-12 flex flex-col justify-center items-center px-6  md:px-10 lg:px-20 bg-[#fff]">

                <div className="lg:w-[80%] w-full h-auto lg:h-auto py-8 rounded-xl flex flex-col   items-center bg-[#151F63]">
                    <h1 className='text-2xl ml-4 md:ml-0 md:text-4xl text-white font-bold'>NSEJS(National Standard Examination in Junior Science)</h1>
                    <div className='text-white py-6 px-6 md:px-12 text-left mt-0 md:mt-12'>
                        <ul className='flex flex-col gap-4 md:gap-10'>
                            <li>In many Asian countries, including India, education is given a high priority and students are also encouraged to participate in various competitive examinations.</li>
                            <li>When one scores well in such exams, they are eligible for better opportunities. The Indian Talent Olympiad offers these examinations and they can be either on a national level or international level.</li>
                            <li>NSEJS is the National Standard Examination In Junior Science and as the name suggests, it is a science olympiad. It was conducted for the first time in the year 1987. The exam is one of the toughest national science examinations organized by the IAPT (Indian Association of Physics Teacher).</li>
                            <li>The examination is conducted in association with HBCSE (Homi Bhabha Centre for Science Education).</li>
                        </ul>


                    </div>
                    <button className="rounded-lg px-4 py-2 bg-[#fff] text-bold text-black hover:bg-blue-600 hover:text-blue-100 duration-300">Buy now</button>

                </div>
            </section>
            <Video />
        </>
    )
}

export default page