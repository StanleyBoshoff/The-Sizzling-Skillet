import React, { useState } from 'react';
import { UtensilsCrossed, Send, Heart } from 'lucide-react';

interface FooterProps {
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 6000);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#050505] text-zinc-400 pt-16 pb-12 border-t border-white/10 relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          
          {/* Col 1 & 2: Brand & Newsletter */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-600 text-white font-bold">
                <UtensilsCrossed className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold tracking-wider text-white font-serif">
                THE SIZZLING SKILLET
              </span>
            </a>

            <p className="mt-4 text-xs text-zinc-400 leading-relaxed max-w-sm">
              Pretoria's paramount destination for uncompromised 28-day dry-aged steaks and gourmet high-end artisan burgers. Sourced from pristine local pastures.
            </p>

            {/* Newsletter */}
            <div className="mt-6">
              <span className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                Join The Secret Skillet Club
              </span>
              
              {subscribed ? (
                <div className="text-xs text-emerald-400 bg-emerald-500/10 p-2.5 rounded-lg border border-emerald-500/20">
                  ✓ Welcome to the inner circle! Watch your inbox for secret off-menu invites.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex max-w-sm">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/5 border border-white/10 rounded-l-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500 w-full"
                  />
                  <button
                    type="submit"
                    className="bg-amber-600 hover:bg-amber-500 text-white px-4 rounded-r-lg transition-colors flex items-center justify-center"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
              <span className="block text-[10px] text-zinc-600 mt-1">
                We respect your privacy. Unsubscribe at any time.
              </span>
            </div>

          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Gastronomy
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#concept" className="hover:text-amber-400 transition-colors">The Concept</a></li>
              <li><a href="#menu" className="hover:text-amber-400 transition-colors">Gourmet Menu</a></li>
              <li><a href="#signatures" className="hover:text-amber-400 transition-colors">Tomahawk Spotlight</a></li>
              <li><a href="#location" className="hover:text-amber-400 transition-colors">Flagship Cellars</a></li>
              <li>
                <button onClick={onOpenReservation} className="text-amber-500 hover:underline text-left">
                  Instant Table Reservation
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Locations Summary */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Pretoria Cellars
            </h4>
            <ul className="space-y-2 text-xs text-zinc-500">
              <li>
                <strong className="text-zinc-300 block">Waterkloof Heights</strong>
                142 Sizzling Ave
              </li>
              <li className="pt-1">
                <strong className="text-zinc-300 block">Menlyn Maine</strong>
                Pegasus Building
              </li>
              <li className="pt-1">
                <strong className="text-zinc-300 block">Brooklyn Fine Grill</strong>
                280 Dey Street
              </li>
            </ul>
          </div>

          {/* Col 5: Hours */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Flagship Hours
            </h4>
            <ul className="space-y-1.5 text-xs text-zinc-500">
              <li><span className="text-zinc-300">Mon – Thu:</span> 12:00 – 22:30</li>
              <li><span className="text-zinc-300">Fri – Sat:</span> 12:00 – 23:30</li>
              <li><span className="text-zinc-300">Sunday:</span> 12:00 – 21:00</li>
              <li className="pt-2 text-amber-500/80">Smart Casual attire requested.</li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-600">
          <p>© {new Date().getFullYear()} The Sizzling Skillet Pretoria. All rights reserved.</p>
          
          <p className="flex items-center gap-1">
            Crafted with <Heart className="w-3 h-3 text-amber-600 fill-amber-600" /> by The Sizzling Skillet Digital Team.
          </p>
        </div>

      </div>

    </footer>
  );
};
