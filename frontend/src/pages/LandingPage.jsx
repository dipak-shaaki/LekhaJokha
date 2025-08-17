import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-purple-200 p-6">
      <h1 className="text-5xl font-bold mb-6 text-center">Welcome to LekhaJokha</h1>
      <p className="text-lg mb-8 text-center">Manage your accounts and transactions securely</p>
      <div className="flex gap-4">
        <Link to="/register" className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition">Register</Link>
        <Link to="/login" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition">Login</Link>
        <Link to="/forgot-password" className="bg-yellow-500 text-white px-6 py-3 rounded hover:bg-yellow-600 transition">Forgot Password</Link>
      </div>
    </div>
  );
}
