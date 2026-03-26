import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const products = {
  cylinders: [
    { name: '12.5kg LPG Cylinder', capacity: '12.5kg', use: 'Small households, singles, couples', duration: 'Lasts approx. 4-6 weeks', image: 'https://picsum.photos/seed/12kg/400/500' },
    { name: '25kg LPG Cylinder', capacity: '25kg', use: 'Medium families, small restaurants', duration: 'Lasts approx. 8-12 weeks', image: 'https://picsum.photos/seed/25kg/400/500' },
    { name: '50kg LPG Cylinder', capacity: '50kg', use: 'Large families, commercial kitchens', duration: 'Lasts approx. 16-24 weeks', image: 'https://picsum.photos/seed/50kg/400/500' },
  ],
  tanks: [
    { name: '250kg ISO Tank', capacity: '250kg', use: 'Small-scale commercial', features: ['Compact footprint', 'Easy refill access', 'Safety valve included'], image: 'https://picsum.photos/seed/250kg/400/500' },
    { name: '500kg ISO Tank', capacity: '500kg', use: 'Medium industrial use', features: ['High capacity', 'Durable construction', 'Electronic monitoring ready'], image: 'https://picsum.photos/seed/500kg/400/500' },
    { name: '1,000kg ISO Tank', capacity: '1,000kg', use: 'Heavy industrial & bulk supply', features: ['Maximum capacity', 'Industrial grade', 'Full telemetry support'], image: 'https://picsum.photos/seed/1000kg/400/500' },
  ]
};

export default function Products() {
  const [activeTab, setActiveTab] = useState<'cylinders' | 'tanks'>('cylinders');

  return (
    <div className="overflow-hidden pt-20">
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="https://picsum.photos/seed/products/1920/1080" alt="Products" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Products</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">Quality LPG cylinders, ISO tanks, and fuel products to meet every need.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12">
            <div className="bg-light p-2 rounded-xl inline-flex">
              <button 
                onClick={() => setActiveTab('cylinders')}
                className={`px-8 py-3 rounded-lg font-bold transition-all ${activeTab === 'cylinders' ? 'bg-primary text-white shadow-md' : 'text-muted hover:text-dark'}`}
              >
                LPG Cylinders
              </button>
              <button 
                onClick={() => setActiveTab('tanks')}
                className={`px-8 py-3 rounded-lg font-bold transition-all ${activeTab === 'tanks' ? 'bg-primary text-white shadow-md' : 'text-muted hover:text-dark'}`}
              >
                ISO Tanks
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products[activeTab].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-light hover:shadow-xl transition-shadow group"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-dark mb-2">{item.name}</h3>
                  <div className="text-primary font-bold mb-4">{item.capacity}</div>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start">
                      <Check size={18} className="text-success mr-2 mt-0.5" />
                      <span className="text-muted text-sm"><strong>Ideal for:</strong> {item.use}</span>
                    </div>
                    {'duration' in item && (
                      <div className="flex items-start">
                        <Check size={18} className="text-success mr-2 mt-0.5" />
                        <span className="text-muted text-sm">{item.duration}</span>
                      </div>
                    )}
                    {'features' in item && item.features.map((f, idx) => (
                      <div key={idx} className="flex items-start">
                        <Check size={18} className="text-success mr-2 mt-0.5" />
                        <span className="text-muted text-sm">{f}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to="/contact" className="block w-full text-center bg-light text-primary hover:bg-primary hover:text-white py-3 rounded-md font-bold transition-colors">
                    Request Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
