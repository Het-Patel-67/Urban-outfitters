import React from 'react'
import { Link } from 'react-router-dom';

export default function News() {
    return (
        <>
            <>
                <header className="text-[#323334] py-5 text-center text-xl sm:text-2xl mt-5 font-bold ">
                    📰 News & Updates
                </header>
                <main className="px-4 sm:px-6 lg:px-20 py-10 space-y-10">
                    <section className="bg-white p-6 rounded shadow max-w-4xl mx-auto">
                        <h2 className="!text-2xl !font-semibold mb-2">
                            🔥 Mega Festive Sale Starts Soon!
                        </h2>
                        <p className="!text-sm !text-gray-500">Published: July 1, 2025</p>
                        <p className="mt-4 !font-normal">
                            We're offering up to <strong>60% off</strong> on clothing, electronics,
                            and more this festive season. Sale begins from <strong>July 10</strong>.
                            Limited time only!
                        </p>
                        <Link
                            to="/News"
                            className="inline-block mt-4 bg-[#323334] !text-white px-5 py-2 rounded cursor-pointer"
                        >
                            View Offers
                        </Link>
                    </section>
                    <section className="bg-white p-6 rounded shadow max-w-4xl mx-auto">
                        <h2 className="!text-2xl !font-semibold mb-2">
                            📦 New Same-Day Delivery Zones
                        </h2>
                        <p className="!text-sm !text-gray-500">Published: June 28, 2025</p>
                        <p className="mt-4 !font-normal">
                            We now offer <strong>same-day delivery</strong> in 50+ cities including
                            Mumbai, Bengaluru, and Hyderabad.
                        </p>
                        <Link
                            to="/News"
                            className="inline-block mt-4 bg-[#323334] !text-white px-5 py-2 rounded cursor-pointer"
                        >
                            Check Availability
                        </Link>
                    </section>
                    <section className="bg-white p-6 rounded shadow max-w-4xl mx-auto">
                        <h2 className="!text-2xl !font-semibold mb-2">🧑‍💻 We’re Hiring!</h2>
                        <p className="!text-sm !text-gray-500">Published: June 20, 2025</p>
                        <p className="mt-4 !font-normal">
                            Join our growing team of developers, designers, and marketers. We’re
                            hiring across multiple roles in our tech and operations departments.
                        </p>
                        <Link
                            to="/News"
                            className="inline-block mt-4 bg-[#323334] !text-white px-5 py-2 rounded cursor-pointer"
                        >
                            Apply Now
                        </Link>
                    </section>
                </main>
            </>

        </>
    )
}
