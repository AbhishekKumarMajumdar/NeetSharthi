import Image from 'next/image'
import React from 'react'
import ntse from "@/Images/Banner/NTSE.png"
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
                    <div className='text-white py-6 px-6 md:px-12 text-left mt-0 md:mt-12'>
                        <ul className='flex flex-col gap-4 md:gap-10'>
                            <li>- A National level scholarship program in India to identify and recognize students with high intellect and academic talent.
                            </li>
                            <li>- One of the most prestigious examinations of India.
                            </li>
                            <li>- It provides scholarship to select students from 10th till post graduation level.
                            </li>
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