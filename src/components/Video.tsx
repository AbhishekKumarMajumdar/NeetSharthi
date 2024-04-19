import Image from 'next/image'
import React from 'react'

const Video = () => {
    const data = [
        {
            subject: "Biology",
            link: "/",
            src: "https://www.youtube.com/embed/-hNRLyXgHF4?si=izMtWx9Hl3y7YWcw"
        },
        {
            subject: "Physics",
            link: "/",
            src: "https://www.youtube.com/embed/-hNRLyXgHF4?si=izMtWx9Hl3y7YWcw"
        },
        {
            subject: "Chemistry",
            link: "/",
            src: "https://www.youtube.com/embed/-hNRLyXgHF4?si=izMtWx9Hl3y7YWcw"
        },
    ]
    return (
        <>
            <section className='px-6 py-10 md:px-10 lg:px-20 '>
                <p className='text-para'>Demo Videos </p>
                <h1 className="font-bold sm:text-2xl text-xl md:text-3xl mt-2"> FREE DEMO FOR NEET/JEE
                </h1>
                <div className="flex-col md:flex-row flex flex-wrap px-8 md:px-8 lg:px-6 py-12 justify-evenly">

                    {data.map((e) => (
                        <div key={e.link} className="">
                            <div className="flex flex-col">
                                <div className="w-[27rem] overflow-hidden h-[15rem] bg-black rounded-xl">
                                    <iframe width="100%" height="100%" src={e.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                                </div>
                                <h1 className='py-2 text-xl font-bold'>{e.subject}</h1>
                            </div>
                        </div>

                    ))}
                </div>
            </section>
        </>
    )
}

export default Video