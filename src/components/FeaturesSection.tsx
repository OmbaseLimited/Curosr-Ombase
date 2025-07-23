'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  CpuChipIcon, 
  LightningBoltIcon, 
  ShieldCheckIcon, 
  GlobeAltIcon,
  CogIcon,
  HeartIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: CpuChipIcon,
    title: 'AI-Powered Performance',
    description: 'Our systems leverage cutting-edge AI processors and neural engines to deliver unprecedented computational power for machine learning and deep learning applications.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: LightningBoltIcon,
    title: 'Lightning Fast Processing',
    description: 'Experience blazing-fast performance with optimized hardware configurations designed for speed, efficiency, and seamless multitasking across all applications.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Enterprise Security',
    description: 'Built-in security features including TPM 2.0, secure boot, and hardware-level encryption to protect your valuable data and intellectual property.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: GlobeAltIcon,
    title: 'Global Support',
    description: '24/7 worldwide technical support and comprehensive warranty coverage to ensure your OMBASE systems perform at peak efficiency.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: CogIcon,
    title: 'Customizable Solutions',
    description: 'Tailor your system configuration to meet specific requirements with our extensive customization options and professional consultation services.',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: HeartIcon,
    title: 'Sustainable Technology',
    description: 'Environmentally responsible manufacturing processes and energy-efficient designs that reduce carbon footprint without compromising performance.',
    gradient: 'from-teal-500 to-green-500',
  },
];

export default function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose
            <span className="gradient-text"> OMBASE</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference with our innovative technology, exceptional performance, 
            and unwavering commitment to excellence in every product we create.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover-lift">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div className="group">
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
              99.9%
            </div>
            <div className="text-gray-600">Uptime Guarantee</div>
          </div>
          <div className="group">
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
              50+
            </div>
            <div className="text-gray-600">Countries Served</div>
          </div>
          <div className="group">
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
              10M+
            </div>
            <div className="text-gray-600">Processing Hours</div>
          </div>
          <div className="group">
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
              24/7
            </div>
            <div className="text-gray-600">Expert Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}