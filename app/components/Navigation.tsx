'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpenIcon, VideoCameraIcon, PhotoIcon, ArrowDownTrayIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { clsx } from 'clsx';

const navigation = [
  { name: 'Documentation', href: '/docs', icon: BookOpenIcon },
  { name: 'Videos', href: '/videos', icon: VideoCameraIcon },
  { name: 'Gallery', href: '/gallery', icon: PhotoIcon },
  { name: 'Downloads', href: '/downloads', icon: ArrowDownTrayIcon },
  { name: 'Community', href: '/community', icon: UserGroupIcon },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-minecraft-stone bg-opacity-90 shadow-minecraft mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="font-minecraft text-2xl text-white">Mindcraft</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={clsx(
                      'minecraft-button group flex items-center px-3 py-2 text-sm font-minecraft',
                      {
                        'bg-minecraft-primary': isActive,
                        'hover:bg-minecraft-primary/80': !isActive,
                      }
                    )}
                  >
                    <item.icon className="h-5 w-5 mr-2" aria-hidden="true" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 