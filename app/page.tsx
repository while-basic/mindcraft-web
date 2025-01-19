'use client';

import { motion } from 'framer-motion';
import { BookOpenIcon, VideoCameraIcon, PhotoIcon, ArrowDownTrayIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const sections = [
  {
    title: 'Documentation',
    icon: BookOpenIcon,
    description: 'Comprehensive guides and technical details about using AI in Minecraft.',
    color: 'bg-minecraft-grass',
  },
  {
    title: 'Video Showcase',
    icon: VideoCameraIcon,
    description: 'Watch our AI builders in action through detailed tutorials and demonstrations.',
    color: 'bg-minecraft-wood',
  },
  {
    title: 'AI Builds Gallery',
    icon: PhotoIcon,
    description: 'Explore amazing Minecraft creations built by our AI systems.',
    color: 'bg-minecraft-stone',
  },
  {
    title: 'Downloads',
    icon: ArrowDownTrayIcon,
    description: 'Get our AI models and tools to start building in your own Minecraft world.',
    color: 'bg-minecraft-leaves',
  },
  {
    title: 'Community',
    icon: UserGroupIcon,
    description: 'Join our growing community of AI and Minecraft enthusiasts.',
    color: 'bg-minecraft-water',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <motion.h1 
          className="text-6xl font-minecraft mb-4 text-minecraft-primary"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Mindcraft
        </motion.h1>
        <motion.p 
          className="text-xl text-minecraft-secondary max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Building the future of Minecraft with AI
        </motion.p>
      </section>

      {/* Featured Video */}
      <section className="mb-16">
        <div className="aspect-video rounded-lg overflow-hidden shadow-minecraft bg-black">
          {/* Replace VIDEO_ID with your actual YouTube video ID */}
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="Featured Mindcraft Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* Main Sections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            className={`p-6 rounded-lg shadow-minecraft ${section.color} bg-opacity-90 hover:bg-opacity-100 transition-all cursor-pointer`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <section.icon className="w-12 h-12 text-white mb-4" />
            <h2 className="text-2xl font-minecraft text-white mb-2">{section.title}</h2>
            <p className="text-white text-opacity-90">{section.description}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
