"use client"; // <-- Yahan yeh line add karein
import Link from "next/link";
import AnimatedBackground from "../../components/AnimatedBackground.jsx"; // Sahi Raasta
import { User, Lock } from "lucide-react";

export default function LoginPage() {
  // Production mein yahan useState use hoga form data ko handle karne ke liye

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yahan Backend API call hogi login ke liye
    console.log("Login attempted");
  };

  return (
    <AnimatedBackground>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-4 md:p-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl">
          <h2 className="text-3xl font-bold text-center mb-6 text-white">
            Welcome Back to AutoSRS
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 pl-10 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none transition text-white"
                  placeholder="Enter your email"
                  required
                />
                <User className="w-5 h-5 text-gray-300 absolute left-3 top-1/2 transform -translate-y-1/2" />
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
                  className="w-full p-3 pl-10 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none transition text-white"
                  placeholder="••••••••"
                  required
                />
                <Lock className="w-5 h-5 text-gray-300 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </div>

            <button 
                type="submit" 
                className="w-full py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-500/20"
            >
              Log In
            </button>
          </form>
          <p className="mt-6 text-center text-gray-400">
            Don't have an account? <Link href="/signup" className="text-blue-400 hover:underline">Sign up here</Link>
          </p>
        </div>
      </div>
    </AnimatedBackground>
  );
}