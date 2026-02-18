"use client";

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function AdminSignup() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    axios.post("http://localhost:5000/api/admin/signup", formData)
      .then(res => {
        toast.success("Admin Registered Successfully 🎉");
        window.location.href = "/adminLogin";
      })
      .catch(err => {
        toast.error(err.response?.data?.message || "Signup Failed");
      });
  };

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center">
      <div className="bg-gray-800 p-6 rounded-xl w-96">
        <h2 className="text-white text-xl mb-4">Admin Signup</h2>

        <input name="name" placeholder="Name"
          className="w-full mb-2 p-2 rounded"
          onChange={handleChange} />

        <input name="email" placeholder="Email"
          className="w-full mb-2 p-2 rounded"
          onChange={handleChange} />

        <input name="password" placeholder="Password" type="password"
          className="w-full mb-4 p-2 rounded"
          onChange={handleChange} />

        <button onClick={handleSignup}
          className="bg-blue-600 px-4 py-2 text-white rounded w-full">
          Signup
        </button>
      </div>
    </div>
  );
}
