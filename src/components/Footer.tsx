import React from 'react';
import { Instagram, Twitter, Facebook, ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] pt-16 pb-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-neon-red rounded flex items-center justify-center font-display font-bold text-lg text-black">
                B
              </div>
              <span className="font-display font-bold text-xl tracking-tighter">
                BLANKOK<span className="text-neon-red">.</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              The ultimate urban premium burger experience. We blend artisanal techniques with street grit.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-neon-red hover:border-neon-red/50 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
             <h4 className="font-display font-bold text-white mb-8 tracking-wide">NAVIGATION</h4>
             <ul className="flex flex-col gap-4 text-white/40 text-sm">
                <li><a href="#menu" className="hover:text-neon-red transition-colors">Digital Menu</a></li>
                <li><a href="#delivery" className="hover:text-neon-red transition-colors">Order Online</a></li>
                <li><a href="#location" className="hover:text-neon-red transition-colors">Our Locations</a></li>
                <li><a href="#" className="hover:text-neon-red transition-colors">Gift Cards</a></li>
             </ul>
          </div>

          <div>
             <h4 className="font-display font-bold text-white mb-8 tracking-wide">LEGAL</h4>
             <ul className="flex flex-col gap-4 text-white/40 text-sm">
                <li><a href="#" className="hover:text-neon-red transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-neon-red transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-neon-red transition-colors">Cookie Settings</a></li>
                <li><a href="#" className="hover:text-neon-red transition-colors">Accessibility</a></li>
             </ul>
          </div>

          <div>
             <h4 className="font-display font-bold text-white mb-8 tracking-wide">NEWSLETTER</h4>
             <p className="text-white/40 text-xs mb-6 uppercase tracking-widest">Join the Urban Elite</p>
             <div className="relative">
                <input 
                  type="email" 
                  placeholder="Drop your email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-neon-red transition-colors"
                />
                <button className="absolute right-2 top-2 w-10 h-10 bg-neon-red rounded-lg flex items-center justify-center text-black">
                   <ArrowUpRight size={20} />
                </button>
             </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-white/20 text-xs">
             © 2024 BLANKOK BURGER. ALL RIGHTS RESERVED.
           </p>
           <div className="flex gap-8">
              <span className="text-[10px] text-white/10 tracking-[0.3em] font-bold uppercase">
                Urban Crafted · Street Refined
              </span>
           </div>
        </div>
      </div>
    </footer>
  );
}
