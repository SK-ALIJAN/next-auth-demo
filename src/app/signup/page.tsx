
"use client"
import Link from 'next/link';
import React, { useState } from 'react';


const SignUp: React.FC = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    // Implement your sign-up logic here
    // You can use the 'email' and 'password' states
  };

  const handleGoogleSignUp = async () => {

  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            autoComplete="name"

            onChange={(e) => setEmail(e.target.value)}
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
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-green-500"
          />
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
    </div>
  );
};

export default SignUp;
