import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function FeaturedProducts() {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [midOpen, setMidOpen] = useState(false);
    const handleMidClick = () => {
        setMidOpen(!midOpen);
    }
    const scrolRef2 = useRef(null);
    const [activeIndex2, setActiveIndex2] = useState(0);
    const handleScroll2 = () => {
        const container = scrolRef2.current;
        const scrollLeft = container.scrollLeft;
        const itemWidth = container.firstChild.offsetWidth + 16;
        const index = Math.round(scrollLeft / itemWidth);

        setActiveIndex2(index);
        if (index >= 5) {

            setActiveIndex2(index - 5);
        }
    }
    useEffect(() => {
        const fetchFeaturedProducts = async () => {
            try {
                const response = await axios.get("http://localhost:5000/featured");
                setFeaturedProducts(response.data);
            }
            catch (err) {
                console.error("Error fetching featured products:", err);
            }
        };
        fetchFeaturedProducts();
    }, []);

    const fourItems = featuredProducts.slice(0, 4);

    const lastFourItems = featuredProducts.slice(-4);

    return (
        <>
            <h1 className="mt-12 ml-6 md:ml-12">Also like</h1>
            <div className="overflow-x-auto hidden md:flex md:flex-row md:justify-center md:items-center md:mx-5 gap-4 mb-12">
                <div className={`${midOpen ? "hidden" : "flex"} flex-row justify-center items-center mt-[24px] mx-5 gap-4`}>
                    <img
                        src="/left_arrow.png"
                        className="w-[45px] h-[32px] cursor-pointer hover:scale-[1.20]"
                        onClick={handleMidClick}
                        alt='arrow'
                    />
                    {
                        lastFourItems.map((item) => (
                            <div className="flex flex-col mb-4" key={item._id} >
                                <img
                                    src={item.image}
                                    className="md:w-[240px] md:h-[174px] lg:h-[247px] xl:w-[306px] xl:h-[365px]"
                                    alt='any'
                                />
                                <div className="h-[70px] lg:h-[90px] flex flex-col justify-between lg:gap-3 mt-3">
                                    <Link to={`/${item.category}`} className="!font-bold !text-sm lg:!text-lg hover:scale-[1.05]">
                                        {item.name}
                                    </Link>
                                    <p className="!font-bold !text-lg lg:!text-[24px]">${item.price}</p>
                                </div>
                            </div>
                        ))
                    }
                    <img
                        src="/right_arrow.png"
                        className="w-[45px] h-[32px] cursor-pointer hover:scale-[1.2]"
                        onClick={handleMidClick}
                        alt='arrow'
                    />
                </div>
                <div className={`${midOpen ? "flex" : "hidden"} flex-row justify-center items-center mt-[24px] mx-5 gap-4`}>
                    <img
                        src="/left_arrow.png"
                        className="w-[45px] h-[32px] cursor-pointer hover:scale-[1.20]"
                        onClick={handleMidClick}
                        alt='arrow'
                    />
                    {
                        fourItems.map((item) => (
                            <div className="flex flex-col mb-4" key={item._id} >
                                <img
                                    src={item.image}
                                    className="md:w-[240px] md:h-[174px] lg:h-[247px] xl:w-[306px] xl:h-[365px]"
                                    alt='any'
                                />
                                <div className="h-[70px] lg:h-[90px] flex flex-col justify-between lg:gap-3 mt-3">
                                    <Link to={`/${item.category}`} className="!font-bold !text-sm lg:!text-lg hover:scale-[1.05]">
                                        {item.name}
                                    </Link>
                                    <p className="!font-bold !text-lg lg:!text-[24px]">${item.price}</p>
                                </div>
                            </div>
                        ))
                    }
                    <img
                        src="/right_arrow.png"
                        className="w-[45px] h-[32px] cursor-pointer hover:scale-[1.2]"
                        onClick={handleMidClick}
                        alt='arrow'
                    />
                </div>
            </div>

            <div
                onScroll={handleScroll2}
                ref={scrolRef2}
                id="scroll"
                className="h-70 w-full grid grid-rows-1 grid-flow-col gap-4 mt-6 pr-6 pl-6 overflow-x-auto overflow-y-hidden  md:hidden"
            >
                {featuredProducts.map((item) => (
                    <div className="elem flex flex-col h-[260px] w-[188px] relative" key={item._id}>
                        <img src={item.image} className="h-[260px] w-[188px]" alt='err' />
                        <div className="h-18 w-full p-2.5 bg-[#b7b79a60] absolute bottom-0">
                            <Link to={`/${item.category}`} className="!font-bold !text-[#00000085] inline-block hover:scale-[1.05] transition-transform duration-300">
                                {item.name}
                            </Link>
                            <h1 className="!text-[#00000085]">${item.price}</h1>
                        </div>
                    </div>
                ))}
            </div>
            <div className="justify-center my-4 h-2 flex md:hidden">
                {[...Array(5)].map((_, i) => (
                    <span
                        key={i}
                        className={` h-1.5 w-1.5 ${i === activeIndex2 ? "bg-black" : "bg-gray-400"} border-black rounded-full mr-1`}
                    />
                ))}
            </div>
        </>
    )
}