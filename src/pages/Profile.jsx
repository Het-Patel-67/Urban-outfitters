import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return alert("Please log in first");

    axios
      .get("http://localhost:5000/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUser(res.data))
      .catch((err) => alert("Unauthorized or expired token"));


  }, []);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete("http://localhost:5000/logout", {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (err) {
      console.error("Logout request failed:", err);
    } finally {
      localStorage.removeItem("token");
      setUser(null);
      alert("Logged out successfully");
      window.location.href = "/login"; // adjust target as needed
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-yellow-50">
      {!user ? (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="loader border-4 border-gray-300 border-t-purple-500 w-12 h-12 rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
          <img src="/profile.jpg" className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-purple-200 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-purple-700 mb-2">
            {user.name}
          </h2>
          <p className="text-gray-600">{user.email}</p>
          <div className="flex md:flex-row flex-col gap-3 justify-center items-center">
            <button
              onClick={handleLogout}
              className="mt-6 bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
            >
              Logout
            </button>
            <button
              className="mt-6 bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
            >
              <Link to='/Register'>
                Create New
              </Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );

}
