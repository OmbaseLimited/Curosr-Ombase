'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  QuestionMarkCircleIcon 
} from '@heroicons/react/24/outline';

const contactMethods = [
  {
    icon: PhoneIcon,
    title: 'Phone Support',
    description: 'Speak directly with our technical experts',
    contact: '+1 (555) 123-4567',
    action: 'tel:+1-555-123-4567',
    availability: '24/7 Global Support',
  },
  {
    icon: EnvelopeIcon,
    title: 'Email Support',
    description: 'Send us your detailed requirements',
    contact: 'support@ombase.com',
    action: 'mailto:support@ombase.com',
    availability: 'Response within 2 hours',
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Live Chat',
    description: 'Get instant answers to your questions',
    contact: 'Start Chat Now',
    action: '#',
    availability: 'Available 24/7',
  },
];

const offices = [
  {
    city: 'San Francisco',
    country: 'United States',
    address: '123 Technology Boulevard, San Francisco, CA 94105',
    phone: '+1 (555) 123-4567',
    email: 'sf@ombase.com',
    timezone: 'PST (UTC-8)',
  },
  {
    city: 'London',
    country: 'United Kingdom',
    address: '456 Innovation Street, London EC2A 4DP',
    phone: '+44 20 7946 0958',
    email: 'london@ombase.com',
    timezone: 'GMT (UTC+0)',
  },
  {
    city: 'Singapore',
    country: 'Singapore',
    address: '789 Tech Plaza, Singapore 018989',
    phone: '+65 6234 5678',
    email: 'singapore@ombase.com',
    timezone: 'SGT (UTC+8)',
  },
];

const faqs = [
  {
    question: 'What warranty do OMBASE products come with?',
    answer: 'All OMBASE products come with a comprehensive 3-year international warranty covering hardware defects and manufacturing issues.',
  },
  {
    question: 'Do you offer custom configurations?',
    answer: 'Yes, we offer extensive customization options for all our product lines. Contact our sales team to discuss your specific requirements.',
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day money-back guarantee on all purchases. If you\'re not completely satisfied, you can return the product for a full refund.',
  },
  {
    question: 'Do you provide technical support?',
    answer: 'We provide 24/7 technical support through phone, email, and live chat. Our expert team is always ready to help with any technical issues.',
  },
];

export default function ContactPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [officesRef, officesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have questions about our products or need technical support? Our team of 
              experts is here to help you find the perfect computing solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 mb-6">
                  <method.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <a
                  href={method.action}
                  className="text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200"
                >
                  {method.contact}
                </a>
                <p className="text-sm text-gray-500 mt-2">{method.availability}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section ref={formRef} className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="john.doe@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your Company"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  >
                    <option>Product Inquiry</option>
                    <option>Technical Support</option>
                    <option>Sales Question</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-start space-x-4">
                      <QuestionMarkCircleIcon className="h-6 w-6 text-primary-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {faq.question}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section ref={officesRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={officesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Global Offices</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find us around the world. We're here to support you locally.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 30 }}
                animate={officesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {office.city}
                </h3>
                <p className="text-lg text-gray-600 mb-6">{office.country}</p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPinIcon className="h-5 w-5 text-primary-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">{office.address}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <PhoneIcon className="h-5 w-5 text-primary-500" />
                    <a href={`tel:${office.phone}`} className="text-gray-600 hover:text-primary-600 transition-colors duration-200">
                      {office.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <EnvelopeIcon className="h-5 w-5 text-primary-500" />
                    <a href={`mailto:${office.email}`} className="text-gray-600 hover:text-primary-600 transition-colors duration-200">
                      {office.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <ClockIcon className="h-5 w-5 text-primary-500" />
                    <p className="text-gray-600">{office.timezone}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}