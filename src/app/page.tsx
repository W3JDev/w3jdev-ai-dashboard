"use client";

import React, { useState } from "react";

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  return (
    <div className="min-h-screen bg-slate-50">
      <aside className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg border-r border-slate-200 p-6 z-10">
        <div className="flex items-center gap-3 mb-8 pb-6 border-b border-slate-200">
          <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            W3
          </div>
          <div className="text-lg font-bold text-slate-800">W3JDev AI</div>
        </div>
        <nav className="space-y-2">
          {[
            { id: "dashboard", label: "Dashboard", icon: "📊" },
            { id: "repositories", label: "Repositories", icon: "📁" },
            { id: "agents", label: "AI Agents", icon: "🤖" },
            { id: "chat", label: "Agent Chat", icon: "💬" },
            { id: "analytics", label: "Analytics", icon: "📈" },
            { id: "deployments", label: "Deployments", icon: "🚀" },
          ].map(item => (
            <div 
              key={item.id}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 ${
                currentPage === item.id 
                  ? "bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-md" 
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
              onClick={() => setCurrentPage(item.id)}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </div>
          ))}
        </nav>
        
        <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-800 font-semibold text-sm">System Status</span>
          </div>
          <p className="text-green-700 text-xs">All 8 agents operational</p>
          <p className="text-green-700 text-xs">130+ repos monitored</p>
        </div>
      </aside>

      <main className="ml-64 p-6">
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-teal-500 via-cyan-600 to-blue-600 text-white p-8 rounded-2xl shadow-lg">
            <h1 className="text-4xl font-bold mb-4">🚀 Multi-AI Autonomous System</h1>
            <p className="text-xl opacity-90 mb-8">
              8 Specialized AI Agents Managing 130+ Repositories • Generating Revenue 24/7
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { value: "130+", label: "Repositories Managed", icon: "📁" },
                { value: "8", label: "AI Agents Active", icon: "🤖" },
                { value: "$2.5K", label: "Monthly Revenue", icon: "💰" },
                { value: "94%", label: "Success Rate", icon: "🎯" }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{stat.icon}</span>
                    <div className="text-3xl font-bold">{stat.value}</div>
                  </div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { icon: "🚀", label: "Deploy All", color: "from-blue-500 to-blue-600" },
              { icon: "💚", label: "Health Check", color: "from-green-500 to-green-600" },
              { icon: "📊", label: "Revenue Report", color: "from-purple-500 to-purple-600" },
              { icon: "🔄", label: "Sync GitHub", color: "from-orange-500 to-orange-600" },
            ].map((action, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-r ${action.color} text-white p-6 rounded-xl cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center`}
              >
                <div className="text-3xl mb-3">{action.icon}</div>
                <div className="font-semibold text-lg">{action.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-2">
              🔥 Live Agent Activity
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Live</span>
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-slate-50 rounded-lg border-l-4 border-teal-500">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-slate-500 mb-1">
                    {new Date().toLocaleTimeString()} • Multi-AI-Autonomous-System
                  </div>
                  <div className="font-medium text-slate-800">🚀 All 8 AI agents deployed successfully!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
