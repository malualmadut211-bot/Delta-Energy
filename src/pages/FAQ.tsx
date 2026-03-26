import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  { q: "What sizes of LPG cylinders do you offer?", a: "We offer brand new, certified LPG cylinders in 12.5kg, 25kg, and 50kg sizes to accommodate both residential and commercial needs." },
  { q: "Do you deliver to all areas in Juba?", a: "Yes, we provide delivery services across all major neighborhoods in Juba. Delivery times vary by zone, with same-day and next-day options available." },
  { q: "Is installation really free?", a: "Yes! Professional installation is included free of charge with all cylinder and ISO tank purchases to ensure maximum safety and proper setup." },
  { q: "How does the electronic monitoring system work?", a: "Our smart monitoring system uses sensors attached to your tank to track gas levels in real-time. It sends data to a dashboard, alerting you (and us) when levels are low, preventing unexpected run-outs." },
  { q: "What are your delivery hours?", a: "We deliver Monday through Saturday from 7:00 AM to 6:00 PM, and Sundays from 8:00 AM to 2:00 PM." },
  { q: "Can I schedule a recurring delivery?", a: "Absolutely. We can set up a recurring delivery schedule based on your average usage, or you can use our electronic monitoring system for automated refill dispatch." },
  { q: "What payment methods do you accept?", a: "We accept cash (SSP/USD), bank transfers, and mobile money payments. Corporate clients can also discuss invoicing options." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [search, setSearch] = useState('');

  const filteredFaqs = faqs.filter(faq => 
    faq.q.toLowerCase().includes(search.toLowerCase()) || 
    faq.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="overflow-hidden pt-20">
      <section className="py-24 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Frequently Asked Questions</h1>
            
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted" size={20} />
              <input 
                type="text" 
                placeholder="Search questions..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-lg shadow-sm"
              />
            </div>
          </div>

          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`border rounded-xl overflow-hidden transition-colors ${openIndex === index ? 'border-accent bg-light' : 'border-gray-200 bg-white hover:border-accent/50'}`}
                >
                  <button 
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
                  >
                    <span className="font-bold text-dark text-lg pr-8">{faq.q}</span>
                    <ChevronDown className={`shrink-0 text-primary transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 text-muted leading-relaxed border-t border-gray-100 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12 text-muted">
                No questions found matching "{search}".
              </div>
            )}
          </div>

          <div className="mt-16 text-center">
            <p className="text-dark font-medium mb-4">Still have questions?</p>
            <Link to="/contact" className="bg-primary text-white px-8 py-3 rounded-md font-bold hover:bg-primary-hover transition-colors inline-block">
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
