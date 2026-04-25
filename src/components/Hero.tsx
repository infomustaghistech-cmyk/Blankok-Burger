import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { BurgerScene } from './BurgerScene';

export function Hero() {
  return (
    <section className="relative min-h-[75vh] flex items-center pt-24 pb-12 px-6 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-neon-red/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-warm-wood/5 blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="z-10"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-neon-red text-[10px] font-bold tracking-[0.3em] uppercase opacity-80">
              Urban Elite Gastronomy
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-[0.95] mb-5 tracking-tighter">
            THE ART OF <br />
            <span className="text-white/30">URBAN</span> BURGER
          </h1>
          
          <p className="text-sm text-white/40 max-w-sm mb-8 leading-relaxed font-sans">
            Minimalist craft. Maximalist flavor. Experience the signature Blankok 
            wood-fired aged beef burger in the heart of the city.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button className="bg-neon-red text-black px-8 py-3 rounded-full font-bold text-xs flex items-center justify-center gap-2 group transition-all hover:brightness-110 active:scale-95">
              VIEW MENU
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-white/5 hover:border-white/10 hover:bg-white/5 text-white/60 px-8 py-3 rounded-full font-bold text-xs transition-all active:scale-95">
              LOCATIONS
            </button>
          </div>

          <div className="mt-12 flex items-center gap-6 opacity-30">
            <div>
              <div className="text-lg font-display font-bold">100%</div>
              <div className="text-[8px] uppercase tracking-widest">Aged Beef</div>
            </div>
            <div className="w-px h-6 bg-white/20" />
            <div>
              <div className="text-lg font-display font-bold">24H</div>
              <div className="text-[8px] uppercase tracking-widest">Fermentation</div>
            </div>
          </div>
        </motion.div>

        {/* Right 3D Model placeholder area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="relative h-[250px] md:h-[400px] w-full flex items-center justify-end md:pr-12"
        >
          <div className="w-full h-full max-w-[340px]">
            <BurgerScene />
          </div>
          {/* Subtle Glow behind model */}
          <div className="absolute inset-0 bg-neon-red/5 rounded-full blur-[60px] -z-10 scale-50 translate-x-20" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-2 bg-neon-red rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
