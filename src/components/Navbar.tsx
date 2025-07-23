'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  {
    name: 'Products',
    href: '#',
    submenu: [
      {
        category: 'AI Laptops',
        items: [
          { name: 'IPBook AI 14"', href: '/products/ipbook-ai-14' },
          { name: 'IPBook AI 15"', href: '/products/ipbook-ai-15' },
          { name: 'IPBook AI 16"', href: '/products/ipbook-ai-16' },
        ]
      },
      {
        category: 'Gaming Laptops',
        items: [
          { name: 'IPBook 15" G-Series', href: '/products/ipbook-15-g-series' },
          { name: 'IPBook 16" G-Series', href: '/products/ipbook-16-g-series' },
          { name: 'IPBook 18" G-Series', href: '/products/ipbook-18-g-series' },
        ]
      },
      {
        category: 'AI PCs & Desktops',
        items: [
          { name: 'IPCentre 300 AI Series', href: '/products/ipcentre-300-ai' },
          { name: 'IPCentre 500 AI Series', href: '/products/ipcentre-500-ai' },
          { name: 'IPCentre Micro Form Factor', href: '/products/ipcentre-micro' },
          { name: 'IPCentre Small Form Factor', href: '/products/ipcentre-small' },
        ]
      },
      {
        category: 'Mini PCs',
        items: [
          { name: 'Mini PC AI Series', href: '/products/mini-pc-ai' },
          { name: 'Mini PCs for Education', href: '/products/mini-pc-education' },
          { name: 'Mini PCs for Professionals', href: '/products/mini-pc-professional' },
          { name: 'Industrial Mini PCs', href: '/products/mini-pc-industrial' },
        ]
      },
      {
        category: 'AI All-in-One PCs',
        items: [
          { name: 'IPStation AI 24"', href: '/products/ipstation-ai-24' },
          { name: 'IPStation AI 27"', href: '/products/ipstation-ai-27' },
          { name: 'IPStation AI 32"', href: '/products/ipstation-ai-32' },
        ]
      },
      {
        category: 'AI Workstations',
        items: [
          { name: 'AI Workstation Mid-Level', href: '/products/ai-workstation-mid' },
          { name: 'AI Workstation High-Level', href: '/products/ai-workstation-high' },
        ]
      },
      {
        category: 'AI Servers',
        items: [
          { name: 'AI Rack Server', href: '/products/ai-rack-server' },
          { name: 'AI Tower Server', href: '/products/ai-tower-server' },
          { name: 'AI GPU Server', href: '/products/ai-gpu-server' },
        ]
      }
    ]
  },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'About Us', href: '/about' },
  { name: 'Newsroom', href: '/newsroom' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">O</span>
              </div>
              <span className="text-xl font-bold gradient-text">OMBASE</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.submenu ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button className="flex items-center text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                        {item.name}
                        <ChevronDownIcon className="ml-1 h-4 w-4" />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                          >
                            <div className="p-6 grid grid-cols-1 gap-6 max-h-96 overflow-y-auto">
                              {item.submenu.map((category) => (
                                <div key={category.category}>
                                  <h3 className="text-sm font-semibold text-gray-900 mb-2">
                                    {category.category}
                                  </h3>
                                  <ul className="space-y-1">
                                    {category.items.map((subItem) => (
                                      <li key={subItem.name}>
                                        <Link
                                          href={subItem.href}
                                          className="block text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 px-2 py-1 rounded transition-colors duration-150"
                                        >
                                          {subItem.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-primary-600 p-2"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.submenu ? (
                      <div>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                          className="flex items-center justify-between w-full text-left text-gray-700 hover:text-primary-600 px-3 py-2 text-base font-medium"
                        >
                          {item.name}
                          <ChevronDownIcon className={`h-4 w-4 transform transition-transform ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="ml-4 space-y-2"
                            >
                              {item.submenu.map((category) => (
                                <div key={category.category} className="py-2">
                                  <h4 className="text-sm font-semibold text-gray-900 mb-1">
                                    {category.category}
                                  </h4>
                                  {category.items.map((subItem) => (
                                    <Link
                                      key={subItem.name}
                                      href={subItem.href}
                                      className="block text-sm text-gray-600 hover:text-primary-600 px-2 py-1"
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      {subItem.name}
                                    </Link>
                                  ))}
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block text-gray-700 hover:text-primary-600 px-3 py-2 text-base font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="block w-full text-center bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-2 rounded-lg font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}