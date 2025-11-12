import React, { useState, useEffect, useRef, useContext } from 'react'
import { Link } from "react-router-dom";
import { ProductContext } from '../App';

export default function Home() {
    const { products } = useContext(ProductContext);

    const [currentIndex, setCurrentIndex] = useState(0);
    const scrolRef2 = useRef(null);
    const scrolRef = useRef(null);
    const [activeIndex2, setActiveIndex2] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const handleScroll = () => {
        const container = scrolRef.current;
        const scrollLeft = container.scrollLeft;
        const itemWidth = container.firstChild.offsetWidth + 16;
        const index = Math.round(scrollLeft / itemWidth);

        setActiveIndex(index);
        if (index >= 5) {

            setActiveIndex2(index - 5);
        }
    }

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

    const slides = [
        {
            img: "/Group 178.png",
            title: "HOT DEALS THIS WEEK",
            subtitle1: "SALE UP 50%",
            subtitle2: "MODERN FURNITURE",
            link: "/Chair",
            left: "left-[60px]",
            md: "md:left-[120px]",
            lg: "lg:left-[200px]",
            object: "md:object-cover"
        },
        {
            img: "/0d61078f-fa98-4e6b-b0b4-4ea023d1e72e_removalai_preview.png",
            title: "HOT DEALS THIS WEEK",
            subtitle1: "SALE UP 50%",
            subtitle2: "ON CURTAINS",
            link: "/Curtains",
            bg: "bg-[#e3e8f1]",
            object: "object-contain",
            left: "left-[65px]",
            md: "md:left-[120px]",
            lg: "lg:left-[260px]",
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length])

    const [load, setLoad] = useState(false);
    const slide = slides[currentIndex];
    const sixProducts = products.slice(0, 6);
    const nineProducts = products.slice(8, 14);
    const threeProducts = products.slice(15, 17);
    const loadProducts = () => {
        setLoad(!load);
    }
    return (
        <>
            <div className="h-auto bg-white m-0 p-0 overflow-x-hidden">
                <div className="hidden md:flex flex-row items-center justify-around mt-8 mb-2">
                    <div className="flex flex-row items-baseline">
                        < img src="/Vector (1).png" alt="err" />
                        <p className="ml-4 !text-xs !font-bold !text-[#00000080]">FREE SHIPPING</p>
                    </div>
                    <div className="flex flex-row items-baseline">
                        < img src="/Vector (2).png" alt="err" />
                        <p className="ml-4 !text-xs !font-bold !text-[#00000080]">
                            100% MONEY BACK
                        </p>
                    </div>
                    <div className="flex flex-row items-baseline">
                        < img src="/Vector (3).png" alt="err" />
                        <p className="ml-4 !text-xs !font-bold !text-[#00000080]">SUPPORT 24/7</p>
                    </div>
                </div>

                <div id="carousel" className="h-72 md:h-[390px] xl:h-[484px]">
                    <div className=" slide  overflow-hidden top-0 left-0 h-72 md:h-[390px] xl:h-[484px]">
                        <div className={`flex flex-col h-72 justify-center items-center md:h-[390px] xl:h-[484px] relative ${slide.bg} `}>
                            < img alt=""
                                className={`w-screen h-72 z-0 md:h-[390px] xl:h-[484px] absolute md:w-screen ${slide.object}`}
                                src={slide.img}
                            />
                            <div className={`${slide.left} ${slide.md} ${slide.lg} relative z-10`}>
                                <h2 className="!font-medium !text-sm lg:!text-[22px] md:!font-bold mb-5">
                                    {slide.title}
                                </h2>
                                <h1 className="!text-[rgb(168,106,61)]  sm:!text-[22px] lg:!text-[48px]">
                                    {slide.subtitle1}
                                </h1>
                                <h1 className=" mb-5 sm:!text-[22px] !text-[#A86A3D] lg:!text-[48px]">
                                    {slide.subtitle2}
                                </h1>
                                <button className="group items-center cursor-pointer border-[1px] border-black hover:bg-[#323334]  !px-7">
                                    <Link
                                        to={slide.link}
                                        className="group-hover:!text-white !text-sm !font-bold"
                                    >
                                        VIEW NOW
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hidden sm:grid grid-flow-col grid-cols-2 gap-2 ml-12 mr-10">
                    <div className="hidden sm:flex flex-row justify-start items-center h-[368px] mt-12 bg-[#fafafa]">
                        <div>
                            < img alt="" className="h-[342px] w-[342px] ml-0" src="/image 3.png" />
                        </div>
                        <div>
                            <h1>INY VINTAGE CHAIR</h1>
                            <button className="group items-center cursor-pointer hover:bg-[#323334]  border-[1px] border-black mt-8 mr-4">
                                <Link
                                    to='/Chair'
                                    className="text-nowrap group-hover:!text-white !font-bold"
                                >
                                    VIEW DETAILS
                                </Link>
                            </button>
                        </div>
                    </div>

                    <div className="hidden sm:flex flex-row justify-start items-center h-[368px] mt-12 bg-[#eae9e7] ">
                        <div>
                            < img alt="" className="h-[368px] w-[244px] ml-0" src="/image 4.png" />
                        </div>
                        <div className="ml-4">
                            <h1>
                                LARGE TERACOTA <br />
                                VASE
                            </h1>
                            <button className="group items-center cursor-pointer hover:bg-[#323334]  border-[1px] border-black mt-8 mr-4">
                                <Link
                                    to='/Vase'
                                    className="text-nowrap group-hover:!text-white !font-bold"
                                >
                                    VIEW DETAILS
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="hidden item-container md:grid md:grid-cols-4 sm:grid sm:grid-cols-2 sm:gap-3 md:gap-3 ml-12 mr-10 mb-12 h-auto mt-10 items-end">
                    <div className="h-[564px] relative group ">
                        < img
                            alt="what"
                            className="h-[564px] object-fill"
                            src="/duck-cotton-printed-curtains-pack-of-2-and-100percent-cotton-trance-home-linen-13.webp"
                        />
                        <div className="hoverContainer p-5 hidden  group-hover:flex group-hover:flex-col absolute top-0 group-hover:justify-center group-hover:items-start group-hover:gap-4 h-[564px] bg-[#00000057] text-white w-full">
                            <h1 className=" !text-white">DECOR</h1>
                            <p className=" !font-bold !text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sed at
                                beatae ab, nihil eos sunt numquam, consectetur earum!
                            </p>
                            <button className="cursor-pointer !px-7 hover:bg-black border-white border-[1px]">
                                <Link to='/Curlon' className="!font-bold !text-white">
                                    VIEW ALL
                                </Link>
                            </button>
                        </div>
                    </div>
                    {sixProducts.map((item) => (
                        <div className="h-[564px] flex flex-col gap-3 mt-4 items-start" key={item._id}>
                            <img alt="err" className="h-[420px]" src={item.image} />
                            <h2>
                                <Link to={`/${item.category}`} className="!text-lg !font-bold inline-block hover:scale-[1.05] transition-transform duration-300">
                                    {item.name}
                                </Link>
                            </h2>
                            <div className="flex items-center">
                                <svg
                                    className="w-4 h-4 dark:text-white stroke-yellow-600 ms-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 dark:text-white stroke-yellow-600 ms-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 dark:text-white stroke-yellow-600 ms-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                    className="w-4 h-4  dark:text-white stroke-yellow-600 ms-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 ms-1 dark:text-white stroke-gray-600"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            </div>
                            <h2>${item.price}</h2>
                        </div>
                    ))}

                    <div className="h-[564px] relative group">
                        < img alt="" id="deco" className="h-[564px]" src="/bag.jpg" />
                        <div className="hoverContainer p-5 hidden  group-hover:flex group-hover:flex-col absolute top-0 group-hover:justify-center group-hover:items-start group-hover:gap-4 h-[564px] bg-[#00000057] text-white w-full">
                            <h1 className=" !text-white">BOHO CHICK</h1>
                            <p className=" !font-bold !text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sed at
                                beatae ab, nihil eos sunt numquam, consectetur earum!
                            </p>
                            <button className="cursor-pointer !px-7 hover:bg-black border-white border-[1px]">
                                <Link to='/Box' className="!font-bold !text-white inline-block hover:scale-[1.05] transition-transform duration-300">
                                    VIEW ALL
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <h1 className="!text-[24px] md:hidden mt-12 ml-[15px] mb-6">HOT DEALS</h1>
                <div
                    onScroll={handleScroll2}
                    ref={scrolRef2}
                    id="scroll"
                    className="h-70 w-full grid grid-rows-1 grid-flow-col gap-4 mt-6 pr-6 pl-6 overflow-x-auto overflow-y-hidden  sm:hidden md:hidden"
                >
                    {sixProducts.map((item) => (
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
                <div className="justify-center my-4 h-2 flex sm:hidden md:hidden">
                    {[...Array(5)].map((_, i) => (
                        <span
                            key={i}
                            className={` h-1.5 w-1.5 ${i === activeIndex2 ? "bg-black" : "bg-gray-400"} border-black rounded-full mr-1`}
                        />
                    ))}
                </div>

                <div className="flex flex-row justify-start items-center h-[204px] mb-12 mt-12 bg-[#fafafa] md:hidden">
                    <div>
                        < img alt="" className="h-[204px] w-[382px] ml-0" src="/image 3.png" />
                    </div>
                    <div className="mr-5">
                        <h1 className="mb-5">INY VINTAGE CHAIR</h1>
                        <button className="group items-center cursor-pointer hover:bg-[#323334] border-[1px] border-black">
                            <Link
                                to='/Chair'
                                className="text-nowrap group-hover:!text-white !text-sm !font-bold"
                            >
                                VIEW DETAILS
                            </Link>
                        </button>
                    </div>
                </div>

                <div className="h-[204px] relative md:h-[512px]">
                    < img alt=""
                        className="h-[204px] w-screen ml-0 object-fill sm:object-fill md:h-full "
                        src="/Rectangle 13.png"
                    />
                    <div className="">
                        <div className="md:p-[90px] flex flex-col gap-4 justify-center items-center md:items-start h-[140px] w-48 bg-[#ffffffc0] left-10 md:left-[88px] absolute top-10 md:w-[520px] md:h-[280px] md:mt-[60px]">
                            <h1>BEDSHEET SETS</h1>
                            <p className="hidden md:block !font-light">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
                                dolor.
                            </p>
                            <button className="group items-center cursor-pointer hover:bg-[#323334]  border-[1px] border-black !px-4">
                                <Link
                                    to="/Handm"
                                    className="group-hover:!text-white text-nowrap !text-sm !font-bold"
                                >
                                    VIEW DETAILS
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>

                <h1 className="mt-12 ml-[15px] md:m-12 !text-6 md:!text-[34px]">
                    TOP RATING
                </h1>

                <div className="gridContainer hidden md:grid md:grid-cols-3 gap-y-6 ml-12">
                    {
                        nineProducts.map((item) => (
                            <div className="h-[308px] flex flex-row n" key={item._id}>
                                < img alt="err" src={`${item.image}`} />
                                <div className="mx-4 flex w-full gap-3 flex-col justify-center min-w-24">
                                    <Link to={item.category} className="text-wrap !font-bold !text-lg hover:scale-[1.05]">
                                        {item.name}
                                    </Link>
                                    <div className="flex items-center">
                                        <svg
                                            className="w-4 h-4 dark:text-white stroke-yellow-600 ms-1"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 22 20"
                                        >
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg
                                            className="w-4 h-4 dark:text-white stroke-yellow-600 ms-1"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 22 20"
                                        >
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg
                                            className="w-4 h-4 dark:text-white stroke-yellow-600 ms-1"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 22 20"
                                        >
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg
                                            className="w-4 h-4  dark:text-white stroke-yellow-600 ms-1"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 22 20"
                                        >
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg
                                            className="w-4 h-4 ms-1 dark:text-white stroke-gray-600"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 22 20"
                                        >
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                    </div>
                                    <h2>${item.price}</h2>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div
                    onScroll={handleScroll}
                    ref={scrolRef}
                    className="scroll h-auto w-screen overflow-x-scroll md:hidden"
                >
                    <div className="w-full grid grid-rows-3 grid-flow-col ml-4">
                        {
                            nineProducts.map((item) => (
                                <div className="mt-6 h-40 w-screen flex flex-row " key={item._id}>
                                    < img alt="err" className="h-40 w-32" src={item.image} />
                                    <div className="flex w-32 ml-4 flex-col justify-center gap-3">
                                        <Link to={`/${item.category}`} className="text-wrap !font-bold !text-base hover:scale-[1.05]">
                                            {item.name}
                                        </Link>
                                        <div className="flex items-center">
                                            <svg
                                                className="w-4 h-4 dark:text-white stroke-yellow-600 ms-1"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 22 20"
                                            >
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg
                                                className="w-4 h-4 dark:text-white stroke-yellow-600 ms-1"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 22 20"
                                            >
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg
                                                className="w-4 h-4 dark:text-white stroke-yellow-600 ms-1"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 22 20"
                                            >
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg
                                                className="w-4 h-4  dark:text-white stroke-yellow-600 ms-1"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 22 20"
                                            >
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg
                                                className="w-4 h-4 ms-1 dark:text-white stroke-gray-600"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 22 20"
                                            >
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                        </div>
                                        <h2>${item.price}</h2>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="mt-4 h-2 flex justify-center md:hidden">
                    {[...Array(2)].map((_, i) => (
                        <span
                            key={i}
                            className={` h-1.5 w-1.5 ${i === activeIndex ? "bg-black" : "bg-gray-400"} border-black rounded-full mr-1`}
                        />
                    ))}
                </div>
                <div className={`${load ? "hidden" : "md:block hidden"} md:text-center md:my-10`}>
                    <button className="bg-[#323334] !px-24 text-base font-bold text-white cursor-pointer" onClick={loadProducts}>
                        LOAD MORE PRODUCTS
                    </button>
                </div>
                {
                    load && <div className="gridContainer hidden md:grid md:grid-cols-3 gap-y-6 ml-12 mt-6">{threeProducts.map((item) => (
                        <div className="h-[308px] flex flex-row n" key={item._id}>
                            < img alt="err" src={`${item.image}`} />
                            <div className="mx-4 flex w-full gap-3 flex-col justify-center min-w-24">
                                <Link to={item.category} className="text-wrap !font-bold !text-lg hover:scale-[1.05]">
                                    {item.name}
                                </Link>
                                <div className="flex items-center">
                                    <svg
                                        className="w-4 h-4 dark:text-white stroke-yellow-600 ms-1"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                    >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg
                                        className="w-4 h-4 dark:text-white stroke-yellow-600 ms-1"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                    >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg
                                        className="w-4 h-4 dark:text-white stroke-yellow-600 ms-1"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                    >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg
                                        className="w-4 h-4  dark:text-white stroke-yellow-600 ms-1"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                    >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg
                                        className="w-4 h-4 ms-1 dark:text-white stroke-gray-600"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                    >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                </div>
                                <h2>${item.price}</h2>
                            </div>
                        </div>
                    ))}
                    </div>
                }
                <div className="flex flex-col ml-[15px] my-20 md:flex-row md:justify-evenly md:items-center">
                    <span>
                        <h1 className="mb-3 text-nowrap"> SIGN UP FOR THE NEWSLETTER</h1>
                        <p className="mb-3 !font-normal !text-lg text-wrap ">
                            Subscribe for latest stories and promotions
                        </p>
                    </span>
                    <div className=" my-5 flex flex-row md:justify-end">
                        <input
                            type="textarea"
                            className="h-[50px] w-[260px] xl:h-[50px] xl:w-[515px] border-black border-[1px] p-1 focus:outline-none placeholder-gray-400 placeholder:text-base placeholder:p-1 "
                            placeholder="Enter your email address"
                        />
                        < img alt="err" className="h-[50px] w-[85px]" src="/Group 195.png" />
                    </div>
                </div>
            </div>
        </>
    )
}
