'use client';

import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';

const SignupSchema = Yup.object().shape({
  fullName: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Password too short!').required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

const Signup = () => {
  const router = useRouter();

  const signupForm = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: SignupSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await axios.post('http://localhost:5000/user/signup', values);
        toast.success('Signup successful 🚀');
        resetForm();
        setTimeout(() => {
          router.push('/login');
        }, 1500);
      } catch (err) {
        console.log(err);
        toast.error('Server Error or CORS issue');
      }
    },
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
            Create Account 🚀
          </h1>
          <p className="text-gray-400 text-sm mt-2">
            Join your AI Portfolio Platform
          </p>
        </div>

        <form onSubmit={signupForm.handleSubmit} className="space-y-5">

          {/* Full Name */}
          <div>
            <label className="text-sm text-gray-300">Full Name</label>
            <input
              type="text"
              name="fullName"
              onChange={signupForm.handleChange}
              onBlur={signupForm.handleBlur}
              value={signupForm.values.fullName}
              className="w-full mt-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter your full name"
            />
            {signupForm.touched.fullName && signupForm.errors.fullName && (
              <p className="text-red-400 text-xs mt-1">
                {signupForm.errors.fullName}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              onChange={signupForm.handleChange}
              onBlur={signupForm.handleBlur}
              value={signupForm.values.email}
              className="w-full mt-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter your email"
            />
            {signupForm.touched.email && signupForm.errors.email && (
              <p className="text-red-400 text-xs mt-1">
                {signupForm.errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              onChange={signupForm.handleChange}
              onBlur={signupForm.handleBlur}
              value={signupForm.values.password}
              className="w-full mt-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter password"
            />
            {signupForm.touched.password && signupForm.errors.password && (
              <p className="text-red-400 text-xs mt-1">
                {signupForm.errors.password}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-sm text-gray-300">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              onChange={signupForm.handleChange}
              onBlur={signupForm.handleBlur}
              value={signupForm.values.confirmPassword}
              className="w-full mt-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Confirm password"
            />
            {signupForm.touched.confirmPassword &&
              signupForm.errors.confirmPassword && (
                <p className="text-red-400 text-xs mt-1">
                  {signupForm.errors.confirmPassword}
                </p>
              )}
          </div>

          {/* Terms */}
          <div className="flex items-center text-sm text-gray-400">
            <input type="checkbox" className="mr-2 accent-blue-500" />
            I agree to Terms & Conditions
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold tracking-wide hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Sign Up
          </button>

        </form>

        {/* Bottom Link */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Already have an account?{" "}
          <span
            onClick={() => router.push('/login')}
            className="text-blue-400 hover:underline cursor-pointer"
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
};

export default Signup;
