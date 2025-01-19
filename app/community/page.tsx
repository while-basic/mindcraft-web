'use client';

import { motion } from 'framer-motion';
import {
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  GlobeAltIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';

const communityFeatures = [
  {
    title: 'Discord Community',
    description: 'Join our active Discord server to connect with other Mindcraft users, share your builds, and get help.',
    icon: ChatBubbleLeftRightIcon,
    action: {
      text: 'Join Discord',
      url: 'https://discord.gg/qEYWsABk',
    },
  },
  {
    title: 'Build Showcase',
    description: 'Share your generated builds with the community and get feedback from other builders.',
    icon: GlobeAltIcon,
    action: {
      text: 'View Showcase',
      url: '/gallery',
    },
  },
  {
    title: 'Learning Resources',
    description: 'Access tutorials, guides, and tips created by the community for better AI building.',
    icon: AcademicCapIcon,
    action: {
      text: 'Browse Resources',
      url: '/docs',
    },
  },
  {
    title: 'Events & Challenges',
    description: 'Participate in building challenges and community events to showcase your skills.',
    icon: UserGroupIcon,
    action: {
      text: 'View Events',
      url: '#events',
    },
  },
];

const upcomingEvents = [
  {
    title: 'Castle Building Challenge',
    date: '2024-02-01',
    description: 'Create the most impressive castle using Mindcraft AI. Community voting for the best builds.',
    prize: '1st Place: Custom Discord Role + Feature on Website',
  },
  {
    title: 'AI Building Workshop',
    date: '2024-02-15',
    description: 'Learn advanced techniques for controlling and customizing AI builds.',
    prize: 'Live Q&A with Mindcraft developers',
  },
];

export default function Community() {
  return (
    <div className="space-y-8">
      <div className="minecraft-container">
        <h1 className="text-3xl font-minecraft text-minecraft-primary mb-4">
          Join Our Community
        </h1>
        <p className="text-minecraft-secondary mb-8">
          Connect with other Mindcraft users, share your creations, and learn from the
          community. Join us in building the future of Minecraft with AI.
        </p>
      </div>

      {/* Community Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {communityFeatures.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="minecraft-container"
          >
            <feature.icon className="h-8 w-8 text-minecraft-primary mb-4" />
            <h2 className="text-xl font-minecraft text-minecraft-primary mb-2">
              {feature.title}
            </h2>
            <p className="text-minecraft-secondary mb-4">{feature.description}</p>
            <a
              href={feature.action.url}
              className="minecraft-button inline-block"
            >
              {feature.action.text}
            </a>
          </motion.div>
        ))}
      </div>

      {/* Discord Embed */}
      <div className="minecraft-container">
        <h2 className="text-2xl font-minecraft text-minecraft-primary mb-4">
          Live Discord Chat
        </h2>
        <div className="aspect-video rounded-lg overflow-hidden bg-minecraft-stone/20">
          <iframe
            src="https://discord.com/widget?id=YOUR_DISCORD_SERVER_ID&theme=dark"
            width="100%"
            height="100%"
            allowTransparency={true}
            frameBorder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          />
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="minecraft-container">
        <h2 className="text-2xl font-minecraft text-minecraft-primary mb-4">
          Upcoming Events
        </h2>
        <div className="space-y-6">
          {upcomingEvents.map((event) => (
            <div
              key={event.title}
              className="border-2 border-minecraft-stone rounded-lg p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-minecraft text-minecraft-primary mb-2">
                    {event.title}
                  </h3>
                  <p className="text-minecraft-secondary">{event.description}</p>
                </div>
                <div className="text-right">
                  <div className="font-minecraft text-minecraft-secondary">
                    {new Date(event.date).toLocaleDateString()}
                  </div>
                  <div className="text-sm text-minecraft-primary mt-2">
                    {event.prize}
                  </div>
                </div>
              </div>
              <button className="minecraft-button">Register Now</button>
            </div>
          ))}
        </div>
      </div>

      {/* Community Guidelines */}
      <div className="minecraft-container">
        <h2 className="text-2xl font-minecraft text-minecraft-primary mb-4">
          Community Guidelines
        </h2>
        <ul className="list-disc list-inside space-y-2 text-minecraft-secondary">
          <li>Be respectful and helpful to other community members</li>
          <li>Share your knowledge and experiences with AI building</li>
          <li>Give credit when using or modifying others&apos; builds</li>
          <li>Report any issues or bugs through the appropriate channels</li>
          <li>Follow Minecraft&apos;s terms of service and guidelines</li>
        </ul>
      </div>
    </div>
  );
} 