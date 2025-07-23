'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  RocketLaunchIcon, 
  LightBulbIcon, 
  HeartIcon, 
  UserGroupIcon,
  GlobeAltIcon,
  ShieldCheckIcon 
} from '@heroicons/react/24/outline';

const values = [
  {
    icon: RocketLaunchIcon,
    title: 'Innovation',
    description: 'We constantly push the boundaries of technology to create breakthrough computing solutions that define the future.',
  },
  {
    icon: LightBulbIcon,
    title: 'Excellence',
    description: 'Every product we create meets the highest standards of quality, performance, and reliability.',
  },
  {
    icon: HeartIcon,
    title: 'Customer-Centric',
    description: 'Our customers are at the heart of everything we do. We listen, learn, and deliver solutions that exceed expectations.',
  },
  {
    icon: UserGroupIcon,
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and partnerships to achieve extraordinary results.',
  },
  {
    icon: GlobeAltIcon,
    title: 'Global Impact',
    description: 'We strive to make a positive impact on communities and industries worldwide through our technology.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Integrity',
    description: 'We conduct business with honesty, transparency, and ethical practices in all our relationships.',
  },
];

const milestones = [
  { year: '2018', title: 'Company Founded', description: 'OMBASE was established with a vision to revolutionize computing technology.' },
  { year: '2019', title: 'First AI Laptop', description: 'Launched our first AI-powered laptop, setting new standards in the industry.' },
  { year: '2020', title: 'Global Expansion', description: 'Expanded operations to serve customers in over 25 countries worldwide.' },
  { year: '2021', title: 'Gaming Series Launch', description: 'Introduced the G-Series gaming laptops with cutting-edge graphics capabilities.' },
  { year: '2022', title: 'Enterprise Solutions', description: 'Launched comprehensive AI workstation and server solutions for enterprises.' },
  { year: '2023', title: 'Sustainability Initiative', description: 'Committed to carbon-neutral manufacturing and sustainable technology practices.' },
  { year: '2024', title: 'Next-Gen AI', description: 'Leading the industry with advanced AI processing and neural computing technologies.' },
];

export default function AboutPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [timelineRef, timelineInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section ref={heroRef} className="pt-20 pb-16 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Pioneering the Future of
              <span className="gradient-text"> Computing</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At OMBASE, we're not just building computers – we're crafting the intelligent 
              machines that will power tomorrow's innovations. Our journey began with a simple 
              belief: technology should amplify human potential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                To democratize access to advanced computing technology by creating AI-powered 
                solutions that are powerful, reliable, and accessible to everyone – from 
                students and professionals to enterprises and researchers.
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                A world where intelligent computing seamlessly integrates with human creativity 
                and ambition, enabling breakthrough discoveries, artistic expression, and 
                technological advancement that benefits all of humanity.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl p-8 text-white">
                <div className="h-full flex flex-col justify-center items-center text-center">
                  <h3 className="text-2xl font-bold mb-4">Empowering Innovation</h3>
                  <p className="text-lg opacity-90">
                    Since 2018, we've been committed to pushing the boundaries of what's 
                    possible in computing technology.
                  </p>
                  <div className="mt-8 grid grid-cols-2 gap-4 w-full">
                    <div className="text-center">
                      <div className="text-3xl font-bold">1M+</div>
                      <div className="text-sm opacity-80">Users Worldwide</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">50+</div>
                      <div className="text-sm opacity-80">Countries</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide every decision we make and every product we create.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a bold vision to industry leadership – explore the milestones that shaped OMBASE.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 to-accent-500"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  animate={timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className={`text-2xl font-bold gradient-text mb-2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                        {milestone.year}
                      </div>
                      <h3 className={`text-xl font-bold text-gray-900 mb-2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                        {milestone.title}
                      </h3>
                      <p className={`text-gray-600 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full border-4 border-white shadow-lg"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}