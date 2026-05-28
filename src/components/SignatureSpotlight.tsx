import React from 'react';
import { Flame, Sparkles, Check } from 'lucide-react';

interface SignatureSpotlightProps {
  onOpenReservation: () => void;
}

export const SignatureSpotlight: React.FC<SignatureSpotlightProps> = ({ onOpenReservation }) => {
  return (
    <section id="signatures" className="py-24 bg-[#070707] relative overflow-hidden">
      
      {/* Background radial overlays */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-600/20 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500 mb-3">
              <Sparkles className="w-3.5 h-3.5" /> The Masterpiece Cut
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif tracking-tight">
              850g Bone-In <br />
              <span className="text-gold-gradient">Tomahawk Ribeye</span>
            </h2>

            <p className="mt-6 text-zinc-300 font-light leading-relaxed">
              For those who demand the absolute maximum expression of flavour. This prime cut is dry-aged on the bone in our specialized Himalayan pink salt chamber, slowly cultivating an extraordinary melt-in-your-mouth tenderness and complex nutty umami undertones.
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Seared over high-heat charcoal to seal in profound natural juices</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Finished with hot melted herb-infused compound butter</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Served with whole caramelized roasted garlic and bone marrow baste</span>
              </div>
            </div>

            {/* Price & Action */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <div>
                <span className="text-xs text-zinc-500 block uppercase font-semibold">Signature Price</span>
                <span className="text-3xl font-serif font-bold text-amber-500">R 680</span>
                <span className="text-xs text-zinc-400 ml-1.5">/ perfect for sharing</span>
              </div>

              <button
                onClick={onOpenReservation}
                className="rounded-full bg-amber-600 hover:bg-amber-500 text-white font-semibold py-3 px-8 text-sm shadow-lg transition-all duration-300 hover:scale-105"
              >
                Reserve This Cut
              </button>
            </div>

            {/* Sommelier Suggestion Note */}
            <div className="mt-8 pt-6 border-t border-white/5">
              <p className="text-xs text-zinc-400">
                <strong className="text-amber-400">Sommelier's Advice:</strong> Pair this exquisite Tomahawk with the full-bodied <span className="text-white italic">Kanonkop Paul Sauer</span>. The structured tannins slice through the deep marbling perfectly.
              </p>
            </div>

          </div>

          {/* Right Column: Premium AI Steak Image Showcase */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Premium Framed Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/3] group">
                <img 
                  src="/images/premium-steak.jpg" 
                  alt="Dry-Aged Tomahawk Steak at The Sizzling Skillet" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
                    Cinematic Plating
                  </span>
                  <h4 className="text-lg font-serif text-white font-bold">
                    Dry-Aged Tomahawk with Herb Compound Butter
                  </h4>
                </div>
              </div>

              {/* Absolute highlight badge */}
              <div className="absolute -bottom-5 right-6 glass-panel rounded-xl px-4 py-2 flex items-center gap-2 border border-white/10">
                <Flame className="w-4 h-4 text-amber-500 animate-flicker" />
                <span className="text-xs font-bold text-white tracking-wider">WOOD-FIRED PERFECTION</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
