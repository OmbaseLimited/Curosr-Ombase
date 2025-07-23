'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    name: 'Dr. Sarah Chen',
    role: 'AI Research Director',
    company: 'TechVision Labs',
    image: '/api/placeholder/100/100',
    rating: 5,
    content: 'The IPBook AI 16" has revolutionized our machine learning workflows. The processing power and AI optimization features have reduced our model training time by 60%. Absolutely incredible performance.',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Game Developer',
    company: 'Pixel Studios',
    image: '/api/placeholder/100/100',
    rating: 5,
    content: 'Our team uses the IPBook 18" G-Series for game development, and the RTX 5090 performance is mind-blowing. Real-time ray tracing and 4K rendering has never been smoother.',
  },
  {
    name: 'Emily Watson',
    role: 'Data Scientist',
    company: 'Analytics Pro',
    image: '/api/placeholder/100/100',
    rating: 5,
    content: 'The AI Workstation High-Level handles our largest datasets effortlessly. The 24/7 support team is exceptional - they helped us optimize our setup for maximum efficiency.',
  },
  {
    name: 'Prof. James Liu',
    role: 'Computer Science Professor',
    company: 'Stanford University',
    image: '/api/placeholder/100/100',
    rating: 5,
    content: 'We deploy OMBASE Mini PCs in our computer labs. They are reliable, powerful, and perfect for our educational environment. Students love working with these systems.',
  },
  {
    name: 'Rachel Green',
    role: 'Creative Director',
    company: 'Design Innovations',
    image: '/api/placeholder/100/100',
    rating: 5,
    content: 'The IPStation AI 32" All-in-One is a game-changer for our design studio. The massive display and AI-powered rendering capabilities have boosted our productivity tremendously.',
  },
  {
    name: 'David Park',
    role: 'Enterprise IT Manager',
    company: 'Global Corp',
    image: '/api/placeholder/100/100',
    rating: 5,
    content: 'Our AI Server deployment has been flawless. OMBASE servers handle our enterprise workloads with ease, and the scalability options are exactly what we needed.',
  },
];

export default function TestimonialsSection() {
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
            Trusted by
            <span className="gradient-text"> Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what professionals across different industries are saying about their 
            experience with OMBASE computing solutions.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift h-full">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-primary-600 font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-8 bg-white rounded-2xl px-8 py-6 shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-1">4.9/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-1">10K+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-1">99%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}