import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Flame, Leaf, Utensils } from 'lucide-react';
import { cn } from '../lib/utils';

const CATEGORIES = ['All', 'Signature', 'Sides', 'Craft Beer', 'Desserts'];

const MENU_ITEMS = [
  {
    id: 1,
    name: 'Blankok Supreme',
    price: '$18',
    description: 'Black Angus, Truffle Mayo, Aged Cheddar, Crispy Onions.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop',
    tags: ['Best Seller'],
    calories: '850 kcal'
  },
  {
    id: 2,
    name: 'Urban Fire',
    price: '$16',
    description: 'Double Patty, Jalapeño Jam, Pepper Jack, Spicy Aioli.',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=800&auto=format&fit=crop',
    tags: ['Spicy'],
    calories: '720 kcal'
  },
  {
    id: 3,
    name: 'The Woodsman',
    price: '$19',
    description: 'Smoked Provolone, Wild Mushrooms, Wood-Coal Bacon.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop',
    tags: ['New'],
    calories: '910 kcal'
  },
  {
    id: 4,
    name: 'Garden Noir',
    price: '$15',
    description: 'Plant-based Patty, Avocado, Miso Beets, Vegan Brioche.',
    image: 'https://images.unsplash.com/photo-1512152272829-e3139592d56f?q=80&w=800&auto=format&fit=crop',
    tags: ['Vegan'],
    calories: '540 kcal'
  },
  {
    id: 5,
    name: 'Double Smoke',
    price: '$21',
    description: 'Triple Prime Beef, Hickory Sauce, Double Smoked Gouda.',
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=800&auto=format&fit=crop',
    tags: ['Signature'],
    calories: '1100 kcal'
  },
  {
    id: 6,
    name: 'Truffle Fries',
    price: '$8',
    description: 'Hand-cut Potatoes, Parmesan, Herbs, Truffle Oil.',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=800&auto=format&fit=crop',
    tags: ['Side'],
    calories: '320 kcal'
  },
  {
    id: 7,
    name: 'Crispy Truffle',
    price: '$17',
    description: 'Buttermilk Chicken, Swiss, Truffle Honey, Pickles.',
    image: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?q=80&w=800&auto=format&fit=crop',
    tags: ['Trending'],
    calories: '780 kcal'
  },
  {
    id: 8,
    name: 'Neon Shake',
    price: '$9',
    description: 'Madagascar Vanilla, Dragon Fruit Swirl, Gold Flakes.',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800&auto=format&fit=crop',
    tags: ['Sweet'],
    calories: '450 kcal'
  }
];

export function MenuSection() {
  return (
    <section id="menu" className="section-padding px-6 bg-matte-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-2 tracking-tighter uppercase">
              Selected <span className="text-neon-red">Flavor</span>
            </h2>
            <p className="text-white/30 max-w-sm text-[11px]">
              Artisanal composition meets urban street grit. Curated daily.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat, i) => (
              <button
                key={cat}
                className={cn(
                  "px-5 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase transition-all border",
                  i === 0 
                  ? "bg-white text-black border-white" 
                  : "bg-transparent text-white/40 border-white/5 hover:border-white/20 hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MENU_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group bg-[#0D0D0D] rounded-xl overflow-hidden border border-[#1A1A1A] hover:border-neon-red/30 hover:-translate-y-1.5 transition-all duration-500"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="border border-neon-red/40 text-neon-red text-[8px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-widest bg-black/40 backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Minimal Add Icon Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-500">
                     <ShoppingCart size={18} />
                   </div>
                </div>
              </div>
              
              <div className="p-5">
                <div className="mb-1">
                  <h3 className="text-base font-display font-bold group-hover:text-neon-red transition-colors inline-block mr-2">
                    {item.name}
                  </h3>
                  <span className="text-sm font-bold text-warm-wood/80">
                    {item.price}
                  </span>
                </div>
                <p className="text-[#999] text-[13px] leading-relaxed line-clamp-2 h-10">
                  {item.description}
                </p>
                
                {/* Revealable Details */}
                <div className="h-0 opacity-0 group-hover:h-8 group-hover:opacity-100 group-hover:mt-4 overflow-hidden transition-all duration-500 border-t border-white/5 flex items-center justify-between pt-2">
                  <div className="flex items-center gap-3 text-white/30 text-[10px] uppercase tracking-tighter">
                    <span className="flex items-center gap-1">
                      <Flame size={10} /> {item.calories}
                    </span>
                  </div>
                  <div className="text-[10px] text-white/20 font-mono italic">
                    Chef Choice
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
           <button className="px-12 py-3 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 rounded-full text-white/40 hover:text-white/80 transition-all text-[11px] font-bold tracking-[0.2em] uppercase">
              Full Archive
           </button>
        </div>
      </div>
    </section>
  );
}
