"use client"
import React, { useState } from 'react'
const Faq = () => {
    const [faq1, setfaq1] = useState(false);
    const [faq2, setfaq2] = useState(false);
    const [faq3, setfaq3] = useState(false);
    const [faq4, setfaq4] = useState(false);

    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-left">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do</p>
                </div>

                <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                    <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
                        <button onClick={() => setfaq1(!faq1)} type="button" className="flex items-center  justify-between w-full px-4 py-5 sm:p-6">
                            <span className="flex text-lg font-semibold text-black"> How to create an account? </span>

                            <svg className={`w-6 h-6 text-gray-400 ${faq1 ? " rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        <div className={`px-4 ${faq1 ? "block" : "hidden"}  pb-5 sm:px-6 sm:pb-6`}>
                            <p>Amet minim mollit non deserunt ullamco est sit <a href="#" title="" className="text-blue-600 transition-all duration-200 hover:underline">aliqua dolor</a> do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        </div>
                    </div>

                    <div className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
                        <button onClick={() => setfaq2(!faq2)} type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
                            <span className="flex text-lg font-semibold text-black"> How can I make payment using Paypal? </span>

                            <svg className={`w-6 h-6 text-gray-400 ${faq2 ? " rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        <div className={`px-4 ${faq2 ? "block" : "hidden"}  pb-5 sm:px-6 sm:pb-6`}>
                            <p>Amet minim mollit non deserunt ullamco est sit <a href="#" title="" className="text-blue-600 transition-all duration-200 hover:underline">aliqua dolor</a> do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        </div>
                    </div>
                    <div className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
                        <button onClick={() => setfaq3(!faq3)} type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
                            <span className="flex text-lg font-semibold text-black"> How can I make payment using Paypal? </span>

                            <svg className={`w-6 h-6 text-gray-400 ${faq3 ? " rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        <div className={`px-4 ${faq3 ? "block" : "hidden"}  pb-5 sm:px-6 sm:pb-6`}>
                            <p>Amet minim mollit non deserunt ullamco est sit <a href="#" title="" className="text-blue-600 transition-all duration-200 hover:underline">aliqua dolor</a> do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        </div>
                    </div>


                    <div className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
                        <button onClick={() => setfaq4(!faq4)} type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
                            <span className="flex text-lg font-semibold text-black"> How can I make payment using Paypal? </span>

                            <svg className={`w-6 h-6 text-gray-400 ${faq4 ? " rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        <div className={`px-4 ${faq4 ? "block" : "hidden"}  pb-5 sm:px-6 sm:pb-6`}>
                            <p>Amet minim mollit non deserunt ullamco est sit <a href="#" title="" className="text-blue-600 transition-all duration-200 hover:underline">aliqua dolor</a> do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        </div>
                    </div>


                </div>

            </div>
        </section>
    )
}

export default Faq