import React from 'react';
import { Sparkles, Flame, ShieldCheck, HeartHandshake } from 'lucide-react';

export const ConceptStory: React.FC = () => {
  return (
    <section id="concept" className="py-24 bg-[#0e0e0e] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-900/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-amber-500 font-semibold">
            Our Culinary Philosophy
          </span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-bold text-white font-serif tracking-tight">
            The Anatomy of <span className="text-gold-gradient">Flavour</span>
          </h2>
          <div className="mt-3 flex justify-center">
            <div className="w-16 h-0.5 bg-amber-600 rounded" />
          </div>
        </div>

        {/* Story Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: AI Image of Cozy Interior */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Image Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/5] z-10">
                <img 
                  src="/images/cozy-interior.jpg" 
                  alt="Cozy Interior of The Sizzling Skillet Pretoria" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                
                {/* Subtle vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-black/30" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-panel rounded-xl p-4 border border-white/10">
                    <p className="text-xs text-amber-400 uppercase tracking-wider font-semibold">Pretoria Flagship</p>
                    <h4 className="text-base font-serif font-bold text-white mt-0.5">Waterkloof Heights Atmosphere</h4>
                    <p className="text-xs text-zinc-300 mt-1">
                      Designed for intimate dinners, critical milestones, and uncompromising gastronomy.
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative back framing */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-amber-600/30 z-0 hidden sm:block" />
              
              {/* Secondary floating metric badge */}
              <div className="absolute -right-6 top-12 glass-panel rounded-xl p-4 shadow-xl border border-white/10 z-20 hidden sm:block max-w-[160px] text-center">
                <Sparkles className="w-6 h-6 text-amber-400 mx-auto mb-1" />
                <span className="block text-2xl font-bold font-serif text-white">100%</span>
                <span className="block text-[10px] text-zinc-400 uppercase tracking-wider">Wood-Fired Josper Coals</span>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-6">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-snug">
              An obsessive approach to pure, uncompromised dry-aged beef.
            </h3>
            
            <p className="mt-4 text-zinc-300 font-light leading-relaxed">
              Founded by master grillers in the heart of Pretoria, <strong className="text-white font-medium">The Sizzling Skillet</strong> was born out of a rebellion against average steaks and rushed fast-casual burgers. We source exclusively from certified sustainable South African pastures, curating MS 7+ Wagyu and free-range Angus.
            </p>

            {/* Quality Pillars */}
            <div className="mt-8 space-y-6">
              
              {/* Pillar 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-600/10 border border-amber-500/20 flex items-center justify-center text-amber-500">
                  <Flame className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-serif font-bold text-white">28-Day Dry-Aging Chamber</h4>
                  <p className="text-sm text-zinc-400 mt-1">
                    Every premium cut rests in our climate-controlled Himalayan salt brick chamber, naturally concentrating real beef flavours and guaranteeing absolute tenderness.
                  </p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-600/10 border border-amber-500/20 flex items-center justify-center text-amber-500">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-serif font-bold text-white">Artisanal Brioche & Buns</h4>
                  <p className="text-sm text-zinc-400 mt-1">
                    Baked twice daily using free-range eggs and real cultured butter. Our buns hold the profound juiciness of our thick gourmet patties without ever turning soggy.
                  </p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-600/10 border border-amber-500/20 flex items-center justify-center text-amber-500">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-serif font-bold text-white">Pretoria Hospitality</h4>
                  <p className="text-sm text-zinc-400 mt-1">
                    Whether you are joining us for a celebratory Tomahawk steak or a weekday Gourmet Burger indulgence, our dedicated front-of-house team treats every guest like family.
                  </p>
                </div>
              </div>

            </div>

            {/* Verification Quote */}
            <div className="mt-10 p-4 rounded-xl bg-white/5 border-l-4 border-amber-500">
              <p className="text-xs text-zinc-300 italic">
                "The Sizzling Skillet seamlessly bridges the gap between ultra-fine dining steakhouses and the vibrant, modern gourmet burger revolution."
              </p>
              <span className="block text-[10px] text-amber-400 uppercase tracking-wider font-semibold mt-2">
                — Head Chef Hendrik van Zyl
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
