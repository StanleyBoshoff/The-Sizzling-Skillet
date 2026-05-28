import React, { useState, useEffect } from 'react';
import { UtensilsCrossed, Calendar, Menu as MenuIcon, X, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Concept', href: '#concept' },
    { name: 'Gourmet Menu', href: '#menu' },
    { name: 'Signature Cuts', href: '#signatures' },
    { name: 'Pretoria Location', href: '#location' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0b0b0b]/90 backdrop-blur-md py-3 border-b border-white/10 shadow-xl' 
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-amber-600 text-white font-bold shadow-lg group-hover:scale-105 transition-transform">
              <UtensilsCrossed className="w-5 h-5" />
              {/* Decorative subtle flame indicator */}
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
              </span>
            </div>
            <div>
              <span className="block text-xl font-bold tracking-wider text-white font-serif group-hover:text-amber-400 transition-colors">
                THE SIZZLING SKILLET
              </span>
              <span className="flex items-center gap-1 text-[10px] tracking-widest text-zinc-400 uppercase font-sans">
                <MapPin className="w-2.5 h-2.5 text-amber-500" /> Pretoria Fine Dining
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-300 hover:text-amber-400 transition-colors tracking-wide relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-500 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenReservation}
              className="relative group overflow-hidden rounded-full bg-gradient-to-r from-amber-600 to-amber-700 px-6 py-2.5 text-sm font-semibold tracking-wide text-white shadow-md transition-all duration-300 hover:shadow-amber-600/30 hover:shadow-lg active:scale-95"
            >
              <span className="absolute inset-0 w-full h-full bg-white/10 group-hover:bg-transparent transition-colors" />
              <span className="relative flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Reserve Table
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center sm:hidden gap-2">
            <button
              onClick={onOpenReservation}
              className="rounded-full bg-amber-600 p-2 text-white shadow"
              aria-label="Reserve Table"
            >
              <Calendar className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-zinc-400 hover:bg-white/5 hover:text-white transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 right-0 bg-[#0b0b0b]/98 border-b border-white/10 px-4 py-6 backdrop-blur-xl animate-fadeIn">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-lg font-serif text-zinc-200 hover:text-amber-400 py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                handleLinkClick();
                onOpenReservation();
              }}
              className="mt-2 w-full flex items-center justify-center gap-2 rounded-full bg-amber-600 py-3 font-semibold text-white shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              Reserve Your Table
            </button>
            
            <div className="mt-4 pt-4 border-t border-white/5 text-center text-xs text-zinc-500">
              <p>📍 142 Sizzling Avenue, Waterkloof Heights, Pretoria</p>
              <p className="mt-1">📞 +27 (0)12 456 7890</p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
