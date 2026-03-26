import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Flame, Activity, Shield, Truck, Wrench, Zap } from 'lucide-react';

const services = [
  {
    id: 'lpg-sales',
    icon: Flame,
    title: 'LPG Cylinder Sales',
    desc: 'Brand new, certified LPG cylinders available in 12.5kg, 25kg, and 50kg sizes for homes and businesses. Quality certified for residential cooking, small restaurants, and mobile vendors.',
    image: 'https://picsum.photos/seed/cylinder/800/600'
  },
  {
    id: 'refilling',
    icon: Activity,
    title: 'Cylinder Filling & Refilling',
    desc: 'Quick and safe gas refilling services at our Gumbo plant. We perform weight checks, valve inspections, and leak testing on every refill. Pickup and delivery options available.',
    image: 'https://picsum.photos/seed/refill/800/600'
  },
  {
    id: 'iso-tanks',
    icon: Shield,
    title: 'ISO Tank Supply',
    desc: 'Industrial-grade ISO tanks in 250kg, 500kg, and 1,000kg capacities. Ideal for hotels, hospitals, factories, and large restaurants. Includes installation and maintenance.',
    image: 'https://picsum.photos/seed/tank/800/600'
  },
  {
    id: 'delivery',
    icon: Truck,
    title: 'On-Site Fuel Delivery',
    desc: 'Cooking gas, petrol, and diesel delivered directly to your location across Juba. Fast order processing, dispatch, and delivery verification.',
    image: 'https://picsum.photos/seed/truck/800/600'
  },
  {
    id: 'installation',
    icon: Wrench,
    title: 'Free Installation',
    desc: 'Full system setup, pressure testing, safety checks, and usage training included free of charge with all cylinder and ISO tank purchases. Handled by certified technicians.',
    image: 'https://picsum.photos/seed/install/800/600'
  },
  {
    id: 'monitoring',
    icon: Zap,
    title: 'Electronic Monitoring System',
    desc: 'Advanced electronic monitoring for your gas levels. Prevent unexpected run-outs, track usage, optimize costs, and receive safety alerts in real-time.',
    image: 'https://picsum.photos/seed/monitor/800/600'
  }
];

export default function Services() {
  return (
    <div className="overflow-hidden pt-20">
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="https://picsum.photos/seed/services/1920/1080" alt="Services" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">Comprehensive energy solutions tailored for homes and businesses across Juba.</p>
        </div>
      </section>

      {/* Quick Jump */}
      <div className="bg-light py-6 sticky top-[76px] z-30 shadow-sm overflow-x-auto">
        <div className="w-full px-4 flex gap-4 min-w-max">
          {services.map(s => (
            <a key={s.id} href={`#${s.id}`} className="bg-white text-primary px-4 py-2 rounded-full font-semibold text-sm hover:bg-primary hover:text-white transition-colors border border-primary/20">
              {s.title}
            </a>
          ))}
        </div>
      </div>

      {/* Service Details */}
      {services.map((service, index) => (
        <section key={service.id} id={service.id} className={`py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-light'} scroll-mt-32`}>
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={index % 2 !== 0 ? 'lg:order-2' : ''}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon size={32} className="text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">{service.title}</h2>
                <p className="text-muted text-lg mb-8 leading-relaxed">{service.desc}</p>
                <Link to="/contact" className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-md font-bold transition-colors inline-block">
                  Request Service
                </Link>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`relative ${index % 2 !== 0 ? 'lg:order-1' : ''}`}
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-center">
        <div className="w-full px-4">
          <h2 className="text-4xl font-bold text-white mb-8">Need a custom energy solution? Let's talk.</h2>
          <Link to="/contact" className="bg-white text-primary px-8 py-4 rounded-md font-bold text-lg hover:bg-light transition-colors inline-block">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
