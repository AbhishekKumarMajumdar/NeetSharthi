import Image from 'next/image'
import React from 'react'
import ntse from "@/Images/Banner/SamagraBanner.png"
import Video from '@/components/Video'
const page = () => {

    return (
        <>
            <section className="w-[100vw] h-[200px] md:h-[90vh]">
                <Image
                    src={ntse}
                    alt="Header Image"
                    className='w-[100%] h-[100%]'
                    width={1280} height={720} objectFit="cover"
                />

            </section>
            <section className="w-full py-4 lg:py-12 flex flex-col justify-center items-center px-6  md:px-10 lg:px-20 bg-[#fff]">

                <div className="lg:w-[80%] w-full h-auto lg:h-auto py-8 rounded-xl flex flex-col   items-center bg-[#151F63]">
                    <h1 className='text-2xl ml-4 md:ml-0 md:text-4xl text-white font-bold'>NTSE(National Talent Search Examination)</h1>
                    <div className='text-white py-0 pb-6 px-6 md:px-12 text-left mt-0 md:mt-12'>
                        Are you preparing for the NEET or JEE exams? Are you looking for a reliable recorded lecture course to help with your preparation? If yes, then we have just the perfect solution for you!We are offering an exclusive Recorded Lecture Course specifically designed to help students prepare and ace their NEET/JEE exams. The course includes 10000+ quality questions prepared by 20+ top Kota faculties along with DPPs, chapter-wise practice tests with solutions and PYQ	&#39;	s. We also provide performance analysis reports which will help identify weak areas in order to focus more on them during preparation. The best part is that all of these contents can be accessed through our mobile app as well as website so that it becomes easier for students to access them from anywhere at any time they want without having any restrictions or limitations whatsoever. Moreover, if there is anything that needs clarification or further explanation then doubt clarification can be done via App chat, Telegram and Live session too!And not only this but every week we offer live tests followed by live doubt sessions where all queries will be answered promptly ensuring complete satisfaction of our students who trust us wholeheartedly when it comes down to exam preparations! So what are you waiting for? Get enrolled into this amazing program today itself and start working towards acing your NEET/JEE examinations successfully with ease & comfort while enjoying the perks of being associated with us throughout this journey called life!!.
                    </div>
                    <button className="rounded-lg px-4 py-2 bg-[#fff] text-bold text-black hover:bg-blue-600 hover:text-blue-100 duration-300">Buy now</button>

                </div>
            </section>
        </>
    )
}

export default page