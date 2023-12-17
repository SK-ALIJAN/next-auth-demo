"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { FaLock, FaLockOpen } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const SignIn: React.FC = () => {
  let [hide, setHide] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    setEmail("");
    setPassword("")
    if (!email) toast.warn("Please use email");
    else if (!password) toast.warn("Please use password");
    else {
      toast("successfully login")
    }
  };

  const handleGoogleSignIn = async () => {

  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-20 rounded shadow-md ">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        <div className="mb-4 w-full ">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-6 relative">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type={hide ? "password" : "text"}
            name="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
          />
          <div onClick={() => { setHide(!hide) }} className='w-5 absolute top-9 right-1 cursor-pointer'>{hide && password ? <FaLock /> : hide == false && password ? <FaLockOpen /> : ""}</div>
        </div>
        <button onClick={handleSignIn} className="bg-blue-500 text-white p-2 rounded-md mb-4 w-full">
          Sign In
        </button>
        <button onClick={handleGoogleSignIn} className="bg-red-500 text-white p-2 rounded-md w-full">
          Sign In with Google
        </button>

        <p className='mt-3'>New User ? <Link href={"./signup"} className='font-bold'>Signup here</Link> </p>
      </div>

      <ToastContainer />
    </div>
  );
};

export default SignIn;
