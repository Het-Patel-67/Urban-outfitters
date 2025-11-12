import React from 'react'
import {Link} from 'react-router-dom'
export default function Contactus() {
    return (
        <>
            <>
                <header className=" text-[#323334] text-center py-6 px-6">
                    <h1 className="text-xl sm:text-2xl font-bold">📞 Contact Us</h1>
                    <p className="text-sm mt-1">
                        We’d love to hear from you! Reach out anytime.
                    </p>
                </header>
                {/* Main Section */}
                <main className="px-4 sm:px-6 lg:px-20 py-12 space-y-10 max-w-6xl mx-auto">
                    {/* Contact Information */}
                    <section className="bg-white p-6 rounded-lg shadow grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h2 className="!text-2xl !font-semibold !text-blue-800">
                                Get In Touch
                            </h2>
                            <p className=''>
                                Feel free to visit us, email, or call. We’re available Monday to
                                Saturday, 9 AM to 6 PM.
                            </p>
                            <ul className="space-y-2">
                                <li>
                                    <strong>📍 Address:</strong> S.G Highway, Ahmedabad- 380059
                                </li>
                                <li>
                                    <strong>📧 Email:</strong>{" "}
                                    <Link
                                        href="mailto:contact@urbanooutfitters.com"
                                        className="!text-blue-600 underline"
                                    >
                                        contact@urbanooutfitters.com
                                    </Link>
                                </li>
                                <li>
                                    <strong>📞 Call:</strong>{" "}
                                    <Link href="tel:+6324589451" className="!text-blue-600 underline">
                                        +91 1212173314
                                    </Link>
                                </li>
                            </ul>
                            <p className="!text-sm !text-gray-600">
                                For bulk orders or partnership queries, please use the contact form.
                            </p>
                        </div>
                        {/* Contact Form */}
                        <div>
                            <form className="space-y-4">
                                <div>
                                    <label className="block font-medium">Your Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full p-2 border rounded mt-1"
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="you@example.com"
                                        className="w-full p-2 border rounded mt-1"
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium">Message</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Type your message..."
                                        className="w-full p-2 border rounded mt-1"
                                        defaultValue={""}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="!bg-blue-700 text-white !px-4 !py-2 rounded hover:bg-blue-600 transition duration-200"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </section>
                    <section className="bg-white p-6 rounded-lg shadow">
                        <h2 className="!text-xl !font-semibold mb-4 !text-blue-800">
                            📍 Our Location
                        </h2>
                        <div className="aspect-w-16 aspect-h-9 w-full">
                            <iframe
                                title='Company location'
                                className="w-full h-64 sm:h-96 border rounded"
                                src="https://www.google.com/maps/place/Thaltej,+Ahmedabad,+Gujarat/@23.0584712,72.4639199,13z/data=!3m1!4b1!4m6!3m5!1s0x395e9ca1402b2107:0xc6b7cfd374cb4bcb!8m2!3d23.0504131!4d72.4990891!16zL20vMGY2Zmd3?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </section>
                </main>
            </>

        </>
    )
}
