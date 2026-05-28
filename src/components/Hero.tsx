import React from 'react';
import { Calendar, ChevronRight, Star, Clock, Flame, Award } from 'lucide-react';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Background with parallax effect simulation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0b] via-[#0b0b0b]/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-transparent to-black/60 z-10" />
        
        {/* Main Hero Image - Generated Gourmet Burger */}
        <img 
          src="/images/hero-burger.jpg" 
          alt="Gourmet Burger at The Sizzling Skillet" 
          className="w-full h-full object-cover object-center scale-105 animate-pulse-slow"
          style={{ animationDuration: '20s' }}
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 text-left">
            
            {/* Fine Dining Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-amber-500/30 backdrop-blur-md mb-6">
              <Flame className="w-4 h-4 text-amber-500 animate-flicker" />
              <span className="text-xs uppercase font-semibold tracking-widest text-amber-400">
                Pretoria's Premier Steak & Burger Destination
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight font-serif">
              Where Bold <br />
              <span className="text-gold-gradient">Flavours</span> Meet <br />
              Pure Elegance
            </h1>

            {/* Sub-headline */}
            <p className="mt-6 text-lg sm:text-xl text-zinc-300 font-light max-w-xl leading-relaxed">
              Experience the pinnacle of culinary artistry. Featuring 28-day dry-aged cuts and prime Wagyu gourmet burgers, masterfully grilled over our signature open wood fires.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-md">
              <button
                onClick={onOpenReservation}
                className="flex-1 flex items-center justify-center gap-3 rounded-full bg-amber-600 hover:bg-amber-500 text-white font-semibold py-4 px-8 text-base shadow-lg shadow-amber-600/25 transition-all duration-300 hover:scale-[1.02]"
              >
                <Calendar className="w-5 h-5" />
                Reserve Table
              </button>
              
              <a
                href="#menu"
                className="flex-1 flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium py-4 px-8 text-base backdrop-blur-md border border-white/10 transition-all duration-300"
              >
                Explore Menu
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Live Availability Status */}
            <div className="mt-8 flex items-center gap-3 text-sm text-zinc-400">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>
                <strong className="text-zinc-200">Limited Seating Available</strong> for tonight in Waterkloof Heights
              </span>
            </div>

            {/* High-End Features Grid */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <span className="block text-2xl font-bold text-white font-serif">28 Days</span>
                <span className="text-xs text-zinc-400">Custom Dry-Aged</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-white font-serif">100%</span>
                <span className="text-xs text-zinc-400">Karoo Wagyu Beef</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-white font-serif">4.9★</span>
                <span className="text-xs text-zinc-400">Pretoria Top Rated</span>
              </div>
            </div>

          </div>

          {/* Right Floating Display Card (Interactive preview) */}
          <div className="lg:col-span-5 relative hidden sm:block">
            
            {/* Main Ambient Glass Frame */}
            <div className="glass-panel rounded-2xl p-6 relative overflow-hidden shadow-2xl border border-white/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl" />
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-300">Chef's Highlight</span>
                </div>
                <div className="flex items-center gap-1 bg-amber-500/20 text-amber-400 px-2.5 py-0.5 rounded text-xs font-semibold">
                  <Star className="w-3 h-3 fill-amber-400" /> Signature
                </div>
              </div>

              {/* Burger Mini Card preview */}
              <div className="mt-4">
                <div className="relative h-48 rounded-xl overflow-hidden group">
                  <img 
                    src="/images/hero-burger.jpg" 
                    alt="The Reserve Burger" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/50 to-transparent p-3">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-600 text-white">R 225</span>
                  </div>
                </div>

                <h3 className="mt-3 text-lg font-serif font-bold text-white">The Sizzling Skillet Reserve</h3>
                <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                  250g house-ground Wagyu & Angus patty, 18-month aged cheddar, black truffle aioli, and caramelized red onion marmalade.
                </p>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-500" /> Crafted fresh to order
                  </span>
                  <button 
                    onClick={onOpenReservation} 
                    className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1"
                  >
                    Taste this tonight →
                  </button>
                </div>
              </div>
            </div>

            {/* Subtle Overlay Review floating badge */}
            <div className="absolute -bottom-6 -left-6 glass-panel rounded-xl p-4 shadow-xl border border-white/10 max-w-xs animate-bounce-subtle">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-zinc-200 mt-1 italic">
                "The absolute best dry-aged burger in all of Gauteng. Exceptional atmosphere."
              </p>
              <span className="block text-[10px] text-zinc-400 mt-1 font-semibold">— EatOut SA Reviewer</span>
            </div>

          </div>

        </div>
      </div>

      {/* Subtle Scroll Down indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase tracking-widest text-zinc-400">Scroll to Explore</span>
        <div className="w-5 h-8 rounded-full border-2 border-zinc-500 flex justify-center pt-1">
          <div className="w-1 h-2 bg-amber-500 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};
