import Link from "next/link";
import { Bot, ArrowRight, FileText, Zap } from "lucide-react";
import AnimatedBackground from "../components/AnimatedBackground.jsx"; // <-- Yahan change kiya hai

export default function LandingPage() {
  return (
    <AnimatedBackground>
      <nav className="flex items-center justify-between px-8 py-6 backdrop-blur-sm bg-white/5 border-b border-white/10">
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          AutoSRS.ai
        </div>
        <div className="space-x-4">
          <Link href="/login" className="px-4 py-2 hover:text-blue-300 transition">Login</Link>
          <Link href="/signup" className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition">Sign Up</Link>
        </div>
      </nav>

      <main className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Generate <span className="text-blue-500">IEEE 830</span> SRS <br /> in Minutes.
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mb-10">
          Convert your project ideas into a professional SRS document using AI.
        </p>

        {/* Copilot Action Button */}
        <Link href="/generator">
          <button className="group relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-lg font-semibold hover:scale-105 transition-all shadow-lg shadow-blue-500/30">
            <Bot className="w-6 h-6" />
            Launch AI Generator
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </button>
        </Link>
      </main>
    </AnimatedBackground>
  );
}