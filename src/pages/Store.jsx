import React from "react";
import { Link } from "react-router-dom";

const Store = () => {
    const categories = [
        {
            name: "Chairs",
            description: "Stylish and comfortable seating for every space.",
            image: "/image 3.png",
            link: "/Chair",
        },
        {
            name: "Glassware",
            description: "Modern glassware for your impressive personality.",
            image: "/Rectangle 10.png",
            link: "/Glassbox",
        },
        {
            name: "Bedsheets",
            description: "Soft and cozy bedsheets for a restful sleep.",
            image: "/curlbedsheet.jpg",
            link: "/Curlon",
        },
        {
            name: "Decor",
            description: "Add life to your space with our latest decor collection.",
            image: "/curlbed.jpg",
            link: "/Curlon",
        },
        {
            name: "Kitchenware",
            description: "Essentials for a modern and functional kitchen.",
            image: "/prestige6.jpg",
            link: "/Prestige",
        },
        {
            name: "Refrigerators",
            description: "Keep your food fresh with our energy-efficient refrigerators.",
            image: "/ref2.png",
            link: "/Godrej",
        },
    ];

    return (
        <div className="pt-20 pb-10 bg-gray-50 min-h-screen p-6">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-gray-800">Our Store</h1>
                <p className="text-gray-600 mt-2">
                    Explore our exclusive range of furniture and home decor products.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-6 md:px-12">
                {categories.map((cat, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                    >
                        <img
                            src={cat.image}
                            alt={cat.name}
                            className="w-full h-60"
                        />
                        <div className="p-5 flex flex-col flex-1 justify-between h-48">
                            <div>
                                <h2 className="text-2xl font-semibold text-gray-700">
                                    {cat.name}
                                </h2>
                                <p className="text-gray-500 mt-2">{cat.description}</p>
                            </div>
                            <div >
                                <Link
                                    to={cat.link}
                                    className="inline-block mt-4 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition-all"
                                >
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Store;
