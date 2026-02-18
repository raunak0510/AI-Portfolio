"use client";

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function AdminLogin() {

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    axios.post("http://localhost:5000/api/admin/login", loginData)
      .then(res => {
        toast.success("Admin Logged In ✔");

        localStorage.setItem("adminToken", res.data.token);
        localStorage.setItem("admin", JSON.stringify(res.data.admin));

        window.location.href = "/adminDashboard";
      })
      .catch(err => {
        toast.error(err.response?.data?.message || "Login Failed");
      });
  };

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center">
      <div className="bg-gray-800 p-6 rounded-xl w-96">
        <h2 className="text-white text-xl mb-4">Admin Login</h2>

        <input name="email" placeholder="Email"
          className="w-full mb-2 p-2 rounded"
          onChange={handleChange} />

        <input name="password" placeholder="Password" type="password"
          className="w-full mb-4 p-2 rounded"
          onChange={handleChange} />

        <button onClick={handleLogin}
          className="bg-green-600 px-4 py-2 text-white rounded w-full">
          Login
        </button>
      </div>
    </div>
  );
}
