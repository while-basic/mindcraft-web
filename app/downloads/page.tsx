'use client';

import { motion } from 'framer-motion';
import {
  CloudArrowDownIcon,
  CubeIcon,
  WrenchScrewdriverIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';

const downloads = [
  {
    category: 'Models',
    icon: CubeIcon,
    items: [
      {
        name: 'Sweaterdog/Andy-v3.5-Beta',
        description: 'Sweaterdog fine tuned, Qwen2.5-7B-bnb-4bit',
        size: '15.2 GB',
        version: '1.0.0',
        requirements: 'Minecraft v1.20.4',
        downloadUrl: 'https://huggingface.co/Sweaterdog/Andy-v3.5-Beta/resolve/main/Andy-3.5-beta-10.F16.gguf?download=true',
      },
    ],
  },
  {
    category: 'Datasets',
    icon: WrenchScrewdriverIcon,
    items: [
      {
        name: 'Sweaterdog/MindCraft-LLM-tuning',
        description: 'Latest dataset from Sweaterdog',
        size: '270 kb',
        version: '1.0.0',
        requirements: 'Windows/Mac',
        downloadUrl: 'https://huggingface.co/datasets/Sweaterdog/MindCraft-LLM-tuning',
      },  
      {
        name: 'Sweaterdog/Andy-v3.5-Beta',
        description: 'Dataset from Sweaterdog',
        size: '4.01 MB',
        version: '1.0.0',
        requirements: 'Windows/Mac',
        downloadUrl: 'https://huggingface.co/datasets/Sweaterdog/Andy-v3.5-Beta',
      },
    ],
  },
  {
    category: 'Documentation & Resources',
    icon: DocumentTextIcon,
    items: [
      {
        name: 'Official Installation Video',
        description: 'Full start guide to installation',
        downloadUrl: 'https://www.youtube.com/watch?v=gRotoL8P8D8&t=1s',
      },
      {
        name: 'Github Repository',
        description: 'Technical documentation for developers',
        size: '',
        version: '',
        requirements: 'Web Browser',
        downloadUrl: 'https://github.com/kolbytn/mindcraft',
      },
    ],
  },
];

export default function Downloads() {
  return (
    <div className="space-y-8">
      <div className="minecraft-container">
        <h1 className="text-3xl font-minecraft text-minecraft-primary mb-4">
          Downloads
        </h1>
        <p className="text-minecraft-secondary mb-8">
          Download our AI models, tools, and resources to start building amazing
          Minecraft creations with Mindcraft.
        </p>
      </div>

      {downloads.map((section, sectionIndex) => (
        <motion.div
          key={section.category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: sectionIndex * 0.2 }}
          className="minecraft-container"
        >
          <div className="flex items-center mb-6">
            <section.icon className="h-8 w-8 text-minecraft-primary mr-3" />
            <h2 className="text-2xl font-minecraft text-minecraft-primary">
              {section.category}
            </h2>
          </div>

          <div className="grid gap-6">
            {section.items.map((item) => (
              <div
                key={item.name}
                className="border-2 border-minecraft-stone rounded-lg p-6 hover:border-minecraft-primary transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-minecraft text-minecraft-primary mb-2">
                      {item.name}
                    </h3>
                    <p className="text-minecraft-secondary">{item.description}</p>
                  </div>
                  <a
                    href={item.downloadUrl}
                    className="minecraft-button flex items-center space-x-2"
                  >
                    <CloudArrowDownIcon className="h-5 w-5" />
                    <span>Download</span>
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-4 text-sm text-minecraft-secondary">
                  <div>
                    <span className="font-semibold">Size:</span> {item.size}
                  </div>
                  <div>
                    <span className="font-semibold">Version:</span> {item.version}
                  </div>
                  <div>
                    <span className="font-semibold">Requires:</span>{' '}
                    {item.requirements}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}

      <div className="minecraft-container">
        <h2 className="text-2xl font-minecraft text-minecraft-primary mb-4">
          System Requirements
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-minecraft text-minecraft-secondary mb-2">
              Minimum Requirements
            </h3>
            <ul className="list-disc list-inside space-y-2 text-minecraft-secondary">
              <li>Minecraft 1.19 or higher</li>
              <li>4GB RAM</li>
              <li>Python 3.8+</li>
              <li>NVIDIA GPU with 4GB VRAM</li>
            </ul>
          </div>
          <div>
            <h3 className="font-minecraft text-minecraft-secondary mb-2">
              Recommended Requirements
            </h3>
            <ul className="list-disc list-inside space-y-2 text-minecraft-secondary">
              <li>Minecraft 1.20 or higher</li>
              <li>8GB RAM</li>
              <li>Python 3.10+</li>
              <li>NVIDIA GPU with 8GB VRAM</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 