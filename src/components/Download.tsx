"use client"
import React from 'react'
import DownloadButton from './DownloadButton'
const Download = ({ data }: any) => {
    console.log(data.color)

    return (
        <>
            <section className={`flex flex-col justify-center items-center gap-2 max-w-[30rem] py-4 px-6  `} style={{ background: data.color }}>
                <h2 className='text-white text-lg md:text-2xl'>{data.name}</h2>
                <p className='text-white'>{data.para}</p>
                <DownloadButton filename={data.pdfSrc} />
            </section>
        </>
    )
}

export default Download