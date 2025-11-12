import React, { useEffect, useState, useRef } from "react";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { Link } from "react-router-dom";
import axios from "axios";
import FeaturedProducts from "./FeaturedProducts";

function Shoppingbag() {
  const [showForm, setShowForm] = useState(false);
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [cupon, setCupon] = useState("");
  const [quantities, setQuantities] = useState({});
  const [isLiked, setIsLiked] = useState(false);
  const [cuponState, setCuponState] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contact: ""
  });

  const discountCupon = {
    "E-1344": 20,
    "SALE50": 50,
    "URBAN25": 25,
    "ROXA10": 10,
    "DISC15": 15,
    "NOFAL5": 5
  }



  const handleOrderNow = (item) => {
    setSelectedItems(item);
    const selectedItem = items.find(i => i._id === item._id);
    if (selectedItem) {
      if (cupon !== "") {
        const discountPercentage = discountCupon[cupon];
        if (discountPercentage) {
          const discountedPrice = selectedItem.price * (1 - discountPercentage / 100);
          setItems(prevItems => prevItems.map(i => (i._id === item._id ? { ...i, price: discountedPrice } : i)));
          alert(`${discountPercentage}% discount applied!`);
          setCupon("");
          setCuponState(!cuponState);
        } else {
          alert("Invalid coupon code!");
        }
      }
    } else {
      console.log("Selected item not found in items array.");
    }


    if (quantities[selectedItems._id] === "Custom" && (customQty === "" || isNaN(customQty) || Number(customQty) <= 0)) {
      alert("Please enter a valid custom quantity.");
      return;
    }
    else if (quantities[selectedItems._id] === "Custom" && undefined) {
      alert("Please select a quantity.");
      return;
    }
    else {
      setShowForm(true);
    }
  };


  const handleChangeQty = (id, newQty) => {
    setQuantities(prev => ({
      ...prev,
      [id]: newQty,
    }));
  };
  const hadleChangeLike = (id, _ignored) => {
    setIsLiked(prev => {
      const prevObj = (prev && typeof prev === 'object') ? prev : {};
      return {
        ...prevObj,
        [id]: !prevObj[id],
      };
    });
  };
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios.get("http://localhost:5000/cart", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => setItems(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowForm(false);
    setFormData({ name: '', address: '', contact: '' });
    try {
      const res = await axios.post('http://localhost:5000/order', {
        customer_name: formData.name,
        address: formData.address,
        contact_no: formData.contact,
        name: selectedItems.name,
        price: selectedItems.price,
        image: selectedItems.image,
        size: selectedItems.size,
        art: selectedItems.art,
        qty: quantities[selectedItems._id] === "Custom" ? customQty : quantities[selectedItems._id]
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Item Ordered successfully');
    }
    catch (err) {
      console.log('Error submitting order:', err);
    }
  };


  const [customQty, setCustomQty] = useState("");


  function rmvItem(itemId) {
    axios.delete(`http://localhost:5000/cart/${itemId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => {
        setItems(prev => prev.filter(item => item._id !== itemId));
        alert(res.data);
      })
      .catch(err => console.log(err));
  }
  return (
    <>
      <div className="p-5">
        <h1 className="text-2xl font-bold mb-6 text-center">SHOPPING BAG</h1>
        <div className="grid xl:grid-cols-[800px_1fr_510px] lg:grid-cols-2 grid-cols-1 lg:pl-12">
          <div className="flex flex-col h-auto items-center lg:items-start gap-5 mb-8">
            {items.map((item) => (
              <div
                key={item._id}
                className="flex flex-row lg:items-start justify-between w-full px-5 md:px-10 lg:px-0 lg:w-full md:gap-3 flex-1 mb-5"
              >

                <img src={item.image} alt="any" className="md:h-[200px] md:w-[150px] h-[170px] w-[90px]" />
                <div className="flex flex-col ml-3 gap-1 md:gap-3 items-start flex-1">
                  <h1 className=" md:!font-bold !font-medium !text-base md:text-nowrap">{item.name}</h1>
                  <p className="!font-medium !text-base">${item.price}</p>
                  <div className="flex sm:flex-row sm:gap-9 sm:items-start flex-col gap-2">
                    <p className="sm:!font-medium !font-normal !text-sm sm:!text-base">Size: {item.size}</p>
                    <p className="sm:!font-medium !font-normal !text-sm sm:!text-base">Art no: {item.art}</p>
                  </div>
                  <div className="flex flex-row gap-2 items-start">
                    <button onClick={e => hadleChangeLike(item._id, e.target.value)} className="p-[2px] border border-[#6d6d6d4d] text-center">
                      {isLiked[item._id] ? <AiFillHeart color="red" size={24} /> : <AiOutlineHeart size={24} />}
                    </button>
                    <div className="flex flex-col gap-1">
                      <select value={quantities[item._id]}
                        onChange={e => handleChangeQty(item._id, e.target.value)} className="overflox-y-hidden h-[31px] px-4 py-[3px] border border-[#0000004D]">
                        <option value="">Quantity</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="Custom">Custom</option>
                      </select>
                      {quantities[item._id] === "Custom" && (
                        <input
                          type="number"
                          min="1"
                          value={customQty}
                          onChange={(e) => setCustomQty(e.target.value)}
                          placeholder="Enter qty"
                          className="border p-1 w-20 rounded "
                        />
                      )}
                    </div>
                  </div>
                  <button onClick={() => { setShowForm(true); handleOrderNow(item) }} className="text-center bg-[#323334] text-white text-nowrap cursor-pointer">Order Now</button>
                </div>

                {showForm && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                    <h2 className="text-xl font-bold mb-4">Order Details</h2>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label className="block mb-2">Name:</label>
                        <input
                          type="text"
                          className="w-full border p-2 rounded"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                      </div>
                      <div className="mb-4">
                        <label className="block mb-2">Address:</label>
                        <textarea
                          className="w-full border p-2 rounded"
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block mb-2">Contact No: </label>
                        <input
                          type="tel"
                          className="w-full border p-2 rounded"
                          value={formData.contact}
                          onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                          placeholder="Digits only"
                          required
                        />
                      </div>
                      <div className="flex gap-2">
                        <button type="submit" className="bg-[#323334] text-white px-4 py-2 rounded">
                          Submit Order
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowForm(false)}
                          className="bg-gray-200 px-4 py-2 rounded"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                }
                <img src="/Group 230.png" alt='any' className="h-[16px] w-[16px]" onClick={() => rmvItem(item._id)} />
              </div>
            ))}
          </div>
          <div className="bg-[#ECEBE9B2] flex px-6 justify-center mx-5 flex-col gap-8 h-[510px] md:w-[435px]">
            <div className="flex gap-3 flex-col">
              <label className="text-lg font-light text-[#323334]">ADD A DISCOUNT CODE</label>
              <div className="flex">
                <input type="text" placeholder=""
                  className="bg-white text-2xl px-2 py-1 w-full h-[54px] outline-none" value={cupon} onChange={(e) => setCupon(e.target.value)} />
                <button className="bg-[#323334] !text-white !text-sm" onClick={() => setCuponState(!cuponState)}>ADD</button>
              </div>
            </div>
            <div className="flex gap-3 flex-col">
              <p className="text-[#323334] !font-light !text-lg mb-1">Log in to use your member offers.</p>
              <button
                className="!w-full !bg-white !font-semibold !text-base !py-5 cursor-pointer">LOG
                IN</button>
            </div>

            <div className="text-gray-800 !text-xs space-y-1">
              <div className="flex justify-between">
                <span className="font-medium text-[#323334] text-base">Order value:</span>
                <span className="font-medium text-[#323334] text-base">{items[0]?.price}$</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-[#323334] text-base">Shipping:</span>
                <span className="font-medium text-[#323334] text-base">0.0 $</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span className="font-medium text-[#323334] text-base">Total</span>
                <span className="font-medium text-[#323334] text-base">{items[0]?.price}$</span>
              </div>
            </div>

            <button className="w-full bg-gray-800 text-white !py-5 text-sm font-bold ">
              CONTINUE TO CHECKOUT
            </button>
          </div>

        </div>


      </div>

      <FeaturedProducts />

    </>
  )
}

export default Shoppingbag;