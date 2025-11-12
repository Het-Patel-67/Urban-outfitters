import React from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useContext, useState, useRef } from 'react';
import { ProductContext } from '../App';
import FeaturedProducts from './FeaturedProducts';

export default function Product({ items, setItems }) {
    const { category } = useParams();
    const { products, setProducts } = useContext(ProductContext);
    const [size, setSize] = useState('');
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    }

    const token = localStorage.getItem("token");
    useEffect(() => {
        axios.get(`http://localhost:5000/products/category/${category}`, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((response) => {
                setItems(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error("Error fetching category products:", error);
            });
    }, [category]);


    const addToShoppingBag = async () => {
        if (!size) {
            alert("Please select a size before adding to the shopping bag.");
            return;
        }
        try {
           
            const existingItems = await axios.get("http://localhost:5000/cart", {
            headers: { Authorization: `Bearer ${token}` },
        });
            const isDuplicate = existingItems.data.some(item =>
                item.name === items[0].name && item.art === items[0].art
            );

            if (isDuplicate) {
                alert("This item is already in your shopping bag!");
                return;
            }
        } catch (error) {
            console.error("Error checking for duplicate items:", error);
            return;
        }
        try {
           
            const res = await axios.post("http://localhost:5000/cart", {
                name: items[0].name,
                price: items[0].price,
                size: size,
                art: items[0].art,
                image: items[0].image
            },
                {
                    headers: { Authorization: `Bearer ${token}` },
                })
            alert("Item added to shopping bag!");

        } catch (err) {
            console.error("Error adding item to shopping bag:", err.response?.data || err.message);
        }
    }
    return (
        <>

            {items.length > 0 ? (
                <div>

                    {items.map((item) => (
                        <div key={item._id}>
                            <div className="grid lg:grid-cols-3 gap-3 grid-cols-2 p-12">
                                <img
                                    className="curlon sm:h-[340px] sm:w-[90%] md:w-[416px] md:h-[400px] lg:h-[572px]"
                                    src={item.image}
                                    alt="bed"
                                />
                                <img
                                    className="curlon sm:h-[340px] sm:w-[90%] md:w-[416px] md:h-[400px] lg:h-[572px]"
                                    src={item.image2}
                                    alt="bed"
                                />
                                <div className="flex flex-col items-start w-max">
                                    <h1 className="mb-3 lg:!font-medium name">{item.name}</h1>
                                    <h2 className="!text-[24px] !font-medium mb-3 price">${item.price}</h2>
                                    <p className="!text-lg !font-light mb-3">{item.color}</p>
                                    <img
                                        src={item.image}
                                        className="item-img h-[72px] w-[53px] object-contain mb-6"
                                        alt="Small"
                                    />
                                    <p className="text-sm text-gray-600 mb-4 ">
                                        <img src="/Vector (8).png" className="w-[15px] h-5 inline-block" alt="location" />{" "}
                                        Not available in stores
                                    </p>
                                    <div className="w-full xl:w-[416px]">
                                        <div onClick={handleClick} className="border border-gray-400 flex flex-row items-center justify-between px-3 py-2 cursor-pointer">
                                            <span className="w-full text-nowrap" id="size">
                                                {size || "Select size"}
                                            </span>
                                            <img
                                                src="/Vector 10.png"
                                                className="h-[6px] w-[12px] mr-2"
                                                alt="Dropdown arrow"
                                            />
                                        </div>
                                        <div className={`${open ? "flex" : "hidden"} flex-col bg-[white] border-1 border-[#f4e7e7] text-[#323334] px-4 py-2`}>
                                            <div onClick={() => setOpen(!open)} className="cursor-pointer flex justify-end">✕</div>
                                            <select
                                                className="cursor-pointer focus:outline-none bg-transparent overflow-hidden"
                                                size="4"
                                                onChange={(e) => {
                                                    setSize(e.target.value);
                                                    setOpen(false);
                                                }}
                                                value={size}
                                            >
                                                <option
                                                    className="cursor-pointer hover:bg-gray-200 p-1 rounded-md bg-white"
                                                    value=""
                                                >
                                                    Select Size
                                                </option>
                                                <option
                                                    className="cursor-pointer hover:bg-gray-200 p-1 rounded-md bg-white"
                                                    value="Small"
                                                >
                                                    Small
                                                </option>
                                                <option
                                                    className="cursor-pointer hover:bg-gray-200 p-1 rounded-md bg-white"
                                                    value="Medium"
                                                >
                                                    Medium
                                                </option>
                                                <option
                                                    className="cursor-pointer hover:bg-gray-200 p-1 rounded-md bg-white"
                                                    value="Large"
                                                >
                                                    Large
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <button
                                        className="!w-full text-nowrap mt-4 bg-[#323334] text-white cursor-pointer "
                                        onClick={addToShoppingBag}
                                    >
                                        ADD TO SHOPPING BAG
                                    </button>
                                </div>
                            </div>
                            <img
                                className="w-[87%] h-[290px] sm:w-[94%] lg:w-[848px] md:h-[450px] lg:h-[586px] lg:ml-12 ml-5 mt-6"
                                src={item.image2}
                                alt="bed"
                            />
                            <div className="bg-gray-300 w-[87%] sm:w-[94%] lg:w-[848px] ml-5 lg:ml-12 mt-6 p-6 sm:p-10">
                                <h1 className="text-lg font-semibold mb-2">{item.name}</h1>
                                <p className="text-sm mb-1">Description: {item.description}</p>
                                <p className="text-sm mb-2 !font-light">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur et
                                    quisquam iusto, eum dolores est recusandae beatae quaerat? Molestiae
                                    beatae similique vero et voluptas nobis doloribus sed perferendis
                                    consequatur veritatis.
                                </p>
                                <p className="text-sm article">Art No. - {item.art}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">No products found in this category.</p>
            )}
            <FeaturedProducts />
        </>
    );
}
