import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Delivery', href: '#delivery' },
    { name: 'Location', href: '#location' },
    { name: 'Experience', href: '#features' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-3',
        isScrolled ? 'bg-matte-black/80 backdrop-blur-lg border-b border-white/5' : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-neon-red rounded flex items-center justify-center font-display font-bold text-lg text-black">
            B
          </div>
          <span className="font-display font-bold text-xl tracking-tighter hidden sm:block">
            BLANKOK<span className="text-neon-red">.</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] font-bold tracking-widest uppercase text-white/50 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-neon-red hover:brightness-110 text-black px-6 py-2 rounded-full font-bold text-[10px] tracking-widest transition-all active:scale-95 flex items-center gap-2">
            <ShoppingBag size={14} />
            ORDER ONLINE
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-matte-black border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-white/70 hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-neon-red text-black px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2">
              <ShoppingBag size={20} />
              ORDER ONLINE
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
