"use client"
import Link from 'next/link';
import React, { useState } from 'react';


const SignIn: React.FC = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    // Implement your sign-in logic here
    // You can use the 'email' and 'password' states
  };

  const handleGoogleSignIn = async () => {

  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
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
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
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
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <button onClick={handleSignIn} className="bg-blue-500 text-white p-2 rounded-md mb-4 w-full">
          Sign In
        </button>
        <button onClick={handleGoogleSignIn} className="bg-red-500 text-white p-2 rounded-md w-full">
          Sign In with Google
        </button>

        <p className='mt-3'>New User ? <Link href={"./signup"} className='font-bold'>Signup here</Link> </p>
      </div>
    </div>
  );
};

export default SignIn;
