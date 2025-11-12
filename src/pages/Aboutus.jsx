import React from 'react'
import { Link } from 'react-router-dom';
export default function Aboutus() {
    return (
        <>
        <header className="text-[#323334] py-6 text-center text-xl sm:text-2xl font-bold">About US
        </header>
            <main className="px-4 sm:px-6 lg:px-20 py-10 space-y-12 max-w-5xl mx-auto">
                <section className="space-y-4">
                    <h1 className="sm:text-2xl text-xl font-semibold">🛍 Our Story</h1>
                    <p className="!font-normal text-sm sm:!text-base">
                        Founded in 2025, Urban Outfitters was born with a simple goal: to make
                        online shopping seamless, affordable, and accessible to every corner of
                        India. What began as a small start-up is now a trusted shopping platform
                        with thousands of happy customers.
                    </p>
                </section>
                <section className="space-y-4">
                    <h1 className="sm:text-2xl text-xl font-semibold">🚀 Our Mission</h1>
                    <p className="!font-normal text-sm sm:!text-base">
                        We aim to empower people with fast, transparent, and reliable online
                        shopping. From urban cities to remote villages, we’re bridging gaps
                        through technology and customer-first thinking.
                    </p>
                </section>
                <section className="space-y-4">
                    <h1 className="sm:text-2xl text-xl font-semibold">💡 What Makes Us Different?</h1>
                    <ul className="list-disc ml-5 space-y-2 ">
                        <li className='!font-normal text-sm sm:!text-base'>Same-day and next-day delivery in 100+ cities</li>
                        <li className='!font-normal text-sm sm:!text-base'>Affordable prices with monthly deals</li>
                        <li className='!font-normal text-sm sm:!text-base'>Easy returns and secure payments</li>
                        <li className='!font-normal text-sm sm:!text-base'>Customer-first support team</li>
                    </ul>
                </section>
                <section className="space-y-4">
                    <h1 className="sm:text-2xl text-xl font-semibold">🤝 Meet the Team</h1>
                    <p className="!font-normal text-sm sm:!text-base">
                        Our team is made up of passionate developers, designers, customer service
                        agents, and logistic experts — all working together to deliver the best
                        shopping experience.
                    </p>
                    <Link
                        to='/'
                        className="inline-block bg-[#323334] !text-white px-5 py-2 rounded"
                    >
                        Meet the Team
                    </Link>
                </section>
            </main>

        </>
    )
}
