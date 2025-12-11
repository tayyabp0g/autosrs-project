"use client";
import { motion } from "framer-motion";

export default function AnimatedBackground({ children }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gray-900 text-white selection:bg-blue-500 selection:text-white">
      {/* Moving Gradients */}
      <div className="absolute inset-0 z-0 opacity-30">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] h-[500px] w-[500px] rounded-full bg-purple-600 blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            x: [0, 100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] right-[10%] h-[400px] w-[400px] rounded-full bg-blue-600 blur-[100px]"
        />
      </div>
      
      {/* Content Wrapper */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
}