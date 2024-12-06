import { TrafficConeIcon } from "lucide-react";
import React from "react";

export default function Production() {
  return (
    <div className="md:ml-64 xl:ml-68 min-h-screen flex flex-col items-center justify-center z-10 scroll-smooth bg-gradient-to-b from-gray-900 to-blue-900">
      <div className="flex flex-col items-center justify-center gap-8 text-blue-200 animate-fade-in">
        <div className="animate-bounce-slow">
          <TrafficConeIcon size={120} className="text-yellow-400" />
        </div>
        <h1 className="text-4xl font-bold text-white tracking-wider">Under Construction</h1>
        <p className="text-xl text-blue-200/80 text-center max-w-md">
          We're working hard to bring you something amazing. Check back soon!
        </p>
        <div className="mt-8 flex gap-4">
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-150"></div>
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
        </div>
      </div>
    </div>
  )
}
