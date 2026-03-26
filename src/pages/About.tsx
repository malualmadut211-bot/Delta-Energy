import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Target, Heart, Zap, CheckCircle } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function About() {
  return (
    <div className="overflow-hidden pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="https://picsum.photos/seed/team/1920/1080" alt="Delta Energy Team" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80" />
        </div>
        <div className="relative z-10 text-center px-4">
          <div className="text-white/80 mb-4 font-medium">Home &gt; About Us</div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About Delta Energy</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">South Sudan's premier LPG and fuel supply company, committed to powering communities safely and reliably.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <div className="text-accent font-bold tracking-widest uppercase text-sm mb-2">OUR STORY</div>
              <h2 className="text-4xl font-bold text-primary mb-6">Built on Trust, Driven by Excellence</h2>
              <div className="space-y-4 text-muted text-lg leading-relaxed">
                <p>Delta Energy was founded with a singular vision: to provide South Sudan with safe, reliable, and affordable energy solutions. Based in Juba's Thongpiny area near the Indian Embassy, we have grown from a small LPG supplier to a comprehensive energy partner serving hundreds of homes, restaurants, hotels, hospitals, and industries across the capital.</p>
                <p>Our state-of-the-art filling plant in Gumbo, Juba, ensures that every cylinder and tank is filled with precision and care, adhering to the highest safety standards. We don't just deliver fuel — we deliver peace of mind.</p>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border-4 border-accent/20 p-2">
                <img src="https://picsum.photos/seed/history/800/800" alt="Our History" className="w-full h-full object-cover rounded-xl" referrerPolicy="no-referrer" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-light">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-primary">
              <Target size={40} className="text-primary mb-6" />
              <h3 className="text-2xl font-bold text-dark mb-4">Our Mission</h3>
              <p className="text-muted">To provide safe, affordable, and reliable LPG and fuel solutions to every home and business in South Sudan, ensuring energy access for all.</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-secondary">
              <Zap size={40} className="text-secondary mb-6" />
              <h3 className="text-2xl font-bold text-dark mb-4">Our Vision</h3>
              <p className="text-muted">To become East Africa's most trusted and innovative energy supply company, leading the transition to cleaner, safer fuel solutions.</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-accent">
              <Heart size={40} className="text-accent mb-6" />
              <h3 className="text-2xl font-bold text-dark mb-4">Our Values</h3>
              <ul className="space-y-2 text-muted">
                <li className="flex items-center"><CheckCircle size={16} className="text-success mr-2" /> Safety First</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-success mr-2" /> Reliability</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-success mr-2" /> Integrity</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-success mr-2" /> Customer Focus</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-success mr-2" /> Innovation</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-center">
        <div className="w-full px-4">
          <h2 className="text-4xl font-bold text-white mb-8">Partner with a company that puts your safety first.</h2>
          <Link to="/contact" className="bg-white text-primary px-8 py-4 rounded-md font-bold text-lg hover:bg-light transition-colors inline-block">
            Contact Delta Energy
          </Link>
        </div>
      </section>
    </div>
  );
}
