'use client';

import { motion } from 'framer-motion';
import { HeartIcon, ShareIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const builds = [
  {
    id: 1,
    title: 'Enchanted Forest Castle',
    creator: 'MindcraftAI',
    image: '/builds/castle.jpg', // Add actual images
    likes: 1234,
    category: 'Castle',
    description: 'A magical castle nestled in an enchanted forest, complete with floating islands and mystical gardens.',
  },
  {
    id: 2,
    title: 'Futuristic City District',
    creator: 'AIBuilder',
    image: '/builds/city.jpg',
    likes: 892,
    category: 'City',
    description: 'A sprawling cyberpunk-inspired city district with neon lights and floating structures.',
  },
  {
    id: 3,
    title: 'Ancient Temple Ruins',
    creator: 'TempleCrafter',
    image: '/builds/temple.jpg',
    likes: 567,
    category: 'Historical',
    description: 'Mysterious temple ruins with intricate details and hidden passages.',
  },
  // Add more builds
];

const categories = ['All', 'Castle', 'City', 'Historical', 'Fantasy', 'Modern'];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [likedBuilds, setLikedBuilds] = useState<number[]>([]);

  const filteredBuilds = selectedCategory === 'All'
    ? builds
    : builds.filter(build => build.category === selectedCategory);

  const toggleLike = (buildId: number) => {
    setLikedBuilds(prev =>
      prev.includes(buildId)
        ? prev.filter(id => id !== buildId)
        : [...prev, buildId]
    );
  };

  return (
    <div className="space-y-8">
      <div className="minecraft-container">
        <h1 className="text-3xl font-minecraft text-minecraft-primary mb-4">
          AI Builds Gallery
        </h1>
        <p className="text-minecraft-secondary mb-8">
          Explore amazing Minecraft creations generated by our AI. Get inspired and see
          what&apos;s possible with Mindcraft.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`minecraft-button ${
                selectedCategory === category ? 'bg-minecraft-primary' : ''
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredBuilds.map(build => (
          <motion.div
            key={build.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="minecraft-container group"
          >
            <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-minecraft-stone/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <button className="minecraft-button">View Details</button>
              </div>
              {/* Replace with actual image */}
              <div className="w-full h-full bg-minecraft-stone/20" />
            </div>
            <h2 className="text-xl font-minecraft text-minecraft-primary mb-2">
              {build.title}
            </h2>
            <p className="text-minecraft-secondary text-sm mb-4">
              by {build.creator}
            </p>
            <p className="text-minecraft-secondary mb-4">
              {build.description}
            </p>
            <div className="flex justify-between items-center">
              <button
                onClick={() => toggleLike(build.id)}
                className="flex items-center space-x-2 minecraft-button"
              >
                <HeartIcon
                  className={`h-5 w-5 ${
                    likedBuilds.includes(build.id) ? 'text-red-500' : ''
                  }`}
                />
                <span>{build.likes + (likedBuilds.includes(build.id) ? 1 : 0)}</span>
              </button>
              <button className="minecraft-button">
                <ShareIcon className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 