'use client';

import axios from 'axios';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';

export default function Login() {

  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      axios.post('http://localhost:5000/user/login', values)
        .then((res) => {
          toast.success("Login successful 🚀");

          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.user));

          setTimeout(() => {
            window.location.href = "/manageCV";
          }, 1000);
        })
        .catch(() => {
          toast.error("Invalid email or password");
        });
    }
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-hidden px-4">

      {/* Glow Effects */}
      <div className="absolute w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20 -top-10 -left-10"></div>
      <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20 bottom-0 right-0"></div>

      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8 relative z-10">

        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white tracking-wide">
            Welcome Back 👋
          </h1>
          <p className="text-gray-400 text-sm mt-2">
            Login to continue to ProFolio AI
          </p>
        </div>

        {/* Form */}
        <form onSubmit={loginForm.handleSubmit} className="space-y-5">

          {/* Email */}
          <div>
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              onChange={loginForm.handleChange}
              value={loginForm.values.email}
              className="w-full mt-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              onChange={loginForm.handleChange}
              value={loginForm.values.password}
              className="w-full mt-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter your password"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold tracking-wide hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Login
          </button>

        </form>

        {/* Bottom Text */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-400 hover:underline">
            Sign Up
          </a>
        </p>

      </div>
    </div>
  );
}
