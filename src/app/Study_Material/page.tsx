import Header from '@/components/Header'
import React from 'react'

const page = () => {

    return (
        <>
            <Header />
            <section className="w-full py-4 lg:py-12 flex flex-col justify-center items-center px-6  md:px-10 lg:px-20 bg-[#fff]">
                <div className="lg:w-[80%] w-full h-auto lg:h-[75vh] py-4 flex flex-col justify-center items-center bg-[#151F63]">
                    <h1 className="text-center font-bold text-xl sm:text-2xl md:text-3xl w-full py-6 text-[#fff] leading-[40px] md:leading-[65px]">
                        How can you buy it?
                    </h1>
                    <p className='px-12 pb-10 text-center text-white'>
                        You can but it from NEET SARTHI website or NEET SARTHI APP or by <br /> directly paying in Company Account.<br />
                        Company Account Details:-<br /><br />
                        Send following details on Neet Sarthi student care No. +91-8090908042  <br /><br />
                        Your Name & Father Name<br />
                        Residential address with PIN Code<br />
                        Contact person's number<br />
                        Package you want to buy (NEET or JEE)<br />
                        Transaction ID or screen shot of payment<br />
                        Sarthee NEET Guru Academy LLP <br />
                        HDFC Acc. No.- 59201010122020<br />
                        IFSC Code :- HDFC0001846<br /><br />
                        You will receive study modules within 15 days of payment through Courier/Registered post.                    </p>


                    <button className="rounded-lg px-4 mb-12 mt- text-center py-2 border-2 border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-blue-100 duration-300">Buy</button>
                </div>


            </section>
        </>
    )
}

export default page