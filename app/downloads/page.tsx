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
    category: 'AI Models',
    icon: CubeIcon,
    items: [
      {
        name: 'Castle Builder v1.0',
        description: 'Specialized in generating medieval and fantasy castles',
        size: '250MB',
        version: '1.0.0',
        requirements: 'Minecraft 1.19+',
        downloadUrl: '#',
      },
      {
        name: 'Modern Architecture Pack',
        description: 'Create contemporary buildings and structures',
        size: '180MB',
        version: '1.1.2',
        requirements: 'Minecraft 1.19+',
        downloadUrl: '#',
      },
    ],
  },
  {
    category: 'Tools & Utilities',
    icon: WrenchScrewdriverIcon,
    items: [
      {
        name: 'Mindcraft Builder Tool',
        description: 'GUI application for managing AI builds',
        size: '45MB',
        version: '2.0.1',
        requirements: 'Windows/Mac/Linux',
        downloadUrl: '#',
      },
      {
        name: 'World Editor Plugin',
        description: 'Integration plugin for Minecraft world editing',
        size: '15MB',
        version: '1.2.0',
        requirements: 'Minecraft 1.19+',
        downloadUrl: '#',
      },
    ],
  },
  {
    category: 'Documentation & Resources',
    icon: DocumentTextIcon,
    items: [
      {
        name: 'User Manual',
        description: 'Complete guide to using Mindcraft',
        size: '5MB',
        version: '2024.1',
        requirements: 'PDF Reader',
        downloadUrl: '#',
      },
      {
        name: 'API Documentation',
        description: 'Technical documentation for developers',
        size: '2MB',
        version: '2024.1',
        requirements: 'Web Browser',
        downloadUrl: '#',
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