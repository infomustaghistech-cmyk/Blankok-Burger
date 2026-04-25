import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, ExternalLink, MapPin, Clock, Phone } from 'lucide-react';

export function DeliverySection() {
  return (
    <section id="delivery" className="section-padding px-6 bg-matte-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-neon-red/10 text-neon-red px-4 py-2 rounded-full text-sm font-bold mb-6 uppercase tracking-widest">
            <Smartphone size={16} /> Direct Delivery
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 tracking-tighter">
            WE BRING THE <br />
            <span className="text-warm-wood">URBAN HEAT</span> TO YOU
          </h2>
          <p className="text-sm text-white/50 mb-8 leading-relaxed">
            Can't make it to our rooftop? We've partnered with the best to ensure your burger arrives with the same wood-fired integrity as it left our kitchen.
          </p>

          <div className="flex flex-wrap gap-4">
             <a 
               href="#" 
               className="flex items-center gap-4 px-6 py-3 border border-white/10 rounded-full hover:border-white/30 hover:bg-white/5 transition-all group"
             >
               <span className="text-white/80 font-bold text-sm">Uber Eats</span>
               <div className="w-6 h-6 flex items-center justify-center text-white/40 group-hover:text-neon-red transition-colors">
                  <ExternalLink size={14} />
               </div>
             </a>

             <a 
               href="#" 
               className="flex items-center gap-4 px-6 py-3 border border-white/10 rounded-full hover:border-white/30 hover:bg-white/5 transition-all group"
             >
               <span className="text-white/80 font-bold text-sm">Deliveroo</span>
               <div className="w-6 h-6 flex items-center justify-center text-white/40 group-hover:text-[#00ccbc] transition-colors">
                  <ExternalLink size={14} />
               </div>
             </a>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-6 text-white/30 border-t border-white/5 pt-8">
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neon-red">
                 <Clock size={18} />
               </div>
               <div>
                 <p className="text-xs uppercase tracking-widest mb-1">Open Now</p>
                 <p className="text-white font-medium">Until 11:30 PM</p>
               </div>
             </div>
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neon-red">
                 <Phone size={18} />
               </div>
               <div>
                 <p className="text-xs uppercase tracking-widest mb-1">Direct Line</p>
                 <p className="text-white font-medium">+1 (555) BLANKOK</p>
               </div>
             </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square md:aspect-auto md:h-[600px] bg-white/5 rounded-[40px] overflow-hidden border border-white/10"
        >
          <div className="absolute inset-0 z-0 overflow-hidden">
             <img 
               src="https://images.unsplash.com/photo-1521305916504-4a1121188589?q=80&w=1200&auto=format&fit=crop" 
               className="w-full h-full object-cover opacity-40 mix-blend-luminosity hover:opacity-100 transition-opacity duration-1000"
               alt="Kitchen atmosphere"
             />
          </div>
          
          <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black to-transparent">
             <div className="bg-matte-black/60 backdrop-blur-xl p-8 rounded-3xl border border-white/10 max-w-sm">
                <MapPin className="text-neon-red mb-4" />
                <h4 className="font-display font-bold text-2xl mb-2">Blankok HQ</h4>
                <p className="text-white/60 text-sm mb-6">
                  247 Urban Avenue, Rooftop Level <br />
                  Manhattan New District, 10001
                </p>
                <div className="h-40 w-full rounded-2xl overflow-hidden bg-white/5 grayscale saturate-50 contrast-125">
                   {/* Google Maps Embed Placeholder Frame */}
                   <iframe 
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280821873!2d-74.11976373946229!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                     width="100%" 
                     height="100%" 
                     style={{ border: 0 }} 
                     allowFullScreen={false} 
                     loading="lazy" 
                     referrerPolicy="no-referrer-when-downgrade"
                   />
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
