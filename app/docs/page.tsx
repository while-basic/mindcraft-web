'use client';

import { motion } from 'framer-motion';
import { Tab } from '@headlessui/react';
import { CodeBracketIcon, ExclamationTriangleIcon, CpuChipIcon, CommandLineIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

interface TabItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

const tabs: TabItem[] = [
  { name: 'Getting Started', icon: CommandLineIcon },
  { name: 'Requirements', icon: CpuChipIcon },
  { name: 'Installation', icon: WrenchScrewdriverIcon },
  { name: 'Configuration', icon: CodeBracketIcon },
];

const supportedModels = [
  { api: 'OpenAI', key: 'OPENAI_API_KEY', model: 'gpt-4-turbo', docs: 'https://platform.openai.com/docs/models' },
  { api: 'Google', key: 'GEMINI_API_KEY', model: 'gemini-pro', docs: 'https://ai.google.dev/gemini-api/docs/models/gemini' },
  { api: 'Anthropic', key: 'ANTHROPIC_API_KEY', model: 'claude-3-haiku-20240307', docs: 'https://docs.anthropic.com/claude/docs/models-overview' },
  { api: 'Replicate', key: 'REPLICATE_API_KEY', model: 'meta/meta-llama-3-70b-instruct', docs: 'https://replicate.com/collections/language-models' },
  { api: 'Ollama (local)', key: 'n/a', model: 'llama3', docs: 'https://ollama.com/library' },
  { api: 'Groq', key: 'GROQCLOUD_API_KEY', model: 'groq/mixtral-8x7b-32768', docs: 'https://console.groq.com/docs/models' },
  { api: 'Hugging Face', key: 'HUGGINGFACE_API_KEY', model: 'huggingface/mistralai/Mistral-Nemo-Instruct-2407', docs: 'https://huggingface.co/models' },
  { api: 'Novita AI', key: 'NOVITA_API_KEY', model: 'gryphe/mythomax-l2-13b', docs: 'https://novita.ai/model-api/product/llm-api' },
  { api: 'Qwen', key: 'QWEN_API_KEY', model: 'qwen-max', docs: 'https://www.alibabacloud.com/help/en/model-studio/developer-reference/use-qwen-by-calling-api' },
  { api: 'Mistral', key: 'MISTRAL_API_KEY', model: 'mistral-large-latest', docs: 'https://docs.mistral.ai/getting-started/models/models_overview/' },
  { api: 'xAI', key: 'XAI_API_KEY', model: 'grok-beta', docs: 'https://docs.x.ai/docs' },
];

export default function Documentation() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col lg:flex-row lg:gap-8">
          <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
            {/* Sidebar */}
            <div className="lg:w-64 mb-8 lg:mb-0">
              <div className="sticky top-24">
                <Tab.List className="flex lg:flex-col space-x-2 lg:space-x-0 lg:space-y-2 rounded-xl bg-black bg-opacity-50 p-1">
                  {tabs.map((tabItem) => (
                    <Tab
                      key={tabItem.name}
                      className={({ selected }: { selected: boolean }) =>
                        `minecraft-button flex items-center px-4 py-2.5 text-sm leading-5 ${
                          selected
                            ? 'bg-[#2C4A1E] text-white'
                            : 'text-white hover:bg-white/[0.12]'
                        }`
                      }
                    >
                      <tabItem.icon className="w-5 h-5 mr-2" />
                      {tabItem.name}
                    </Tab>
                  ))}
                </Tab.List>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h1 className="text-4xl font-minecraft text-white minecraft-text mb-8">
                Documentation
              </h1>

              <Tab.Panels>
                {/* Getting Started */}
                <Tab.Panel>
                  <div className="prose prose-invert max-w-none">
                    <div className="minecraft-container bg-red-900 bg-opacity-20 mb-8">
                      <div className="flex items-start">
                        <ExclamationTriangleIcon className="w-6 h-6 text-red-500 mr-3 mt-1" />
                        <div>
                          <h3 className="text-xl font-minecraft text-red-500 mb-2">Warning</h3>
                          <p className="text-gray-200">
                            Do not connect this bot to public servers with coding enabled. This project allows an LLM to write/execute code on your computer. 
                            While the code is sandboxed, it is still vulnerable to injection attacks on public servers. Code writing is disabled by default, 
                            you can enable it by setting `allow_insecure_coding` to `true` in `settings.js`. We strongly recommend running with additional 
                            layers of security such as docker containers.
                          </p>
                        </div>
                      </div>
                    </div>

                    <h2 className="text-2xl font-minecraft text-white minecraft-text mb-4">
                      Overview
                    </h2>
                    <p className="text-gray-200 mb-6">
                      Mindcraft is a powerful tool that brings AI capabilities to Minecraft, allowing you to create intelligent bots that can understand,
                      build, and interact within the game world. Created by Kolby Nottingham and Max Robinson, it supports multiple LLM backends and
                      provides a flexible framework for AI-powered Minecraft automation.
                    </p>
                  </div>
                </Tab.Panel>

                {/* Requirements */}
                <Tab.Panel>
                  <div className="prose prose-invert max-w-none">
                    <h2 className="text-2xl font-minecraft text-white minecraft-text mb-4">
                      System Requirements
                    </h2>
                    <ul className="list-disc list-inside text-gray-200 mb-6 space-y-2">
                      <li>Minecraft Java Edition (up to v1.21.1, recommend v1.20.4)</li>
                      <li>Node.js Installed (at least v14)</li>
                      <li>One of the supported LLM API keys (see below)</li>
                    </ul>

                    <h3 className="text-xl font-minecraft text-white minecraft-text mb-4">
                      Supported Language Models
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-700">
                        <thead>
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-minecraft text-gray-300 uppercase tracking-wider">API</th>
                            <th className="px-6 py-3 text-left text-xs font-minecraft text-gray-300 uppercase tracking-wider">Config Variable</th>
                            <th className="px-6 py-3 text-left text-xs font-minecraft text-gray-300 uppercase tracking-wider">Example Model</th>
                            <th className="px-6 py-3 text-left text-xs font-minecraft text-gray-300 uppercase tracking-wider">Documentation</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-700">
                          {supportedModels.map((model, index) => (
                            <tr key={model.api} className={index % 2 === 0 ? 'bg-black bg-opacity-50' : ''}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">{model.api}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-200">{model.key}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">{model.model}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                                <a href={model.docs} target="_blank" rel="noopener noreferrer" className="text-[#5C9C3E] hover:text-[#7AC952]">
                                  View Docs →
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Tab.Panel>

                {/* Installation */}
                <Tab.Panel>
                  <div className="prose prose-invert max-w-none">
                    <h2 className="text-2xl font-minecraft text-white minecraft-text mb-4">
                      Installation Steps
                    </h2>
                    <ol className="list-decimal list-inside text-gray-200 mb-6 space-y-4">
                      <li>Make sure you have all the requirements installed</li>
                      <li>Clone or download the repository from GitHub</li>
                      <li>Rename `keys.example.json` to `keys.json` and fill in your API keys (you only need one)</li>
                      <li>In terminal/command prompt, run `npm install` from the installed directory</li>
                      <li>Start a minecraft world and open it to LAN on localhost port `55916`</li>
                      <li>Run `node main.js` from the installed directory</li>
                    </ol>

                    <div className="minecraft-container bg-[#2C4A1E] bg-opacity-20 mb-8">
                      <h3 className="text-xl font-minecraft text-white mb-4">Using Docker</h3>
                      <p className="text-gray-200 mb-4">
                        If you intend to use `allow_insecure_coding`, it is recommended to run the app in a docker container:
                      </p>
                      <pre className="bg-black bg-opacity-50 p-4 rounded overflow-x-auto">
                        <code className="text-gray-200">
                          docker run -i -t --rm -v $(pwd):/app -w /app -p 3000-3003:3000-3003 node:latest node main.js
                        </code>
                      </pre>
                      <p className="text-gray-200 mt-4">
                        Or simply use:
                      </p>
                      <pre className="bg-black bg-opacity-50 p-4 rounded overflow-x-auto">
                        <code className="text-gray-200">
                          docker-compose up
                        </code>
                      </pre>
                    </div>
                  </div>
                </Tab.Panel>

                {/* Configuration */}
                <Tab.Panel>
                  <div className="prose prose-invert max-w-none">
                    <h2 className="text-2xl font-minecraft text-white minecraft-text mb-4">
                      Configuration
                    </h2>
                    
                    <h3 className="text-xl font-minecraft text-white mb-4">Bot Profiles</h3>
                    <p className="text-gray-200 mb-4">
                      Bot profiles are JSON files (such as `andy.json`) that define:
                    </p>
                    <ul className="list-disc list-inside text-gray-200 mb-6 space-y-2">
                      <li>Bot backend LLMs to use for chat and embeddings</li>
                      <li>Prompts used to influence the bot behavior</li>
                      <li>Examples help the bot perform tasks</li>
                    </ul>

                    <h3 className="text-xl font-minecraft text-white mb-4">Online Servers</h3>
                    <p className="text-gray-200 mb-4">
                      To connect to online servers, your bot will need an official Microsoft/Minecraft account. Update these lines in &apos;settings.js&apos;:
                    </p>
                    <pre className="bg-black bg-opacity-50 p-4 rounded overflow-x-auto mb-4">
                      <code className="text-gray-200">
                        {`"host": "111.222.333.444",\n"port": 55920,\n"auth": "microsoft",`}
                      </code>
                    </pre>
                    <p className="text-gray-200">
                      Important: Bot&apos;s name in the profile.json must exactly match the Minecraft profile name!
                    </p>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </div>
          </Tab.Group>
        </div>
      </motion.div>
    </div>
  );
} 