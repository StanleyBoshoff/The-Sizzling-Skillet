import React, { useState } from 'react';
import { MENU_ITEMS, CATEGORIES, MenuItem } from '../data/menuData';
import { Sparkles, Wine, ChevronRight } from 'lucide-react';

interface InteractiveMenuProps {
  onSelectDish: (dish: MenuItem) => void;
  onOpenReservation: () => void;
}

export const InteractiveMenu: React.FC<InteractiveMenuProps> = ({ onSelectDish, onOpenReservation }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredItems = MENU_ITEMS.filter(item => {
    const matchesCategory = activeCategory === 'all' ? true : item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.ingredients.some(i => i.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-24 bg-[#0b0b0b] relative">
      
      {/* Background glow accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-12 left-0 w-96 h-96 bg-zinc-700/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Wine className="w-3.5 h-3.5" /> Handcrafted For Connoisseurs
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif tracking-tight">
            The Sizzling <span className="text-gold-gradient">Gourmet Menu</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base font-light">
            Explore our curated culinary collection. Click on any masterpiece to discover bespoke sommelier wine pairings and ingredient origins.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
          
          {/* Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full lg:w-auto">
            {CATEGORIES.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-amber-600 text-white shadow-md shadow-amber-600/20 scale-105'
                    : 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="w-full lg:w-72">
            <div className="relative">
              <input
                type="text"
                placeholder="Search ingredients, cuts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition-colors"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-12 glass-panel rounded-2xl">
            <p className="text-zinc-400 text-base">No menu items match your search criteria.</p>
            <button 
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }} 
              className="mt-4 text-xs font-semibold text-amber-500 hover:text-amber-400 underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredItems.map(item => (
              <div 
                key={item.id}
                onClick={() => onSelectDish(item)}
                className="glass-panel rounded-2xl p-6 hover:border-amber-500/40 transition-all duration-300 group cursor-pointer relative overflow-hidden flex flex-col justify-between"
              >
                {/* Optional Top Highlight Badge */}
                {item.isChefSignature && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-600 to-amber-700 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-lg shadow-sm flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5" /> Chef's Masterpiece
                  </div>
                )}

                <div>
                  {/* Item Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-serif font-bold text-white group-hover:text-amber-400 transition-colors">
                        {item.name}
                      </h3>
                      {/* Dietary / Feature Tags */}
                      <div className="flex flex-wrap gap-1.5 mt-1.5">
                        {item.tags.map(tag => (
                          <span key={tag} className="text-[10px] bg-white/5 text-zinc-400 px-2 py-0.5 rounded border border-white/5 font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex-shrink-0 text-right">
                      <span className="text-xl font-serif font-bold text-amber-500 block">
                        R {item.price}
                      </span>
                      {item.calories && (
                        <span className="text-[10px] text-zinc-500 block">
                          ~{item.calories} kcal
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-zinc-300 font-light line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Ingredients string */}
                  {item.ingredients && item.ingredients.length > 0 && (
                    <div className="mt-3 text-xs text-zinc-500 flex flex-wrap gap-x-2 gap-y-1 items-center">
                      <span className="text-zinc-400 font-medium">Crafted with:</span>
                      {item.ingredients.join(' • ')}
                    </div>
                  )}
                </div>

                {/* Footer Pairing Link */}
                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                  {item.pairing ? (
                    <span className="text-amber-500/90 font-medium flex items-center gap-1">
                      <Wine className="w-3.5 h-3.5" /> Sommelier Pairing Available
                    </span>
                  ) : (
                    <span className="text-zinc-500 italic">Freshly prepared to perfection</span>
                  )}
                  
                  <span className="text-zinc-400 group-hover:text-white inline-flex items-center gap-1 font-medium transition-colors">
                    View Details <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Dynamic CTA at bottom of menu */}
        <div className="mt-16 glass-panel rounded-2xl p-8 text-center border-amber-500/20 max-w-3xl mx-auto">
          <h3 className="text-xl font-serif font-bold text-white">Have a special dietary requirement or planning a large function?</h3>
          <p className="mt-2 text-sm text-zinc-300 font-light">
            Our Master Grillers and Executive Chef gladly accommodate bespoke menus, Halal-certified private sourcing, and dedicated VIP room bookings.
          </p>
          <div className="mt-6 flex justify-center">
            <button
              onClick={onOpenReservation}
              className="inline-flex items-center gap-2 rounded-full bg-amber-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-amber-500 transition-all"
            >
              Reserve a Custom Dining Experience
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
