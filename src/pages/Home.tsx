import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Truck, Zap, Wrench, Activity, Flame, CheckCircle, Star, MapPin, Phone } from 'lucide-react';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-white via-light to-[#B9CACE]/30">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-secondary/10 to-glow/10 blur-3xl"
          />
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-left"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center px-4 py-2 rounded-full border border-accent/30 bg-white/50 backdrop-blur-sm mb-6 shadow-sm">
                <span className="text-accent mr-2">⚡</span>
                <span className="text-sm font-bold text-dark tracking-wide uppercase">South Sudan's Trusted Energy Partner</span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary leading-tight mb-6">
                Powering Your <br />
                <span className="text-dark">Home & Business</span> <br />
                With Confidence
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted mb-8 max-w-lg leading-relaxed">
                Delta Energy is your go-to partner for all LPG and fuel needs. Fast, safe, and reliable doorstep delivery across Juba.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link to="/services" className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-md font-bold text-lg text-center transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-1">
                  Explore Our Services
                </Link>
                <Link to="/contact" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 rounded-md font-bold text-lg text-center transition-all duration-300">
                  Contact Us Now
                </Link>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 text-sm font-semibold text-dark">
                <div className="flex items-center"><CheckCircle size={16} className="text-success mr-1" /> Free Installation</div>
                <div className="flex items-center"><CheckCircle size={16} className="text-success mr-1" /> Doorstep Delivery</div>
                <div className="flex items-center"><CheckCircle size={16} className="text-success mr-1" /> Safe & Certified</div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block h-[600px]"
            >
              {/* Placeholder for 3D Cylinder / Hero Image */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-64 h-96 bg-gradient-to-br from-primary to-accent rounded-3xl shadow-2xl flex items-center justify-center text-white text-6xl relative overflow-hidden">
                  <Flame size={80} className="opacity-50" />
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-accent"
        >
          <span className="text-xs font-bold uppercase tracking-widest mb-2">Scroll to Explore</span>
          <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-accent rounded-full animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* SECTION 2: MARQUEE */}
      <div className="bg-gradient-to-r from-primary to-accent py-4 overflow-hidden flex whitespace-nowrap">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          className="flex text-white font-bold text-lg tracking-widest uppercase"
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="mx-4">★</span> LPG CYLINDERS
              <span className="mx-4">★</span> DIESEL SUPPLY
              <span className="mx-4">★</span> PETROL DELIVERY
              <span className="mx-4">★</span> ISO TANKS
              <span className="mx-4">★</span> FREE INSTALLATION
              <span className="mx-4">★</span> ELECTRONIC MONITORING
              <span className="mx-4">★</span> DOORSTEP DELIVERY
              <span className="mx-4">★</span> COOKING GAS
            </div>
          ))}
        </motion.div>
      </div>

      {/* SECTION 3: ABOUT US SNAPSHOT */}
      <section className="py-24 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-light relative">
                <img src="https://picsum.photos/seed/industry/800/1000" alt="Delta Energy Operations" className="object-cover w-full h-full" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-dark/10" />
              </div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-xl max-w-xs"
              >
                <div className="text-3xl font-bold mb-1">Established</div>
                <div className="text-lg text-white/80">in Juba, South Sudan</div>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-accent font-bold tracking-widest uppercase text-sm mb-2">ABOUT DELTA ENERGY</motion.div>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                Your Trusted LPG & Fuel Supply Partner
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted text-lg mb-8 leading-relaxed">
                Delta Energy is a premier gas and fuel supplier based in Juba, South Sudan, serving residential, commercial, and industrial clients. Located in Thongpiny near the Indian Embassy, with our filling plant in Gumbo, we provide end-to-end LPG solutions including cylinder sales, filling, refilling, ISO tank supply, and on-site delivery.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-6 mb-10">
                <div>
                  <div className="text-4xl font-mono font-bold text-primary mb-1">500+</div>
                  <div className="text-sm font-semibold text-dark">Happy Customers</div>
                </div>
                <div>
                  <div className="text-4xl font-mono font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm font-semibold text-dark">Support Available</div>
                </div>
                <div>
                  <div className="text-4xl font-mono font-bold text-primary mb-1">100%</div>
                  <div className="text-sm font-semibold text-dark">Safety Certified</div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Link to="/about" className="inline-flex items-center text-primary font-bold hover:text-accent transition-colors group">
                  Learn More About Us 
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: SERVICES OVERVIEW */}
      <section className="py-24 bg-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#143A4E 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        
        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center w-full mx-auto mb-16">
            <div className="text-accent font-bold tracking-widest uppercase text-sm mb-2">WHAT WE OFFER</div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Comprehensive Energy Solutions</h2>
            <p className="text-muted text-lg">From LPG cylinders to bulk fuel delivery, we've got you covered.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Flame, title: "LPG Cylinder Sales", desc: "Brand new, certified LPG cylinders available in 12.5kg, 25kg, and 50kg sizes for homes and businesses." },
              { icon: Activity, title: "Cylinder Filling", desc: "Quick and safe gas refilling services. Bring your cylinder or schedule a pickup. Accurate filling guaranteed." },
              { icon: Shield, title: "ISO Tank Supply", desc: "Industrial-grade ISO tanks in 250kg, 500kg, and 1,000kg capacities for large-scale operations." },
              { icon: Truck, title: "On-Site Fuel Delivery", desc: "Cooking gas, petrol, and diesel delivered directly to your location across Juba. Reliable and on-time." },
              { icon: Wrench, title: "Free Installation", desc: "Professional, free-of-charge installation for all LPG systems. Our trained technicians ensure safe setup." },
              { icon: Zap, title: "Electronic Monitoring", desc: "Advanced electronic monitoring for your gas levels. Know exactly when you need a refill — no surprises." }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-white group"
              >
                <div className="w-14 h-14 bg-light rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <service.icon size={28} className="text-accent group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{service.title}</h3>
                <p className="text-muted mb-6">{service.desc}</p>
                <Link to="/services" className="text-secondary font-bold hover:text-primary transition-colors inline-flex items-center group-hover:underline underline-offset-4">
                  Learn More <span className="ml-1">→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: FEATURED PRODUCTS */}
      <section className="py-24 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-accent font-bold tracking-widest uppercase text-sm mb-2">OUR PRODUCTS</div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Choose the Right Size for Your Needs</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: '12.5kg Cylinder', use: 'Small households', image: 'https://picsum.photos/seed/12kg/400/500' },
              { name: '25kg Cylinder', use: 'Medium families, small restaurants', image: 'https://picsum.photos/seed/25kg/400/500' },
              { name: '50kg Cylinder', use: 'Commercial kitchens, businesses', image: 'https://picsum.photos/seed/50kg/400/500' }
            ].map((product, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-light hover:shadow-xl transition-shadow group"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-dark mb-2">{product.name}</h3>
                  <p className="text-muted mb-6">{product.use}</p>
                  <Link to="/products" className="inline-block bg-light text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-md font-bold transition-colors">
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/products" className="text-primary font-bold hover:text-accent transition-colors inline-flex items-center">
              View All Products & ISO Tanks <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: WHY CHOOSE US */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://picsum.photos/seed/factory/1920/1080" alt="Industrial Background" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-dark/80 mix-blend-multiply" />
        </div>
        
        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Thousands Trust Delta Energy</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🚀", title: "Fast Delivery", desc: "Same-day and next-day delivery across Juba. We understand urgency." },
              { icon: "🛡️", title: "Safety First", desc: "All products and installations meet international safety standards. Your safety is our priority." },
              { icon: "💰", title: "Competitive Pricing", desc: "Fair, transparent pricing with no hidden charges. Value for every South Sudanese pound." },
              { icon: "📊", title: "Smart Monitoring", desc: "Our electronic monitoring systems keep you informed about your gas levels in real-time." },
              { icon: "🔧", title: "Free Installation", desc: "Expert installation at no extra cost. Proper setup for maximum safety and efficiency." },
              { icon: "🏢", title: "Residential & Commercial", desc: "Solutions for homes, restaurants, hotels, hospitals, factories, and more." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-[#B9CACE]">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: HOW IT WORKS */}
      <section className="py-24 bg-light relative overflow-hidden">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Getting Started is Easy</h2>
          </div>
          
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent -translate-y-1/2" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: 1, title: "Contact Us", desc: "Call, WhatsApp, or email us with your requirements." },
                { step: 2, title: "Get a Quote", desc: "We'll provide a detailed, competitive quote tailored to your needs." },
                { step: 3, title: "We Deliver", desc: "Fast, safe delivery to your doorstep anywhere in Juba." },
                { step: 4, title: "Free Installation", desc: "Our technicians install your system at no extra charge." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative z-10 text-center"
                >
                  <div className="w-16 h-16 mx-auto bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg border-4 border-light">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-2">{item.title}</h3>
                  <p className="text-muted">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">What Our Clients Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "Delta Energy has been our reliable gas partner for over a year. Their delivery is always on time, and the free installation saved us a lot of hassle.", name: "James M.", role: "Restaurant Owner, Juba" },
              { quote: "We use the 1,000kg ISO tank for our factory, and the electronic monitoring system is a game-changer. We never run out unexpectedly.", name: "Sarah K.", role: "Factory Manager" },
              { quote: "Affordable, fast, and professional. I recommend Delta Energy to every household in Juba.", name: "David O.", role: "Homeowner" }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-light p-8 rounded-2xl shadow-sm border-t-4 border-primary relative"
              >
                <div className="text-6xl text-glow absolute top-4 right-6 opacity-20 font-serif">"</div>
                <div className="flex text-warning mb-4">
                  {[...Array(5)].map((_, idx) => <Star key={idx} size={20} fill="#FFB800" color="#FFB800" />)}
                </div>
                <p className="text-dark text-lg italic mb-6 relative z-10">"{testimonial.quote}"</p>
                <div>
                  <div className="font-bold text-primary">{testimonial.name}</div>
                  <div className="text-muted text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: CTA BANNER */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] bg-[length:30px_30px]" />
        
        <div className="w-full px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Power Your Home and Business With Confidence</h2>
          <p className="text-xl text-white/90 mb-10">Contact Delta Energy today for fast, safe, and reliable LPG and fuel supply.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+211929452392" className="bg-white text-primary px-8 py-4 rounded-md font-bold text-lg hover:bg-light transition-colors flex items-center justify-center">
              <Phone size={20} className="mr-2" /> Call Us Now
            </a>
            <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white/10 transition-colors">
              Send Us a Message
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
