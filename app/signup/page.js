"use client"; // <-- Yahan yeh line add karein
import Link from "next/link";
import AnimatedBackground from "../../components/AnimatedBackground.jsx"; // Sahi Raasta
import { User, Lock, Mail } from "lucide-react";

export default function SignupPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Yahan Backend API call hogi registration ke liye
    console.log("Signup attempted");
  };

  return (
    <AnimatedBackground>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl">
          <h2 className="text-3xl font-bold text-center mb-6 text-white">
            Create Your AutoSRS Account
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 pl-10 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none transition text-white"
                  placeholder="e.g., Talal Ahmed"
                  required
                />
                <User className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 pl-10 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none transition text-white"
                  placeholder="user@university.edu"
                  required
                />
                <Mail className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  className="w-full p-3 pl-10 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none transition text-white"
                  placeholder="Create a strong password"
                  required
                />
                <Lock className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-400 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="confirm-password"
                  className="w-full p-3 pl-10 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none transition text-white"
                  placeholder="Re-enter password"
                  required
                />
                <Lock className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>

            <button 
                type="submit" 
                className="w-full py-3 bg-purple-600 rounded-lg font-semibold hover:bg-purple-700 transition shadow-lg shadow-purple-500/20"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-6 text-center text-gray-400">
            Already have an account? <Link href="/login" className="text-purple-400 hover:underline">Log In</Link>
          </p>
        </div>
      </div>
    </AnimatedBackground>
  );
}