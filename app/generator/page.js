"use client";
import { useState } from "react";
import { Send, Menu, Plus, MessageSquare, FileText, Download, User } from "lucide-react";
import { motion } from "framer-motion";

export default function GeneratorPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [input, setInput] = useState("");
  
  // Dummy history data
  const history = ["E-Commerce SRS", "Hospital Mgmt System", "Portfolio Website"];

  return (
    <div className="flex h-screen bg-gray-900 text-white overflow-hidden font-sans">
      
      {/* Sidebar - ChatGPT Style */}
      <motion.aside 
        initial={{ width: 260 }}
        animate={{ width: isSidebarOpen ? 260 : 0 }}
        className="bg-black/50 border-r border-white/10 flex flex-col overflow-hidden"
      >
        <div className="p-4">
          <button className="flex items-center gap-2 w-full px-4 py-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition text-sm">
            <Plus className="w-4 h-4" />
            <span>New Project</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-2">
          <div className="text-xs font-semibold text-gray-500 px-4 py-2">History</div>
          {history.map((item, idx) => (
            <button key={idx} className="flex items-center gap-3 w-full px-4 py-3 text-gray-300 hover:bg-white/5 rounded-lg text-sm transition overflow-hidden whitespace-nowrap">
              <MessageSquare className="w-4 h-4 shrink-0" />
              {item}
            </button>
          ))}
        </div>

        <div className="p-4 border-t border-white/10">
          <button className="flex items-center gap-3 w-full px-2 py-2 hover:bg-white/5 rounded-lg transition">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
              <User className="w-4 h-4" />
            </div>
            <div className="text-sm text-left">
              <div className="font-medium">User Name</div>
              <div className="text-xs text-gray-400">Free Plan</div>
            </div>
          </button>
        </div>
      </motion.aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col relative">
        {/* Header */}
        <header className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-gray-900/50 backdrop-blur">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-white/10 rounded-lg text-gray-400">
              <Menu className="w-5 h-5" />
            </button>
            <span className="font-semibold text-gray-200">AI SRS Generator</span>
          </div>
          {/* Export Button - SRS FR-8, FR-9 [cite: 272, 276] */}
          <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400" title="Export SRS">
            <Download className="w-5 h-5" />
          </button>
        </header>

        {/* Chat Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
          {input.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <FileText className="w-8 h-8 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold">What project are we building today?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl w-full">
                <CardExample text="Create an SRS for a Food Delivery App." />
                <CardExample text="Build requirements for an IoT System." />
              </div>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto space-y-6">
               <div className="flex gap-4 justify-end">
                  <div className="bg-blue-600 px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%]">
                    {input}
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center shrink-0">AI</div>
                  <div className="bg-white/5 px-4 py-2 rounded-2xl rounded-tl-sm max-w-[80%]">
                    Analyzing...
                  </div>
               </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-white/10 bg-gray-900">
          <div className="max-w-3xl mx-auto relative">
            <textarea
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-4 pr-12 py-3 focus:outline-none focus:border-blue-500 resize-none text-gray-200"
              placeholder="Describe your project here..."
              rows={1}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="absolute right-3 bottom-3 p-1.5 bg-blue-600 rounded-lg hover:bg-blue-700 transition" disabled={!input}>
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

// Helper component
function CardExample({ text }) {
  return (
    <button className="p-4 text-sm text-left bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition">
      {text}
    </button>
  );
}