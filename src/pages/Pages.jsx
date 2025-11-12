import React from 'react'
import { Link } from 'react-router-dom';

export default function Pages() {
    return (
        <>
            <header className="text-[#323334] py-5 text-center text-3xl font-bold">
                📚 Customer Info &amp; Policies
            </header>
            <main className="px-4 sm:px-6 lg:px-20 py-10 max-w-5xl mx-auto space-y-10">
                <section className="border-l-4 pl-4">
                    <h2 className="text-xl font-bold mb-1">📃 Terms & Conditions</h2>
                    <p className="!text-base">
                        By using MyShop, you agree to our terms of service, including fair
                        usage, return eligibility, and data handling. Please read all clauses
                        before placing an order.
                    </p>
                </section>
                <section className="border-l-4 pl-4">
                    <h2 className="text-xl font-bold mb-1">🔐 Privacy Policy</h2>
                    <p className="!text-base ">
                        Your data is protected using the latest encryption protocols. We never
                        share or sell your information to third-party advertisers without your
                        consent.
                    </p>
                </section>
                <section className="border-l-4 pl-4">
                    <h2 className="text-xl font-bold mb-1">🔄 Return &amp; Refund Policy</h2>
                    <p className="!text-base ">
                        Returns are accepted within 7 days of delivery. Refunds are processed
                        within 3-5 business days after successful inspection. Products must be
                        unused and in original packaging.
                    </p>
                </section>
                <section className="border-l-4 pl-4">
                    <h2 className="text-xl font-bold mb-1">🚚 Shipping Policy</h2>
                    <p className="!text-base ">
                        Orders are dispatched within 24-48 hours. Delivery typically takes 2–5
                        working days depending on location. Real-time tracking is available for
                        all shipments.
                    </p>
                </section>
                <section className="text-center mt-10">
                    <Link
                        to='/Contactus'
                        className="inline-block cursor-pointer !text-white px-6 py-3 !bg-[#323334]"
                    >
                        Contact Support
                    </Link>
                </section>
            </main>
        </>

    )
}
