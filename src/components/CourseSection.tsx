import Image from 'next/image'
import React from 'react'

const CourseSection = ({ data }: any) => {
    const { title, classes, list, buyLink, demoLink, img, direction } = data;

    console.log(title)
    return (
        <>
            <section className="w-full px-6 md:px-10 lg:py-0 md:py-6 lg:px-48 h-auto md:h-[450px] lg:h-[400px] flex flex-col md:flex-row  justify-between">
                <div className={`w-[100%] p-6  h-[100%] ${direction ? "bg-[#e8e3f8] " : "bg-[#fff] "} flex flex-col  `}>
                    <h1 className='text-center  text-[#151F63] md:text-xl lg:text-2xl font-bold'>{title}</h1>
                    <p className='text-center text-red-500 font-bold text-md'>{classes}</p>
                    <ul className='text-left  text-[#151F63] font-semibold '>
                        {list.map((a: any) => (
                            <li key={a} className='md:mt-0 mt-2 lg:mt-2'>{a}</li>

                        ))}

                    </ul>
                </div>
                <div className={`w-[100%] h-[100%]  ${direction ? " bg-[#fff] " : "bg-[#e8e3f8]"}  flex flex-col justify-center items-center`}>
                    <div className="md:w-[60%] md:h-[50%] w-[100%] my-6">
                        <Image
                            src={img.src}
                            alt="Header Image"
                            className='w-[100%] h-[100%]'
                            width={1280} height={720} objectFit="cover"
                        />
                    </div>
                    {/* <div className="flex flex-row gap-32 mt-6">
                        <button className="rounded-lg px-4 py-2 border-2 border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-blue-100 duration-300">FREE DEMO</button>
                        <button className="rounded-lg px-4 py-2 border-2 border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-blue-100 duration-300">BUY NOW</button>
                    </div> */}
                </div>
            </section>
        </>
    )
}

export default CourseSection