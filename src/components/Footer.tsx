import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white relative overflow-hidden">
      {/* Top CTA Banner */}
      <div className="bg-gradient-to-r from-primary to-accent py-12 px-4 relative z-10">
        <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Ready to Power Your Home or Business?</h2>
            <p className="text-white/80 text-lg">Contact Delta Energy Today!</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="bg-white text-primary px-8 py-3 rounded-md font-bold text-lg hover:bg-light transition-colors text-center">
              Get Started
            </Link>
            <a href="tel:+211929452392" className="border border-white text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-white/10 transition-colors text-center flex items-center justify-center">
              <Phone size={20} className="mr-2" /> Call Us
            </a>
          </div>
        </div>
      </div>

      {/* Animated Divider */}
      <div className="h-1 w-full bg-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-white/30 w-1/4 animate-[slide_2s_ease-in-out_infinite]" />
      </div>

      {/* Main Footer Content */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Subtle Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand */}
          <div>
            <div className="mb-6">
              <img 
                src="https://raw.githubusercontent.com/malualmadut211-bot/ai-studio-media/36a7ae47a64cdbcaa1bc0fa9885decb131212721/ChatGPT%20Image%20Mar%2026%2C%202026%2C%2002_30_41%20PM.png" 
                alt="Delta Energy Logo" 
                className="h-12 w-auto brightness-0 invert" 
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-[#B9CACE] mb-6 leading-relaxed">
              Your trusted partner for all LPG and fuel needs in South Sudan. Powering communities safely and reliably.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-glow hover:text-dark transition-all duration-300">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Products', 'Delivery', 'Contact', 'FAQ'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className="text-[#B9CACE] hover:text-white transition-colors flex items-center">
                    <span className="text-accent mr-2">›</span> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {['LPG Cylinder Sales', 'Cylinder Filling & Refilling', 'ISO Tank Supply', 'On-Site Delivery', 'Free Installation', 'Electronic Monitoring'].map((item) => (
                <li key={item} className="text-[#B9CACE] hover:text-white transition-colors flex items-center">
                  <span className="text-accent mr-2">›</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-accent mr-3 mt-1 shrink-0" />
                <span className="text-[#B9CACE]">Thongpiny, Near Indian Embassy<br/>Juba, South Sudan</span>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="text-accent mr-3 mt-1 shrink-0" />
                <span className="text-[#B9CACE]">+211 929 452392<br/>+211 921 702619</span>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="text-accent mr-3 mt-1 shrink-0" />
                <span className="text-[#B9CACE]">deltaenergysudan@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="text-accent mr-3 mt-1 shrink-0" />
                <span className="text-[#B9CACE]">Mon–Sat: 7:00 AM – 6:00 PM<br/>Sun: 8:00 AM – 2:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 relative z-10">
        <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#B9CACE] text-sm text-center md:text-left mb-4 md:mb-0">
            Copyright © {new Date().getFullYear()} Delta Energy. All rights reserved.
          </p>
          <p className="text-[#B9CACE] text-sm flex items-center">
            Designed with <span className="text-accent mx-1">🔥</span> in Juba
          </p>
        </div>
      </div>
    </footer>
  );
}
