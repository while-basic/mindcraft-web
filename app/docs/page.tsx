'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const docs = [
  {
    title: 'Getting Started',
    sections: [
      { title: 'Introduction', content: 'Learn about Mindcraft and how AI can revolutionize your Minecraft builds.' },
      { title: 'Installation', content: 'Step-by-step guide to installing and setting up Mindcraft.' },
      { title: 'Quick Start', content: 'Create your first AI-powered build in minutes.' },
    ],
  },
  {
    title: 'Core Concepts',
    sections: [
      { title: 'AI Models', content: 'Understanding the AI models that power Mindcraft.' },
      { title: 'Building Styles', content: 'Different architectural styles and building patterns.' },
      { title: 'Customization', content: 'How to customize and fine-tune the AI for your needs.' },
    ],
  },
  {
    title: 'Advanced Topics',
    sections: [
      { title: 'Custom Models', content: 'Creating and training your own AI models.' },
      { title: 'Integration', content: 'Integrating Mindcraft with other Minecraft mods.' },
      { title: 'Performance', content: 'Optimizing performance and handling large builds.' },
    ],
  },
];

export default function Documentation() {
  const [activeSection, setActiveSection] = useState(docs[0].sections[0]);

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Sidebar */}
      <div className="w-full md:w-64 flex-shrink-0">
        <div className="minecraft-container">
          {docs.map((category) => (
            <div key={category.title} className="mb-6">
              <h3 className="font-minecraft text-lg text-minecraft-primary mb-2">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.sections.map((section) => (
                  <li key={section.title}>
                    <button
                      onClick={() => setActiveSection(section)}
                      className={`w-full text-left px-3 py-2 rounded ${
                        activeSection === section
                          ? 'minecraft-button bg-minecraft-primary'
                          : 'minecraft-button'
                      }`}
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <motion.div
        key={activeSection.title}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="flex-grow"
      >
        <div className="minecraft-container">
          <h1 className="text-3xl font-minecraft text-minecraft-primary mb-4">
            {activeSection.title}
          </h1>
          <div className="prose prose-lg">
            <p>{activeSection.content}</p>
            {/* Add more detailed content for each section */}
            <div className="mt-8">
              <h2 className="text-xl font-minecraft text-minecraft-secondary mb-4">
                Example Usage
              </h2>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Example code or configuration
mindcraft.initialize({
  model: "castle-builder-v1",
  style: "medieval",
  size: "large"
});

mindcraft.build();`}</code>
              </pre>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 