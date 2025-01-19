'use client';

import { motion } from 'framer-motion';
import YouTube from 'react-youtube';

const videos = [
  {
    id: 'VIDEO_ID_1',
    title: 'Building a Medieval Castle with AI',
    description: 'Watch as our AI generates and builds an entire medieval castle in minutes.',
    tags: ['castle', 'medieval', 'large-scale'],
  },
  {
    id: 'VIDEO_ID_2',
    title: 'Modern House Generation',
    description: 'See how Mindcraft creates contemporary house designs automatically.',
    tags: ['modern', 'house', 'residential'],
  },
  {
    id: 'VIDEO_ID_3',
    title: 'Fantasy Tree House Tutorial',
    description: 'Learn how to use Mindcraft to create magical tree houses in your world.',
    tags: ['fantasy', 'tutorial', 'nature'],
  },
  // Add more videos as needed
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
          Watch our AI in action as it creates amazing Minecraft builds. Learn techniques,
          get inspired, and see what's possible with Mindcraft.
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