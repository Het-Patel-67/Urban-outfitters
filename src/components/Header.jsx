import React,{useRef, useState} from 'react';
import {Link} from "react-router-dom"

export function Header() {
    
   
    const [search,setSearch] = useState(false);
    const [open,setOpen]=useState(false);
    const [midOpen,setMidOpen]=useState(false); 
    const handleClick = ()=>{
       setOpen(!open);
    }
    const handleMidClick = ()=>{
        setMidOpen(!midOpen);
     }
    return (
        <header>
            <nav>
                <div className="flex flex-row justify-between items-center h-[68px] ">
                    <span>
                        <h1 className="hidden md:block mx-12 py-7.5">MOODY STUDIO</h1>
                        <h1 className="mx-6 py-7.5 md:hidden !text-base !text-[#323334]">
                            URBAN OUTFITTERS
                        </h1>
                    </span>
                    <span className="icon flex gap-1 md:gap-4 flex-row justify-center items-center space-x-4 mr-5 md:py-7.5">
                        <Link to='/Profile'>
                        <img
                            className="h-[15.87px] w-[13.21px] md:h-[30px] md:w-[22px] cursor-pointer"
                            src="/Group 40.png"
                        />
                        </Link>
                        <Link to="/Shoppingbag">
                            <img
                                className="h-[18px] w-[18px]  md:h-[34px] md:w-[34px] cursor-pointer"
                                src="/Group 43.png"
                            />
                        </Link>
                        <div className="drop-cover " onClick={handleClick}>
                            <div  className="md:hidden text-2xl cursor-pointer relative drop-trigger">
                                <img className="md:hidden h-4 w-[26px]" src="/Group 224.png" />
                            </div>
                            <div  className={`dropdown w-[140px] gap-[10px] ${ open ? "flex":"hidden"}  bg-[white] text-[#323334] absolute top-[43px] right-0 z-20 flex-col rounded-md`}>
                                <div onClick={() => setOpen(false)} className=" cursor-pointer flex px-3 pt-1 justify-end">✕</div>
                                 <div className="hover:bg-gray-200 p-1  rounded-md">
                                    <Link
                                        to="/"
                                        className="cursor-pointer !font-normal !text-base inline-block hover:scale-[1.05] transition-transform duration-300 px-2"
                                    >
                                        Home
                                    </Link>
                                </div>
                                <div className="hover:bg-gray-200 p-1  rounded-md">
                                    <Link
                                        to="/Orders"
                                        className="cursor-pointer !font-normal !text-base inline-block hover:scale-[1.05] transition-transform duration-300 px-2"
                                    >
                                        Orders
                                    </Link>
                                </div>
                                <div className="hover:bg-gray-200 p-1  rounded-md">
                                    <Link
                                        to="/Prestige"
                                        className="cursor-pointer !font-normal !text-base inline-block hover:scale-[1.05] transition-transform duration-300 px-2"
                                    >
                                        Prestige
                                    </Link>
                                </div>
                                <div className="hover:bg-gray-200 p-1  rounded-md">
                                    <Link
                                       to="/Godrej"
                                        className="cursor-pointer !font-normal !text-base inline-block hover:scale-[1.05] transition-transform duration-300 px-2"
                                    >
                                        Godrej
                                    </Link>
                                </div>
                            
                                <div className="hover:bg-gray-200 p-1  rounded-md">
                                    <Link
                                        to="/Handm"
                                        className="cursor-pointer !font-normal !text-base inline-block hover:scale-[1.05] transition-transform duration-300 px-2"
                                    >
                                        H&M Home
                                    </Link>
                                </div>
                                <div className="hover:bg-gray-200 p-1  rounded-md">
                                    <Link
                                        to="/Curlon"
                                        className="cursor-pointer !font-normal !text-base inline-block hover:scale-[1.05] transition-transform duration-300 px-2"
                                    >
                                        Curlon
                                    </Link>
                                </div>
                                <div className="hover:bg-gray-200 p-1  rounded-md">
                                    <Link
                                       to="/Contactus"
                                        className="cursor-pointer !font-normal !text-base inline-block hover:scale-[1.05] transition-transform duration-300 px-2"
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </span>
                </div>
                <div className="hidden md:block ms-12 me-8 -mt-2 h-1 border-b-2 border-black rounded-2xl" />
                <div className="hidden md:flex flex-row justify-evenly ml-[22px] py-6 ">
                    <Link
                        to="/"
                        className="text-nowrap  cursor-pointer !font-bold !text-base hover:scale-[1.05]"
                    >
                        HOME
                    </Link>
                    <Link to="/Store" className="text-nowrap cursor-pointer !font-bold !text-base hover:scale-[1.05]">
                        STORE
                    </Link>
                    <Link
                        to="/Orders"
                        className="text-nowrap cursor-pointer !font-bold !text-base hover:scale-[1.05]"
                    >
                        ORDERS
                    </Link>
                    <div className="drop-cover" onClick={handleMidClick}>
                        <div
                            className="drop-trigger cursor-pointer relative font-bold text-base text-[#323334] hover:scale-[1.05]"
                            
                        >
                            BRAND
                        </div>
                        <div className={`drop-content w-[140px] gap-[8px] ${midOpen? "flex": "hidden"} bg-white text-[#323334] absolute top-[120px] z-20 flex-col rounded-md `}>
                            <div className="cursor-pointer flex justify-end p-2">✕</div>
                            <div className="hover:bg-gray-200 p-2  rounded-md">
                                <Link
                                    to="/Prestige"
                                    className="cursor-pointer !font-normal !text-base inline-block hover:scale-[1.05] transition-transform duration-300 "
                                >
                                    Prestige
                                </Link>
                            </div>
                            <div className="hover:bg-gray-200 p-2  rounded-md">
                                <Link
                                    to="/Refrigerator"
                                    className="cursor-pointer !font-normal !text-base inline-block hover:scale-[1.05] transition-transform duration-300 "
                                >
                                    Godrej
                                </Link>
                            </div>
                            
                            <div className="hover:bg-gray-200 p-2  rounded-md">
                                <Link
                                    to="/Handm"
                                    className="cursor-pointer !font-normal !text-base inline-block hover:scale-[1.05] transition-transform duration-300 "
                                >
                                    H&M Home
                                </Link>
                            </div>
                            <div className="hover:bg-gray-200 p-2  rounded-md">
                                <Link
                                    to="/Curtains"
                                    className="cursor-pointer !font-normal !text-base inline-block hover:scale-[1.05] transition-transform duration-300 "
                                >
                                    Curlon
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Link
                        to="/Pages"
                        className="text-nowrap cursor-pointer !font-bold !text-base hover:scale-[1.05]"
                    >
                        PAGES
                    </Link>
                    <Link
                        to="/Aboutus"
                        className="text-nowrap cursor-pointer !font-bold !text-base hover:scale-[1.05]"
                    >
                        ABOUT US
                    </Link>
                    <Link
                        to="/News"
                        className="text-nowrap cursor-pointer !font-bold !text-base hover:scale-[1.05]"
                    >
                        NEWS
                    </Link>
                    <Link
                        to="/Contactus"
                        className="text-nowrap cursor-pointer !font-bold !text-base hover:scale-[1.05]"
                    >
                        CONTACT US
                    </Link>
                </div>
                <div className="hidden md:block  ms-12 me-8 -mt-1 h-1 border-b-2 border-black rounded-2xl" />

        </nav>
        </header>
    )
}
