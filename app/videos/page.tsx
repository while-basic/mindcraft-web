'use client';

import { motion } from 'framer-motion';
import YouTube from 'react-youtube';

const videos = [
  {
    id: 'KxaPYhfJV4U',
    title: 'Mindcraft AI Builds a Castle in Minecraft',
    description: 'Watch as our AI assistant builds an impressive medieval castle structure.',
    tags: ['castle', 'medieval', 'large-scale'],
  },
  {
    id: 'uLRKXEHxZ-U',
    title: 'AI Builds a Fantasy Village',
    description: 'See how Mindcraft creates an entire fantasy village from scratch.',
    tags: ['village', 'fantasy', 'large-scale'],
  },
  {
    id: 'IeXadWbvDiE',
    title: 'Building a Modern House with AI',
    description: 'Mindcraft AI designs and constructs a contemporary house.',
    tags: ['modern', 'house', 'residential'],
  },
  {
    id: 'kbf9QJJn-UQ',
    title: 'AI Generated Tree House',
    description: 'Creating a magical tree house using Mindcraft AI.',
    tags: ['fantasy', 'nature', 'house'],
  },
  {
    id: 'VXQ-AnQ6N6A',
    title: 'Underground Base Build',
    description: 'Watch the AI construct an elaborate underground base.',
    tags: ['underground', 'base', 'large-scale'],
  },
  {
    id: 'Xd5PLYl4Q5Q',
    title: 'Mindcraft Installation Tutorial',
    description: 'Step-by-step guide to installing and setting up Mindcraft.',
    tags: ['tutorial', 'setup', 'guide'],
  },
  {
    id: 'NTHWMk5pcYs',
    title: 'AI Building Challenges',
    description: 'Testing Mindcraft AI with various building challenges.',
    tags: ['challenge', 'showcase', 'variety'],
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Videos() {
  return (
    <div className="space-y-8">
      <div className="minecraft-container">
        <h1 className="text-3xl font-minecraft text-minecraft-primary mb-4">
          Video Showcase
        </h1>
        <p className="text-minecraft-secondary mb-8">
          Watch our models in action as it creates amazing Minecraft builds. Learn techniques,
          get inspired, and see what is possible with Mindcraft.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {videos.map((video) => (
          <motion.div
            key={video.id}
            variants={item}
            className="minecraft-container overflow-hidden"
          >
            <div className="aspect-video mb-4">
              <YouTube
                videoId={video.id}
                className="w-full h-full"
                opts={{
                  width: '100%',
                  height: '100%',
                  playerVars: {
                    modestbranding: 1,
                  },
                }}
              />
            </div>
            <h2 className="text-xl font-minecraft text-minecraft-primary mb-2">
              {video.title}
            </h2>
            <p className="text-minecraft-secondary mb-4">{video.description}</p>
            <div className="flex flex-wrap gap-2">
              {video.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-minecraft-stone text-white rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 