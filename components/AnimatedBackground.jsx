"use client";
import { motion } from "framer-motion";
import { useMemo } from "react";

export default function AnimatedBackground({ children }) {
  // Generate random star positions
  const stars = useMemo(() => Array.from({ length: 50 }, (_, i) => ({
    id: i,
    // eslint-disable-next-line react-hooks/purity
    x: Math.random() * 100,
    // eslint-disable-next-line react-hooks/purity
    y: Math.random() * 100,
    // eslint-disable-next-line react-hooks/purity
    size: Math.random() * 2 + 1,
    // eslint-disable-next-line react-hooks/purity
    delay: Math.random() * 5,
    // eslint-disable-next-line react-hooks/purity
    duration: 2 + Math.random() * 3,
  })), []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white selection:bg-blue-500 selection:text-white">
      {/* Stars */}
      <div className="absolute inset-0 z-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
            }}
          />
        ))}
      </div>

      {/* Moving Gradients - Space Theme */}
      <div className="absolute inset-0 z-0 opacity-20">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 0],
            x: [0, 50, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[20%] h-[600px] w-[600px] rounded-full bg-gradient-to-r from-indigo-900 to-purple-900 blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            y: [0, -100, 0],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute top-[30%] right-[5%] h-[500px] w-[500px] rounded-full bg-gradient-to-r from-blue-900 to-cyan-900 blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -80, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] left-[10%] h-[400px] w-[400px] rounded-full bg-gradient-to-r from-purple-900 to-pink-900 blur-[120px]"
        />
      </div>

      {/* Floating Astronaut */}
      <motion.div
        className="absolute z-0 opacity-10"
        style={{ top: '20%', left: '70%' }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="relative">
          {/* Helmet */}
          <div className="w-16 h-16 bg-gray-700 rounded-full border-2 border-gray-500"></div>
          {/* Body */}
          <div className="w-8 h-12 bg-gray-600 mx-auto -mt-2 rounded-b-lg"></div>
          {/* Arms */}
          <div className="flex justify-between -mt-8">
            <div className="w-6 h-2 bg-gray-600 rounded-full"></div>
            <div className="w-6 h-2 bg-gray-600 rounded-full"></div>
          </div>
          {/* Legs */}
          <div className="flex justify-center -mt-1 space-x-1">
            <div className="w-3 h-6 bg-gray-600 rounded-b-full"></div>
            <div className="w-3 h-6 bg-gray-600 rounded-b-full"></div>
          </div>
        </div>
      </motion.div>
      
      {/* Content Wrapper */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
}