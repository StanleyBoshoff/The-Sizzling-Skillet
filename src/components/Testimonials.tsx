import React from 'react';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      quote: "The dry-aging execution on the 850g Tomahawk sets a completely new benchmark for South African steakhouses. Flawless texture and intense umami.",
      author: "Eat Out South Africa",
      role: "Annual Fine Dining Review",
      stars: 5
    },
    {
      quote: "Finally, a fine-dining establishment that takes the concept of the Gourmet Burger with absolute seriousness. The Wagyu Reserve is a revelation.",
      author: "Pretoria Culinary Gazette",
      role: "Editor's Pick",
      stars: 5
    },
    {
      quote: "From the custom Himalayan salt rooms to the exquisite sommelier wine pairings, every detail at Waterkloof Heights exudes world-class sophistication.",
      author: "Chef Lerato M.",
      role: "Gauteng Gastronomy Guild",
      stars: 5
    }
  ];

  return (
    <section className="py-20 bg-[#0e0e0e] relative overflow-hidden">
      
      {/* Subtle border top */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
            Critical Acclaim
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white mt-1">
            Praised by Palates That Matter
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div 
              key={i}
              className="glass-panel rounded-2xl p-6 sm:p-8 relative flex flex-col justify-between border-white/5"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-white/5" />
              
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(r.stars)].map((_, sIdx) => (
                    <Star key={sIdx} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-zinc-300 font-light italic leading-relaxed">
                  "{r.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5">
                <span className="block text-sm font-serif font-bold text-white">
                  {r.author}
                </span>
                <span className="block text-xs text-amber-500 font-medium">
                  {r.role}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Brand logos simulation */}
        <div className="mt-12 pt-10 border-t border-white/5 flex flex-wrap items-center justify-center gap-8 sm:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all">
          <span className="text-xs font-serif font-bold tracking-widest text-white uppercase">★ EAT OUT SA ★</span>
          <span className="text-xs font-serif font-bold tracking-widest text-white uppercase">PRETORIA NEWS</span>
          <span className="text-xs font-serif font-bold tracking-widest text-white uppercase">WINE & DINE MAGAZINE</span>
          <span className="text-xs font-serif font-bold tracking-widest text-white uppercase">GAUTENG LIFESTYLE</span>
        </div>

      </div>
    </section>
  );
};
