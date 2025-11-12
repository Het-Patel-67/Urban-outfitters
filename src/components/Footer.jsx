import React from 'react'
import {Link} from "react-router-dom"

export function Footer() {
  return (
    <>
    
  <div className="h-auto w-full flex flex-col place-items-center gap-8 md:hidden bg-[#323334] text-white">
    <h1 className="mt-6 mb-10 !text-white !text-[28px]">URBAN OUTFITTERS</h1>
    <div className="flex flex-col items-center gap-3 mb-10">
      <span className="flex flex-row">
        <img src="/Vector (6).png" />
        <h1 className="!text-white ">166</h1>
      </span>
      <p className="!text-white">S.G HIGHWAY, AHMEDABAD- 380059</p>
      <p className="!text-white">contact@urbanooutfitters.com</p>
    </div>
    <Link to="/Shoppingbag" className="cursor-pointer">
    <p className="!text-white  hover:scale-[1.05]">YOUR CART</p>
    </Link>
    <Link to="/Orders" className="cursor-pointer">
      <p className="!text-white hover:scale-[1.05]">YOUR ORDERS</p>
    </Link>
    <Link to="/Shoppingbag" className="cursor-pointer">
      <p className="!text-white hover:scale-[1.05]">WHISTLIST ITEMS</p>
    </Link>
     <Link to="/Orders" className="cursor-pointer">
      <p className="!text-white hover:scale-[1.05]">SHIPPING DEALS</p>
    </Link>
    <span className="flex flex-row gap-12 mb-8">
      <img src="./Vector (7).png" alt="err" />
      <img src="./ant-design_instagram-filled.png" alt="err" />
      <img src="./ant-design_instagram-filled.png" alt="err" />
      <img src="./vaadin_youtube.png" alt="err" />
    </span>
  </div>
  <div className="hidden md:flex bg-[#323334] text-white py-8 pl-6 flex-row justify-evenly items-start ">
    <div className="flex flex-col gap-6">
      <h1 className="mb-5 !text-white">URBAN OUTFITTERS</h1>
      <p className="!text-gray-400">
        Lorem ipsum dolor sit amet, consectetur <br />
        Quo ratione officiis ipsum atque.
      </p>
      <span className="flex flex-col gap-2">
        <h2 className="!text-base !text-white">
          S.G HIGHWAY, AHMEDABAD- 380059
        </h2>
        <h2 className="!text-base !text-white">contact@urbanooutfitters.com</h2>
        <h2 className="!text-base !text-white">+91 1212173314</h2>
      </span>
      <span className="flex flex-row gap-12 mt-4">
        <img src="./Vector (7).png" alt="err" />
        <img src="./ant-design_instagram-filled.png" alt="err" />
        <img src="./ant-design_instagram-filled.png" alt="err" />
        <img src="./vaadin_youtube.png" alt="err" />
      </span>
    </div>
    <div className="flex flex-col gap-1 mr-[2px]">
      <h2 className="mb-5 !text-base !text-white">SHOPPING</h2>
      <span className="!text-gray-400 flex flex-col gap-2">
        <Link to="/Shoppingbag" className="!text-gray-400 !font-light hover:scale-[1.05] ">
          Your Cart
        </Link>
        <Link to="/Orders" className="!text-gray-400 !font-light hover:scale-[1.05]">
          Your Orders
        </Link>
        <Link
          to="/Shoppingbag"
          className="cursor-pointer !text-gray-400 !font-light"
        >
          Whistlist Items
        </Link>
        <Link to="/Orders" className="!text-gray-400 !font-light hover:scale-[1.05]">
          Shipping Deal
        </Link>
      </span>
    </div>
    <div className="flex flex-col !text-base">
      <h2 className="mb-5 !text-white !text-base">FROM THE BLOG</h2>
      <p className="!text-gray-400">26th MAY</p>
      <p className="!text-gray-400 !font-light">
        Lorem ipsum dolor sit amet consectetur <br />
        adipisicing elit. Nesciunt, amet?
      </p>
      <p className="!text-gray-400 !font-light">3 comments</p>
      <div className="hidden md:block w-70 mt-2 mb-5 h-1 border-b-2 border-gray-500 rounded-2xl" />
      <p className="!text-gray-400">27th MAY</p>
      <p className="!text-gray-400 !font-light">
        Lorem ipsum dolor sit amet consectetur <br />
        adipisicing elit. Nesciunt, amet?
      </p>
      <p className="!text-gray-400 !font-light">3 comments</p>
    </div>
  </div>
  <div className="bg-black w-full h-auto text-center block">
    <p className="!text-sm !text-gray-400 p-3 ">
      {" "}
      Urban Outfitters © - All Rights Reserved
    </p>
  </div>
</>

  )
}
