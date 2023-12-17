"use client"
import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaLock, FaLockOpen } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp: React.FC = () => {
  let [hide, setHide] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    setName("");
    setEmail("");
    setPassword("")
    if (!name) toast.warn("Please fill your name");
    else if (!email) toast.warn("Please use email");
    else if (!password) toast.warn("Please use password");
    else {
      toast("successfully login")
    }
  };

  const handleGoogleSignUp = async () => {

  };

  return (
    <>
      <Head >
        <title>Sign up</title>
        <meta name="description" content="Sign in to Your App Name" />
      </Head>

      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-20 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              autoComplete="name"
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-green-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-green-500"
            />
          </div>
          <div className="mb-6 relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type={hide ? "password" : "text"}
              id="password"
              name="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-green-500"
            />
            <div onClick={() => { setHide(!hide) }} className='w-5 absolute top-9 right-1 cursor-pointer'>{hide && password ? <FaLock /> : hide == false && password ? <FaLockOpen /> : ""}</div>
          </div>
          <button onClick={handleSignUp} className="bg-green-500 text-white p-2 rounded-md mb-4 w-full">
            Sign Up
          </button>
          <button
            onClick={handleGoogleSignUp}
            className="bg-red-500 text-white p-2 rounded-md w-full"
          >
            Sign Up with Google
          </button>


          <p className='mt-3'>Already a User ? <Link href={"./login"} className='font-bold'>Login</Link> </p>
        </div>

        <ToastContainer />
      </div></>
  );
};

export default SignUp;
