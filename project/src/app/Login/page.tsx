import Link from 'next/link';
import React from 'react';
import {
    SignInButton,
    SignedOut,
  } from '@clerk/nextjs'

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h2 className="font-bold text-4xl space-x-8">Welcome to SHOP.CO</h2>
      <form className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl mb-6 text-center">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" className="border border-gray-300 p-2 w-full rounded" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input type="password" className="border border-gray-300 p-2 w-full rounded" required />
        </div>
        <Link href="/">
            <button className="bg-blue-500 text-white p-2 rounded w-full">
            <SignInButton />
            </button>
        </Link>

      </form>
    </div>
  );
};

export default Login;