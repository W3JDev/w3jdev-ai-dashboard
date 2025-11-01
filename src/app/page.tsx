'use client';

import React, { useState, useEffect } from 'react';

interface Repository {
  id: number;
  name: string;
  category: string;
  status: string;
  agent: string;
  deploymentPlatform: string;
  liveUrl: string;
  description: string;
  estimatedMRR: string;
}

interface Agent {
  id: number;
  name: string;
  specialization: string;
  totalTasks: number;
  completedTasks: number;
  successRate: number;
  repositoriesAssigned: number;
  status: string;
}

interface Activity {
  timestamp: string;
  repository: string;
  message: string;
}

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [agents, setAgents] = useState<Agent[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [chatMessages, setChatMessages] = useState<Array<{type: 'user' | 'agent', message: string, timestamp: string}>>([]);
  const [currentMessage, setCurrentMessage] = useState('');

  useEffect(() => {
    setRepositories([
      {
        id: 1, name: 'Waiter_Ai', category: 'F&B AI Solutions', 
        status: 'Complete', agent: 'Frontend Master', 
        deploymentPlatform: 'Vercel', liveUrl: 'https://waiter-ai.vercel.app',
        description: 'AI-powered Restaurant Virtual Wait Staff Assistant', 
        estimatedMRR: '$50-200/month'
      },
      {
        id: 2, name: 'FlairAi', category: 'Content Creation', 
        status: 'In Progress', agent: 'AI Integration Specialist',
        deploymentPlatform: 'Vercel', liveUrl: 'https://flair-ai.vercel.app',
        description: 'AI Content Creation & Social Media Management', 
        estimatedMRR: '$200-500/month'
      },
    ]);

    setAgents([
      {
        id: 1, name: '🧠 AI Integration Specialist', specialization: 'AI/ML Integration', 
        totalTasks: 45, completedTasks: 32, successRate: 89, repositoriesAssigned: 20, status: 'Active'
      },
      {
        id: 2, name: '🎨 Frontend Master', specialization: 'React, TypeScript, UI/UX', 
        totalTasks: 52, completedTasks: 41, successRate: 93, repositoriesAssigned: 25, status: 'Active'
      },
    ]);

    setActivities([
      {
        timestamp: '2025-01-11T17:15:00', 
        repository: 'Multi-AI-Autonomous-System', 
        message: '🚀 All 8 AI agents deployed successfully!'
      },
      {
        timestamp: '2025-01-11T17:00:00', 
        repository: 'Waiter_Ai', 
        message: '🧠 AI Integration Specialist analyzing upgrade opportunities'
      },
    ]);
  }, []);

  const sendMessage = () => {
    if (!currentMessage.trim()) return;
    
    const newMessage = {
      type: 'user' as const,
      message: currentMessage,
      timestamp: new Date().toISOString()
    };
    
    setChatMessages(prev => [...prev, newMessage]);
    
    setTimeout(() => {
      const agentResponse = {
        type: 'agent' as const,
        message: "🤖 Multi-AI Orchestrator here! I coordinate all 8 specialized agents. How can we help you today?",
        timestamp: new Date().toISOString()
      };
      setChatMessages(prev => [...prev, agentResponse]);
    }, 1000);
    
    setCurrentMessage('');
  };

  const executeAgentCommand = (command: string) => {
    const commandMessage = {
      type: 'user' as const,
      message: `Execute: ${command}`,
      timestamp: new Date().toISOString()
    };
    
    setChatMessages(prev => [...prev, commandMessage]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-200">
          <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold">
            W3
          </div>
          <div className="text-lg font-bold text-gray-900">W3JDev AI</div>
        </div>
        <nav>
          {[
            { id: 'dashboard', label: 'Dashboard', icon: '📊' },
            { id: 'repositories', label: 'Repositories', icon: '📁' },
            { id: 'agents', label: 'AI Agents', icon: '🤖' },
            { id: 'chat', label: 'Agent Chat', icon: '💬' },
            { id: 'analytics', label: 'Analytics', icon: '📈' },
            { id: 'deployments', label: 'Deployments', icon: '🚀' },
          ].map(item => (
            <div 
              key={item.id}
              className={`flex items-center gap-3 px-4 py-3 mb-1 rounded-lg cursor-pointer transition-colors ${
                currentPage === item.id ? 'bg-teal-500 text-white' : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setCurrentPage(item.id)}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-6">
        {/* Dashboard Page */}
        {currentPage === 'dashboard' && (
          <div>
            <div className="bg-gradient-to-r from-teal-500 to-teal-700 text-white p-8 rounded-xl mb-8">
              <h1 className="text-3xl font-bold mb-4">🚀 Multi-AI Autonomous System</h1>
              <p className="text-lg opacity-90 mb-8">
                8 Specialized AI Agents Managing 130+ Repositories • Generating Revenue 24/7
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg">
                  <div className="text-2xl font-bold">130+</div>
                  <div className="text-sm opacity-90">Repositories Managed</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg">
                  <div className="text-2xl font-bold">8</div>
                  <div className="text-sm opacity-90">AI Agents Active</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg">
                  <div className="text-2xl font-bold">$2.5K</div>
                  <div className="text-sm opacity-90">Monthly Revenue</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg">
                  <div className="text-2xl font-bold">94%</div>
                  <div className="text-sm opacity-90">Success Rate</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              {[
                { icon: '🚀', label: 'Deploy All', command: 'Deploy all pending repositories' },
                { icon: '💚', label: 'Health Check', command: 'Run comprehensive health checks' },
                { icon: '📊', label: 'Revenue Report', command: 'Generate revenue report' },
                { icon: '🔄', label: 'Sync GitHub', command: 'Sync with GitHub' },
              ].map((action, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 p-6 rounded-lg cursor-pointer hover:border-teal-500 hover:-translate-y-1 transition-all text-center"
                  onClick={() => executeAgentCommand(action.command)}
                >
                  <div className="text-2xl mb-2">{action.icon}</div>
                  <div className="font-medium">{action.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-6">🔥 Live Agent Activity</h2>
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <div key={index} className="flex gap-4 p-4 border-l-2 border-teal-500 relative">
                    <div className="absolute -left-2 top-5 w-4 h-4 bg-teal-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-500">
                        {new Date(activity.timestamp).toLocaleTimeString()}
                      </div>
                      <div className="font-medium text-gray-900">
                        <strong>{activity.repository}</strong>: {activity.message}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Chat Page */}
        {currentPage === 'chat' && (
          <div>
            <h1 className="text-2xl font-bold mb-6">💬 Agent Communication Center</h1>
            
            <div className="bg-white border border-gray-200 rounded-lg h-96 flex flex-col">
              <div className="flex-1 p-6 overflow-y-auto">
                {chatMessages.length === 0 ? (
                  <div className="text-center text-gray-500 mt-16">
                    <p className="text-lg mb-4">👋 Hello! I&apos;m your Multi-AI Orchestrator.</p>
                    <p className="mb-4">I coordinate 8 specialized AI agents to manage your entire portfolio.</p>
                    <div className="text-left max-w-md mx-auto">
                      <p className="font-semibold mb-2">Try these commands:</p>
                      <ul className="space-y-1 text-sm">
                        <li>&quot;Deploy my Waiter_Ai project&quot;</li>
                        <li>&quot;Add AI features to PUNCH-CLOCK&quot;</li>
                        <li>&quot;Update documentation for all repos&quot;</li>
                        <li>&quot;Show me revenue opportunities&quot;</li>
                        <li>&quot;Run quality tests on FlairAi&quot;</li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  chatMessages.map((msg, index) => (
                    <div key={index} className={`mb-4 flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-lg p-3 rounded-lg ${
                        msg.type === 'user' 
                          ? 'bg-teal-500 text-white' 
                          : 'bg-gray-100 text-gray-900'
                      }`}>
                        <div className="font-semibold text-sm mb-1">
                          {msg.type === 'user' ? '👤 You' : '🤖 AI Agent'}
                        </div>
                        <div>{msg.message}</div>
                        <div className="text-xs opacity-75 mt-1">
                          {new Date(msg.timestamp).toLocaleTimeString()}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
              
              <div className="p-4 border-t border-gray-200">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Tell your AI agents what to do..."
                    className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <button 
                    onClick={sendMessage}
                    className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other pages */}
        {currentPage !== 'dashboard' && currentPage !== 'chat' && (
          <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              {currentPage === 'repositories' && '📁 Repository Portfolio'}
              {currentPage === 'agents' && '🤖 AI Agent Command Center'}
              {currentPage === 'analytics' && '📈 Portfolio Analytics'}
              {currentPage === 'deployments' && '🚀 Live Deployments'}
            </h2>
            <p className="text-gray-600">This section is under development. Your AI agents are working on it!</p>
          </div>
        )}
      </main>
    </div>
  );
}
