import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import FeaturedProducts from "./FeaturedProducts";

function Orders() {
  const [Orders, setOrders] = useState([]);
  const [editId, setEditId] = useState('');
  const [updateAddress, setUpdateAddress] = useState('');
  const [updateContact, setUpdateContact] = useState('');
  const [showEditForm, setShowEditForm] = useState(false);
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios('http://localhost:5000/order', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => setOrders(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleCancelOrder = (orderId) => {
    axios.delete(`http://localhost:5000/order/${orderId}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => {
        setOrders(Orders.filter(order => order._id !== orderId));
        alert(res.data.message);
      })
      .catch(err => console.log(err));
  }

  const handleUpdate = async (orderId) => {
    try {
      const res = await axios.put(`http://localhost:5000/order/${orderId}`, {
        address: updateAddress,
        contact_no: updateContact
      }, {
        headers: { Authorization: `Bearer ${token}` },
      })

      setOrders(
        Orders.map((order) =>
          order._id === orderId ? { ...order, address: updateAddress, contact_no: updateContact } : order
        )
      );
      setEditId("");
      setUpdateAddress("");
      setUpdateContact("");
      setShowEditForm(false);
      alert(res.data.message);
    } catch (err) {
      console.log("Error updating address:", err);
    }
  }

  return (
    <>
      <h1 className="text-center my-4">Your Orders</h1>
      <div className=" flex flex-col ml-6 md:ml-30 lg:ml-40 p-6 md:w-[70%] h-auto justify-center items-center">

        {Orders.length === 0 ? <p className="text-center">No orders yet</p> : Orders.map((order) => (
          <div key={order._id} className="flex flex-row lg:items-start justify-between w-full my-2 p-4 border border-gray-300 rounded-lg">
            <img src={order.image} alt="any" className="md:h-[200px] md:w-[145px] h-[185px] w-[100px]" />
            <div className="ml-5 flex flex-col gap-2 items-start flex-1">
              <h1 className="!text-base md:!text-xl">{order.name}</h1>
              <p className="!text-base lg:!text-xl lg:!font-semibold">${order.price}</p>
              <p className="flex !text-base  lg:!text-xl lg:!font-semibold">Size: {order.size}</p>
              <p className="flex !text-base  lg:!text-xl lg:!font-semibold">Qty: {order.qty}</p>
              <p className="flex !font-light text-gray-500 !text-xs md:!text-sm">Date: {new Date(order.date).toLocaleString("en-IN", {
                dateStyle: "medium",
                timeStyle: "short",
              })}</p>
              <div className="flex flex-row gap-4">
                <button onClick={() => handleCancelOrder(order._id)} className="p-2 !bg-[#323334] text-white cursor-pointer">Cancle</button>

                {editId === order._id ? (showEditForm && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white p-6 rounded-lg shadow-lg w-max flex flex-col"> Edit Details <br />
                    <input type="text" value={updateAddress} onChange={(e) => setUpdateAddress(e.target.value)} placeholder="Enter new address" className="border p-1 my-4" />
                    <input type="tel" value={updateContact} onChange={(e) => setUpdateContact(e.target.value)} placeholder="Enter new contact" className="border p-1 mb-4" />
                    <div className="flex flex-row gap-4">
                      <button className="bg-black text-white px-2  py-1 ml-2 rounded" onClick={() => { setShowEditForm(false); setEditId(""); }} >Cancel</button>
                      <button
                        onClick={() => handleUpdate(order._id)}
                        className="bg-green-500 text-white px-2 py-1 ml-2 rounded"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>) :
                  (<div className="relative group inline-block">
                    <img alt="edit" className="h-[30px] cursor-pointer" src="/edit-icons.png" onClick={() => { setEditId(order._id); setShowEditForm(true) }} />
                    <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2
                   bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 
                   group-hover:opacity-100 transition-opacity duration-200 w-max">
                      Edit details
                    </span>
                  </div>)
                }
              </div>
            </div>
          </div>
        ))}

      </div>

      <FeaturedProducts />
    </>
  )
}

export default Orders;