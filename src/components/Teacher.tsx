import Image from 'next/image'
import React from 'react'

const Teacher = () => {
    const data = [
        {
            subject: "Biology",
            link: "/",
            img: "https://via.placeholder.com/300x300"
        },
        {
            subject: "Physics",
            link: "/",
            img: "https://via.placeholder.com/300x300"
        },
        {
            subject: "Chemistry",
            link: "/",
            img: "https://via.placeholder.com/300x300"
        },
    ]
    return (
        <>
            <section className='px-6 py-10 md:px-10 lg:px-20 '>
                <p className='text-para'>key persons </p>
                <h1 className="font-bold sm:text-2xl text-xl md:text-3xl mt-2"> Free Demo For NEET/JEE (11 TO 12)
                </h1>
                <div className="flex-col md:flex-row flex flex-wrap px-8 md:px-8 lg:px-32 py-12 justify-evenly">

                    {data.map((e) => (
                        <div key={e.link} className="">
                            <div className="flex flex-col">
                                <div className="w-[20rem] overflow-hidden h-[20rem] bg-black rounded-xl">
                                    <Image
                                        src={e.img}
                                        alt='teacher image'
                                        width={512}
                                        height={512}
                                    />
                                </div>
                                <h1 className='py-2 text-xl font-bold'>{e.subject}</h1>
                            </div>
                        </div>

                    ))}
                </div>
            </section>
        </>
    )
}

export default Teacher