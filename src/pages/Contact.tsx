import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <div className="overflow-hidden pt-20">
      <section className="py-24 bg-light">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Get in Touch With Delta Energy</h1>
            <p className="text-muted text-lg max-w-2xl mx-auto">We'd love to hear from you. Reach out for quotes, orders, or any inquiries.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="bg-white p-8 md:p-10 rounded-2xl shadow-lg">
              {formStatus === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <CheckCircle size={64} className="text-success mb-6" />
                  <h3 className="text-2xl font-bold text-dark mb-2">Thank You!</h3>
                  <p className="text-muted">We've received your message and will be in touch within 24 hours.</p>
                  <button onClick={() => setFormStatus('idle')} className="mt-8 text-primary font-bold hover:underline">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-dark mb-2">Full Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-dark mb-2">Email Address</label>
                      <input required type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark mb-2">Phone Number</label>
                      <input required type="tel" defaultValue="+211 " className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark mb-2">Subject</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-white">
                      <option>General Inquiry</option>
                      <option>LPG Cylinder Order</option>
                      <option>ISO Tank Order</option>
                      <option>Fuel Delivery</option>
                      <option>Installation Request</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark mb-2">Message</label>
                    <textarea required rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
                  </div>
                  <button type="submit" disabled={formStatus === 'submitting'} className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-lg transition-colors disabled:opacity-70">
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <MapPin className="text-accent w-8 h-8 mb-4" />
                  <h3 className="font-bold text-dark mb-2">Visit Us</h3>
                  <p className="text-muted text-sm">Thongpiny, Near Indian Embassy<br/>Juba, South Sudan</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <MapPin className="text-accent w-8 h-8 mb-4" />
                  <h3 className="font-bold text-dark mb-2">Filling Plant</h3>
                  <p className="text-muted text-sm">Gumbo, Juba<br/>South Sudan</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <Phone className="text-accent w-8 h-8 mb-4" />
                  <h3 className="font-bold text-dark mb-2">Call Us</h3>
                  <p className="text-muted text-sm">+211 929 452392<br/>+211 921 702619</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <Mail className="text-accent w-8 h-8 mb-4" />
                  <h3 className="font-bold text-dark mb-2">Email Us</h3>
                  <p className="text-muted text-sm break-all">deltaenergysudan@gmail.com<br/>solyanafinance@gmail.com</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-primary">
                <div className="flex items-center mb-4">
                  <Clock className="text-primary w-6 h-6 mr-3" />
                  <h3 className="font-bold text-dark text-xl">Operating Hours</h3>
                </div>
                <div className="space-y-2 text-muted">
                  <div className="flex justify-between"><span>Monday - Saturday</span><span className="font-medium text-dark">7:00 AM - 6:00 PM</span></div>
                  <div className="flex justify-between"><span>Sunday</span><span className="font-medium text-dark">8:00 AM - 2:00 PM</span></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
