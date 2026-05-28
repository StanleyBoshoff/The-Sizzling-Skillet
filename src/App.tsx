import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ConceptStory } from './components/ConceptStory';
import { InteractiveMenu } from './components/InteractiveMenu';
import { SignatureSpotlight } from './components/SignatureSpotlight';
import { PretoriaMap } from './components/PretoriaMap';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { DishDetailModal } from './components/DishDetailModal';
import { MenuItem } from './data/menuData';
import { Calendar } from 'lucide-react';

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState<boolean>(false);
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  const handleOpenReservation = () => {
    setIsReservationOpen(true);
  };

  const handleCloseReservation = () => {
    setIsReservationOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-zinc-100 flex flex-col relative">
      
      {/* Premium Navbar */}
      <Navbar onOpenReservation={handleOpenReservation} />

      {/* Main Content */}
      <main className="flex-1">
        
        {/* Big Hero Section with AI Food Image */}
        <Hero onOpenReservation={handleOpenReservation} />

        {/* Brand Concept Story with AI Interior Image */}
        <ConceptStory />

        {/* Interactive Digital Menu Snippet */}
        <InteractiveMenu 
          onSelectDish={(dish) => setSelectedDish(dish)} 
          onOpenReservation={handleOpenReservation}
        />

        {/* Tomahawk Signature Highlight with AI Premium Steak Image */}
        <SignatureSpotlight onOpenReservation={handleOpenReservation} />

        {/* Client Trust Accolades */}
        <Testimonials />

        {/* Interactive Custom Pretoria Location & Map Dashboard */}
        <PretoriaMap />

      </main>

      {/* Comprehensive Footer */}
      <Footer onOpenReservation={handleOpenReservation} />

      {/* Floating Action Button for Reservations - extremely prominent */}
      <button
        onClick={handleOpenReservation}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 px-5 py-3.5 text-sm font-semibold text-white shadow-2xl shadow-amber-600/40 hover:scale-105 active:scale-95 transition-all duration-300 border border-amber-400/20 group"
        aria-label="Open Table Reservations"
      >
        <Calendar className="w-5 h-5 animate-pulse" />
        <span className="tracking-wide">Reserve Table</span>
        
        {/* Subtle indicator beacon */}
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
        </span>
      </button>

      {/* Interactive Reservation Modal */}
      <ReservationModal 
        isOpen={isReservationOpen} 
        onClose={handleCloseReservation} 
      />

      {/* Interactive Dish Pairings Detail Modal */}
      <DishDetailModal 
        dish={selectedDish} 
        onClose={() => setSelectedDish(null)}
        onOpenReservation={handleOpenReservation}
      />

    </div>
  );
}
