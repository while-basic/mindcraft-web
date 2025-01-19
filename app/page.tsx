'use client';

import { motion } from 'framer-motion';
import { BookOpenIcon, VideoCameraIcon, PhotoIcon, ArrowDownTrayIcon, UserGroupIcon, ChatBubbleBottomCenterTextIcon, CubeIcon, CommandLineIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useEffect } from 'react';

// Particle effect function
function createParticle(x: number, y: number) {
  const particle = document.createElement('div');
  particle.className = 'particle';
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;
  particle.style.setProperty('--x-end', `${(Math.random() - 0.5) * 100}px`);
  particle.style.animation = `particle 1s ease-out forwards`;
  return particle;
}

const features = [
  {
    title: 'Multi-Model Support',
    description: 'Compatible with leading LLMs including OpenAI, Google, Anthropic, Replicate, Ollama, Groq, Hugging Face, and more.',
    icon: CommandLineIcon,
  },
  {
    title: 'Meet Andy',
    description: 'Our main AI character who can understand complex tasks, chat naturally, and build amazing structures in Minecraft.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    title: 'Collaborative Building',
    description: 'Watch AI bots work together to create incredible Minecraft structures through natural language commands.',
    icon: CubeIcon,
  },
];

const sections = [
  {
    title: 'Documentation',
    icon: BookOpenIcon,
    description: 'Comprehensive guides and technical details about using AI in Minecraft.',
    color: 'from-[#2C4A1E] to-[#1E3311]',
    link: '/docs',
  },
  {
    title: 'Video Showcase',
    icon: VideoCameraIcon,
    description: 'Watch our AI builders in action through detailed tutorials and demonstrations.',
    color: 'from-[#4A3A1E] to-[#332912]',
    link: '/videos',
  },
  {
    title: 'AI Builds Gallery',
    icon: PhotoIcon,
    description: 'Explore amazing Minecraft creations built by our AI systems.',
    color: 'from-[#383838] to-[#242424]',
    link: '/gallery',
  },
  {
    title: 'Downloads',
    icon: ArrowDownTrayIcon,
    description: 'Get our AI models and tools to start building in your own Minecraft world.',
    color: 'from-[#1E2F0F] to-[#121D09]',
    link: '/downloads',
  },
  {
    title: 'Community',
    icon: UserGroupIcon,
    description: 'Join our growing community of AI and Minecraft enthusiasts.',
    color: 'from-[#1E2F49] to-[#131D2D]',
    link: '/community',
  },
];

export default function Home() {
  useEffect(() => {
    const container = document.querySelector('.particle-container');
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.85) { // Throttle particle creation
        const particle = createParticle(e.clientX, e.clientY);
        container.appendChild(particle);
        setTimeout(() => particle.remove(), 1000);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="min-h-screen pt-20 relative">
      {/* Particle Container */}
      <div className="particle-container" />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 minecraft-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-6xl font-minecraft mb-6 text-white minecraft-text">
              Mindcraft
            </h1>
            <p className="text-xl text-white minecraft-text mb-8 max-w-3xl mx-auto">
              Unleash the power of AI in Minecraft. Build, create, and explore with intelligent AI companions.
            </p>
            <motion.a
              href="https://github.com/kolbytn/mindcraft"
              target="_blank"
              rel="noopener noreferrer"
              className="minecraft-button inline-block text-lg px-8 py-4 hover:transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download on GitHub
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black bg-opacity-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-minecraft text-white minecraft-text mb-4">
              Features & Capabilities
            </h2>
            <p className="text-lg text-white text-opacity-90 max-w-2xl mx-auto">
              Mindcraft brings AI to life in the world of Minecraft.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="minecraft-container"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <feature.icon className="w-12 h-12 text-[#5C9C3E] mb-4" />
                <h3 className="text-xl font-minecraft text-white minecraft-text mb-2">
                  {feature.title}
                </h3>
                <p className="text-white text-opacity-90">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-minecraft text-white minecraft-text mb-4">
              Explore Mindcraft
            </h2>
            <p className="text-lg text-white text-opacity-90 max-w-2xl mx-auto">
              Discover all the amazing things you can do with Mindcraft.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <Link href={section.link} key={section.title}>
                <motion.div
                  className={`minecraft-container bg-gradient-to-br ${section.color} hover:brightness-125 transition-all cursor-pointer transform block-hover`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <section.icon className="w-8 h-8 text-white mb-4" />
                  <h3 className="text-2xl font-minecraft text-white minecraft-text mb-3 drop-shadow-lg">
                    {section.title}
                  </h3>
                  <p className="text-gray-200 text-opacity-100 text-lg leading-relaxed drop-shadow">
                    {section.description}
                  </p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-[#373737] bg-black bg-opacity-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        </div>
      </footer>
    </main>
  );
}
