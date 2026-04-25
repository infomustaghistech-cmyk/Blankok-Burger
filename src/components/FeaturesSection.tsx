import React from 'react';
import { motion } from 'motion/react';
import { Tv, Wind, Volume2, Users } from 'lucide-react';

const FEATURES = [
  {
    title: 'ROOFTOP TERRACE',
    description: 'Breathe in the city skyline while you bite into urban excellence. Our heated terrace is open year-round.',
    icon: <Wind />,
    image: 'https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'LIVE SPORTS VIEWING',
    description: '4K Ultra-wide screens and stadium-grade acoustics. Never miss a goal, never compromise on flavor.',
    icon: <Tv />,
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1200&auto=format&fit=crop'
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="section-padding px-6 bg-matte-black overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 tracking-tighter uppercase">
            NOT JUST A <span className="text-neon-red">BURGER JOINT</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-sm leading-relaxed">
            We’ve built a sanctuary for urban explorers. High-end dining meets the raw energy of the street.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative group h-[500px] rounded-[40px] overflow-hidden border border-white/10"
            >
              <img 
                src={feature.image} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" 
                alt={feature.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-12 flex flex-col justify-end">
                 <div className="w-16 h-16 rounded-2xl bg-neon-red flex items-center justify-center text-black mb-8 transform -rotate-12 group-hover:rotate-0 transition-transform">
                   {feature.icon}
                 </div>
                 <h3 className="text-3xl font-display font-bold mb-4 tracking-tight drop-shadow-lg">
                   {feature.title}
                 </h3>
                 <p className="text-white/70 max-w-sm mb-8 leading-relaxed">
                   {feature.description}
                 </p>
                 
                 <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-warm-wood">
                      <Volume2 size={14} /> Atmos 5.1
                    </span>
                    <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-warm-wood">
                      <Users size={14} /> Heated Seating
                    </span>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Atmosphere Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-16">
           <div className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">120+</div>
              <p className="text-white/40 text-xs uppercase tracking-widest">Guest Capacity</p>
           </div>
           <div className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-neon-red mb-2">4K</div>
              <p className="text-white/40 text-xs uppercase tracking-widest">Laser Projectors</p>
           </div>
           <div className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">360°</div>
              <p className="text-white/40 text-xs uppercase tracking-widest">City View</p>
           </div>
           <div className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">24/7</div>
              <p className="text-white/40 text-xs uppercase tracking-widest">Urban Pulse</p>
           </div>
        </div>
      </div>
    </section>
  );
}
