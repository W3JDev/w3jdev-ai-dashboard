"use client";

import React, { useState } from "react";

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      <aside className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg border-r border-slate-200 p-6 z-10 text-slate-900">
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
            <button 
              key={item.id}
              type="button"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 w-full text-left ${
                currentPage === item.id 
                  ? "bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-md" 
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
              onClick={() => setCurrentPage(item.id)}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </button>
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

      <main className="ml-64 p-6 bg-slate-50 text-slate-900 min-h-screen">
        {/* Dashboard Page */}
        {currentPage === 'dashboard' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-teal-500 via-cyan-600 to-blue-600 text-white p-8 rounded-2xl shadow-lg border-2 border-slate-200">
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
                <div key={idx} className="bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 p-6 rounded-xl hover:bg-opacity-30 transition-all duration-300 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{stat.icon}</span>
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                  </div>
                  <div className="text-sm opacity-90 text-white">{stat.label}</div>
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
                    Live • Multi-AI-Autonomous-System
                  </div>
                  <div className="font-medium text-slate-800">🚀 All 8 AI agents deployed successfully!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        )}

        {/* Repositories Page */}
        {currentPage === 'repositories' && (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-800">📁 Repository Portfolio</h1>
              <p className="text-slate-600 mt-2">130+ repositories being managed by AI agents</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Multi-AI-Autonomous-System', stars: 1247, forks: 89, status: 'Active', revenue: '$340/mo', language: 'TypeScript' },
                { name: 'AI-Revenue-Generator', stars: 892, forks: 156, status: 'Active', revenue: '$680/mo', language: 'Python' },
                { name: 'Auto-Deploy-Framework', stars: 654, forks: 78, status: 'Active', revenue: '$250/mo', language: 'JavaScript' },
                { name: 'Smart-API-Manager', stars: 432, forks: 34, status: 'Monitoring', revenue: '$180/mo', language: 'Go' },
                { name: 'Code-Quality-AI', stars: 321, forks: 45, status: 'Active', revenue: '$120/mo', language: 'Rust' },
                { name: 'Cloud-Optimizer-Pro', stars: 567, forks: 67, status: 'Active', revenue: '$290/mo', language: 'Python' }
              ].map((repo, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-md border border-slate-200 p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-slate-800">{repo.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      repo.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
                    }`}>
                      {repo.status}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-slate-600">
                    <span className="flex items-center gap-1">
                      ⭐ {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      🍴 {repo.forks}
                    </span>
                    <span className="flex items-center gap-1">
                      💻 {repo.language}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-green-600">{repo.revenue}</span>
                    <button className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-4 py-2 rounded-lg text-sm hover:shadow-md transition-all duration-200">
                      Manage
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* AI Agents Page */}
        {currentPage === 'agents' && (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-800">🤖 AI Agent Command Center</h1>
              <p className="text-slate-600 mt-2">8 specialized AI agents working autonomously</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'Code Architect', role: 'Full-Stack Development', status: 'Active', tasks: 15, efficiency: '98%', specialty: 'React, Node.js, Python' },
                { name: 'Deploy Master', role: 'CI/CD & DevOps', status: 'Active', tasks: 8, efficiency: '95%', specialty: 'Docker, AWS, GitHub Actions' },
                { name: 'Quality Guardian', role: 'Code Review & Testing', status: 'Active', tasks: 22, efficiency: '97%', specialty: 'Testing, Security, Performance' },
                { name: 'Revenue Optimizer', role: 'Monetization Strategy', status: 'Active', tasks: 5, efficiency: '94%', specialty: 'Analytics, SEO, Marketing' }
              ].map((agent, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-md border border-slate-200 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800">{agent.name}</h3>
                      <p className="text-sm text-slate-600">{agent.role}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      agent.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
                    }`}>
                      {agent.status}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-600">Efficiency</span>
                      <span className="text-slate-800 font-semibold">{agent.efficiency}</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{ width: agent.efficiency }}></div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-slate-600 mb-1">Current Tasks: <span className="font-semibold text-slate-800">{agent.tasks}</span></p>
                    <p className="text-sm text-slate-600">Specialty: <span className="font-semibold text-slate-800">{agent.specialty}</span></p>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-2 rounded-lg text-sm hover:shadow-md transition-all duration-200">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Chat Page */}
        {currentPage === 'chat' && (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-800">💬 Agent Communication Center</h1>
              <p className="text-slate-600 mt-2">Chat directly with your AI agents and execute commands in real-time</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md border border-slate-200 h-96 flex flex-col">
              <div className="flex-1 p-6 overflow-y-auto">
                <div className="text-center text-slate-500 mt-16">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                    🤖
                  </div>
                  <p className="text-lg font-semibold mb-2 text-slate-800">👋 Hello! I&apos;m your Multi-AI Orchestrator.</p>
                  <p className="mb-4 text-slate-600">I coordinate 8 specialized AI agents to manage your entire portfolio.</p>
                  <div className="text-left max-w-md mx-auto bg-slate-50 p-4 rounded-lg">
                    <p className="font-semibold mb-2 text-slate-800">Try these commands:</p>
                    <ul className="space-y-1 text-sm text-slate-600">
                      <li>&quot;Deploy my projects&quot;</li>
                      <li>&quot;Add AI features&quot;</li>
                      <li>&quot;Update documentation&quot;</li>
                      <li>&quot;Show revenue opportunities&quot;</li>
                      <li>&quot;Run quality tests&quot;</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border-t border-slate-200">
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Tell your AI agents what to do..."
                    className="flex-1 p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-slate-800"
                  />
                  <button className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-md transition-all duration-200">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Analytics Page */}
        {currentPage === 'analytics' && (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-800">📈 Portfolio Analytics</h1>
              <p className="text-slate-600 mt-2">Real-time insights into your AI-managed portfolio</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                { title: 'Total Revenue', value: '$2,547', change: '+12.5%', icon: '💰', color: 'text-green-600' },
                { title: 'Active Projects', value: '130', change: '+8', icon: '📊', color: 'text-blue-600' },
                { title: 'Code Commits', value: '1,247', change: '+23%', icon: '🔄', color: 'text-purple-600' },
                { title: 'Success Rate', value: '94.2%', change: '+2.1%', icon: '🎯', color: 'text-emerald-600' }
              ].map((metric, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-md border border-slate-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{metric.icon}</span>
                    <span className={`text-sm font-semibold ${metric.color}`}>{metric.change}</span>
                  </div>
                  <div className="text-2xl font-bold text-slate-800 mb-1">{metric.value}</div>
                  <div className="text-sm text-slate-600">{metric.title}</div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Revenue Growth Trend</h3>
              <div className="h-64 flex items-end justify-between gap-2">
                {[65, 78, 82, 91, 88, 95, 100].map((height, idx) => (
                  <div key={idx} className="flex-1 bg-gradient-to-t from-teal-500 to-cyan-600 rounded-t-lg opacity-80 hover:opacity-100 transition-all duration-300" style={{ height: `${height}%` }}>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2 text-sm text-slate-600">
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'].map(month => (
                  <span key={month}>{month}</span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Deployments Page */}
        {currentPage === 'deployments' && (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-800">🚀 Live Deployments</h1>
              <p className="text-slate-600 mt-2">Monitor and manage all your deployed applications</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'W3JDev AI Dashboard', url: 'w3jdev-ai-dashboard.vercel.app', status: 'Live', uptime: '99.9%', lastDeploy: '2 hours ago', env: 'Production' },
                { name: 'Revenue API', url: 'api.w3jdev.com', status: 'Live', uptime: '100%', lastDeploy: '1 day ago', env: 'Production' },
                { name: 'Code Quality Bot', url: 'bot.w3jdev.com', status: 'Live', uptime: '98.7%', lastDeploy: '3 hours ago', env: 'Production' },
                { name: 'Analytics Service', url: 'analytics.w3jdev.com', status: 'Live', uptime: '99.8%', lastDeploy: '5 hours ago', env: 'Production' }
              ].map((deployment, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-md border border-slate-200 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-slate-800">{deployment.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      deployment.status === 'Live' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {deployment.status}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-slate-600 mb-2">🌐 {deployment.url}</p>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-600">Uptime</span>
                      <span className="text-slate-800 font-semibold">{deployment.uptime}</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-slate-200 pt-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-600">Last Deploy: {deployment.lastDeploy}</span>
                      <span className={`px-2 py-1 rounded text-xs ${
                        deployment.env === 'Production' ? 'bg-purple-100 text-purple-800' : 'bg-orange-100 text-orange-800'
                      }`}>
                        {deployment.env}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
