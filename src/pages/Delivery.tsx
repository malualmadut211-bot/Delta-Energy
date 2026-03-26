import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, ShieldCheck, Truck } from 'lucide-react';

export default function Delivery() {
  return (
    <div className="overflow-hidden pt-20">
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="https://picsum.photos/seed/delivery/1920/1080" alt="Delivery" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Fast, Safe Delivery</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">Serving all of Juba with reliable on-time delivery right to your doorstep.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-primary mb-6">Delivery Information</h2>
              <div className="space-y-6">
                <div className="flex bg-light p-6 rounded-xl">
                  <Clock className="text-accent w-8 h-8 mr-4 shrink-0" />
                  <div>
                    <h3 className="font-bold text-dark text-lg mb-1">Delivery Hours</h3>
                    <p className="text-muted">Monday - Saturday: 7:00 AM - 6:00 PM<br/>Sunday: 8:00 AM - 2:00 PM</p>
                  </div>
                </div>
                <div className="flex bg-light p-6 rounded-xl">
                  <Truck className="text-accent w-8 h-8 mr-4 shrink-0" />
                  <div>
                    <h3 className="font-bold text-dark text-lg mb-1">Delivery Types</h3>
                    <p className="text-muted">Standard (Next Day), Express (Same Day), Scheduled, and Emergency deliveries available.</p>
                  </div>
                </div>
                <div className="flex bg-light p-6 rounded-xl">
                  <ShieldCheck className="text-accent w-8 h-8 mr-4 shrink-0" />
                  <div>
                    <h3 className="font-bold text-dark text-lg mb-1">Safety Protocols</h3>
                    <p className="text-muted">All vehicles are safety certified. Drivers are trained in hazardous materials handling.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
              <div className="aspect-square bg-light rounded-2xl overflow-hidden relative shadow-lg border border-accent/20">
                {/* Placeholder for Map */}
                <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/map/800/800')] opacity-50 mix-blend-multiply" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={64} className="text-primary mx-auto mb-4 animate-bounce" />
                    <h3 className="text-2xl font-bold text-dark">Juba Coverage Map</h3>
                    <p className="text-muted mt-2">We deliver to all major neighborhoods</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-accent text-center">
        <div className="w-full px-4">
          <h2 className="text-4xl font-bold text-white mb-8">Schedule Your Delivery Now</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+211929452392" className="bg-white text-primary px-8 py-4 rounded-md font-bold text-lg hover:bg-light transition-colors">
              Call Us: +211 929 452392
            </a>
            <a href="https://wa.me/211929452392" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white/10 transition-colors">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
