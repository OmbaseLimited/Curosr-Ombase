'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ComputerDesktopIcon, 
  DevicePhoneMobileIcon, 
  CpuChipIcon, 
  ServerIcon,
  ChevronRightIcon 
} from '@heroicons/react/24/outline';
import Link from 'next/link';

const productCategories = [
  {
    category: 'AI Laptops',
    icon: DevicePhoneMobileIcon,
    description: 'Ultra-portable AI notebooks designed for machine learning and content creation',
    products: [
      { name: 'IPBook AI 14"', description: 'Intuitive interaction and on-the-go ML tasks' },
      { name: 'IPBook AI 15"', description: 'Balanced for coders and content creators' },
      { name: 'IPBook AI 16"', description: 'Advanced model training and deep learning' },
    ],
    gradient: 'from-blue-500 to-purple-600',
    href: '/products/ai-laptops'
  },
  {
    category: 'Gaming Laptops',
    icon: CpuChipIcon,
    description: 'High-performance gaming systems with cutting-edge graphics',
    products: [
      { name: 'IPBook 15" G-Series', description: 'Up to NVIDIA RTX 4050 for fluid gaming' },
      { name: 'IPBook 16" G-Series', description: 'Up to NVIDIA RTX 4090 for creators' },
      { name: 'IPBook 18" G-Series', description: 'Up to NVIDIA RTX 5090 for peak power' },
    ],
    gradient: 'from-red-500 to-orange-600',
    href: '/products/gaming-laptops'
  },
  {
    category: 'AI Desktop PCs',
    icon: ComputerDesktopIcon,
    description: 'Powerful AI-ready desktops and all-in-one systems',
    products: [
      { name: 'IPCentre 300 AI Series', description: 'Compact AI desktops for everyday ML' },
      { name: 'IPCentre 500 AI Series', description: 'Scalable solutions for professionals' },
      { name: 'IPStation AI 24"-32"', description: 'All-in-one AI PCs with immersive displays' },
    ],
    gradient: 'from-green-500 to-teal-600',
    href: '/products/ai-desktops'
  },
  {
    category: 'Mini PCs',
    icon: CpuChipIcon,
    description: 'Compact computing solutions for various applications',
    products: [
      { name: 'Mini PC AI Series', description: 'Edge computing and compact AI deployments' },
      { name: 'Education Mini PCs', description: 'Digital classrooms and remote learning' },
      { name: 'Industrial Mini PCs', description: 'Rugged 24/7 reliability for automation' },
    ],
    gradient: 'from-purple-500 to-pink-600',
    href: '/products/mini-pcs'
  },
  {
    category: 'AI Workstations',
    icon: ComputerDesktopIcon,
    description: 'Professional workstations for demanding AI workflows',
    products: [
      { name: 'AI Workstation Mid-Level', description: 'Everyday ML tasks and data analysis' },
      { name: 'AI Workstation High-Level', description: 'Large-scale training and deep learning' },
    ],
    gradient: 'from-indigo-500 to-blue-600',
    href: '/products/ai-workstations'
  },
  {
    category: 'AI Servers',
    icon: ServerIcon,
    description: 'Enterprise-grade servers for AI infrastructure',
    products: [
      { name: 'AI Rack Server', description: 'Scalable rack-mounted AI training servers' },
      { name: 'AI Tower Server', description: 'Flexible deployment for labs and offices' },
      { name: 'AI GPU Server', description: 'High-throughput neural network processing' },
    ],
    gradient: 'from-gray-700 to-gray-900',
    href: '/products/ai-servers'
  },
];

export default function ProductShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Innovative
            <span className="gradient-text"> Product Lineup</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From AI-powered laptops to enterprise servers, discover OMBASE's comprehensive 
            range of computing solutions designed for the modern world.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link href={category.href}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover-lift">
                  {/* Card Header */}
                  <div className={`bg-gradient-to-br ${category.gradient} p-6 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="relative z-10">
                      <category.icon className="h-12 w-12 mb-4" />
                      <h3 className="text-2xl font-bold mb-2">{category.category}</h3>
                      <p className="text-white/90 text-sm">{category.description}</p>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <div className="space-y-4">
                      {category.products.map((product, productIndex) => (
                        <motion.div
                          key={product.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.4, delay: (index * 0.1) + (productIndex * 0.1) }}
                          className="border-l-4 border-gray-200 pl-4 group-hover:border-primary-500 transition-colors duration-300"
                        >
                          <h4 className="font-semibold text-gray-900 mb-1">{product.name}</h4>
                          <p className="text-sm text-gray-600">{product.description}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors duration-300">
                        <span>Explore {category.category}</span>
                        <ChevronRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link
            href="/products"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            View All Products
            <ChevronRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}