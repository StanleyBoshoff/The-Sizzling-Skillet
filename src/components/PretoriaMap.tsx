import React, { useState } from 'react';
import { MapPin, Clock, Phone, Navigation, Car, Sparkles, Building2 } from 'lucide-react';

interface LocationData {
  id: string;
  name: string;
  subName: string;
  address: string;
  phone: string;
  hours: { days: string; time: string }[];
  parking: string;
  coordinates: { x: number; y: number }; // Percentage for custom map overlay
  isFlagship?: boolean;
}

const LOCATIONS: LocationData[] = [
  {
    id: 'waterkloof',
    name: 'Waterkloof Heights',
    subName: 'Flagship Restaurant & Dry-Aging Cellar',
    address: '142 Sizzling Avenue, Waterkloof Heights, Pretoria, 0181',
    phone: '+27 (0)12 456 7890',
    hours: [
      { days: 'Monday – Thursday', time: '12:00 – 22:30' },
      { days: 'Friday – Saturday', time: '12:00 – 23:30' },
      { days: 'Sunday', time: '12:00 – 21:00' }
    ],
    parking: 'Secure Valet Parking & Private Underground Bays available free of charge.',
    coordinates: { x: 58, y: 42 },
    isFlagship: true
  },
  {
    id: 'menlyn',
    name: 'Menlyn Maine',
    subName: 'Premium Burger Bar & Terrace',
    address: 'Pegasus Building, Amarand Ave, Waterkloof Glen, Pretoria, 0081',
    phone: '+27 (0)12 345 6789',
    hours: [
      { days: 'Monday – Sunday', time: '11:00 – 23:00' }
    ],
    parking: 'Access via Menlyn Maine Central Parkade (Level -1 direct lift access).',
    coordinates: { x: 74, y: 65 }
  },
  {
    id: 'brooklyn',
    name: 'Brooklyn Fine Grill',
    subName: 'Intimate Dining & Cocktail Lounge',
    address: '280 Dey Street, Brooklyn, Pretoria, 0181',
    phone: '+27 (0)12 987 6543',
    hours: [
      { days: 'Tuesday – Saturday', time: '16:00 – 23:00' },
      { days: 'Sunday – Monday', time: 'Closed' }
    ],
    parking: 'Street-level secure VIP monitored bays with 24/7 private security.',
    coordinates: { x: 45, y: 55 }
  }
];

export const PretoriaMap: React.FC = () => {
  const [activeLoc, setActiveLoc] = useState<LocationData>(LOCATIONS[0]);
  const [simulatedRoute, setSimulatedRoute] = useState<boolean>(false);
  const [userOrigin, setUserOrigin] = useState<string>('Pretoria CBD');

  const handleGetDirections = (e: React.FormEvent) => {
    e.preventDefault();
    setSimulatedRoute(true);
    // Auto reset route after 10 seconds for demo exploration
    setTimeout(() => {
      setSimulatedRoute(false);
    }, 10000);
  };

  return (
    <section id="location" className="py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5">
      
      {/* Background visual map contour grid lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-amber-500 font-semibold">
            Visit The Sizzling Skillet
          </span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-bold text-white font-serif tracking-tight">
            Our <span className="text-gold-gradient">Pretoria</span> Locations
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base font-light">
            Strategically located across Pretoria's most sophisticated dining districts. Select a location below to view bespoke amenities and private parking access.
          </p>
        </div>

        {/* Location Switcher Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {LOCATIONS.map((loc) => (
            <button
              key={loc.id}
              onClick={() => {
                setActiveLoc(loc);
                setSimulatedRoute(false);
              }}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
                activeLoc.id === loc.id 
                  ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/20 scale-105' 
                  : 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>{loc.name}</span>
              {loc.isFlagship && (
                <span className="text-[9px] bg-black/30 text-amber-300 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">
                  Flagship
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Main Interface Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left / Top: Interactive Visual Map Simulator */}
          <div className="lg:col-span-7 relative flex flex-col">
            
            {/* The Custom Map Interface */}
            <div className="glass-panel rounded-2xl overflow-hidden border border-white/10 flex-1 relative min-h-[380px] bg-[#0f0f0f]">
              
              {/* Decorative Custom Map Graphic Background */}
              <div className="absolute inset-0 bg-[#0e0e0e] overflow-hidden">
                
                {/* Simulated Pretoria Highway Arteries */}
                <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* N1 Highway */}
                  <path d="M 85,0 Q 80,40 70,100" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="2,1" />
                  {/* N4 Highway */}
                  <path d="M 0,35 Q 50,30 100,45" fill="none" stroke="#f59e0b" strokeWidth="1.2" />
                  {/* R21 */}
                  <path d="M 65,100 Q 55,60 40,0" fill="none" stroke="#3f3f3f" strokeWidth="1" />
                  
                  {/* Local Urban Street network graphics */}
                  <path d="M 10,20 L 90,25 M 15,50 L 85,45 M 20,80 L 80,75" fill="none" stroke="#222" strokeWidth="0.5" />
                  <path d="M 30,10 L 25,90 M 50,15 L 55,85 M 70,10 L 65,90" fill="none" stroke="#222" strokeWidth="0.5" />
                  
                  {/* Green Spaces simulation (Groenkloof / Austin Roberts) */}
                  <circle cx="35" cy="70" r="12" fill="#142414" opacity="0.4" />
                  <circle cx="75" cy="25" r="8" fill="#142414" opacity="0.4" />
                  <circle cx="50" cy="40" r="6" fill="#142414" opacity="0.3" />
                </svg>

                {/* Map Labels */}
                <div className="absolute top-4 left-4 text-[10px] font-mono text-zinc-600 uppercase tracking-widest select-none">
                  Pretoria Metro Region • Live Telemetry
                </div>

                <div className="absolute bottom-4 right-4 text-[9px] font-mono text-zinc-500 bg-black/40 px-2 py-1 rounded select-none">
                  GPS: 25.7479° S, 28.2293° E
                </div>

                {/* Simulated Route Line */}
                {simulatedRoute && (
                  <svg className="absolute inset-0 w-full h-full z-10 animate-fadeIn" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path 
                      d={`M 20,85 Q 40,60 ${activeLoc.coordinates.x},${activeLoc.coordinates.y}`}
                      fill="none" 
                      stroke="#10b981" 
                      strokeWidth="1.5"
                      strokeDasharray="2,2"
                      className="animate-dash"
                    />
                    {/* Origin Pin */}
                    <circle cx="20" cy="85" r="2" fill="#10b981" />
                    <text x="20" y="91" fill="#10b981" fontSize="3" textAnchor="middle" fontWeight="bold">Origin</text>
                  </svg>
                )}

                {/* All Location Pins */}
                {LOCATIONS.map((loc) => {
                  const isActive = loc.id === activeLoc.id;
                  return (
                    <div
                      key={loc.id}
                      onClick={() => {
                        setActiveLoc(loc);
                        setSimulatedRoute(false);
                      }}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
                      style={{ left: `${loc.coordinates.x}%`, top: `${loc.coordinates.y}%` }}
                    >
                      {/* Pulse Ring for Active */}
                      {isActive && (
                        <span className="absolute -inset-2 rounded-full bg-amber-500/30 animate-ping" />
                      )}
                      
                      {/* Pin Icon */}
                      <div className={`relative flex items-center justify-center w-8 h-8 rounded-full shadow-lg transition-transform ${
                        isActive 
                          ? 'bg-amber-500 text-black scale-125 z-30 ring-4 ring-black' 
                          : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:scale-110'
                      }`}>
                        <MapPin className="w-4 h-4" />
                      </div>

                      {/* Tooltip Label */}
                      <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-1.5 whitespace-nowrap px-2 py-1 rounded text-[10px] font-bold tracking-wide transition-all ${
                        isActive 
                          ? 'bg-white text-black shadow-xl z-30' 
                          : 'bg-black/80 text-zinc-300 opacity-0 group-hover:opacity-100 pointer-events-none'
                      }`}>
                        {loc.name}
                      </div>
                    </div>
                  );
                })}

              </div>

              {/* Interactive Route Feedback Overlay */}
              {simulatedRoute && (
                <div className="absolute top-12 left-4 right-4 bg-emerald-950/90 border border-emerald-500/30 rounded-xl p-3 backdrop-blur-md z-30 text-xs text-emerald-200 flex items-center justify-between animate-fadeIn">
                  <div className="flex items-center gap-2">
                    <Navigation className="w-4 h-4 text-emerald-400 animate-spin" />
                    <span>Routing from <strong>{userOrigin}</strong> to <strong>{activeLoc.name}</strong>...</span>
                  </div>
                  <span className="font-mono font-bold text-white bg-emerald-500/20 px-2 py-0.5 rounded">
                    Est. 14 mins
                  </span>
                </div>
              )}

            </div>

            {/* Simulated Directions Control */}
            <form onSubmit={handleGetDirections} className="mt-4 glass-panel rounded-xl p-3 flex items-center gap-2 border-white/5">
              <span className="text-xs text-zinc-400 whitespace-nowrap pl-1">Get Directions from:</span>
              <input 
                type="text" 
                value={userOrigin}
                onChange={(e) => setUserOrigin(e.target.value)}
                placeholder="Enter your location..."
                className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-amber-500 flex-1"
              />
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold px-4 py-1.5 rounded-lg transition-colors flex items-center gap-1"
              >
                <Navigation className="w-3 h-3" />
                <span>Simulate Route</span>
              </button>
            </form>

          </div>

          {/* Right: Active Location Details Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border-amber-500/20 relative overflow-hidden flex-1 flex flex-col justify-between">
              
              {/* Top ambient tag */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl" />

              <div>
                {/* Flagship Badge */}
                {activeLoc.isFlagship && (
                  <div className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded mb-3">
                    <Sparkles className="w-3 h-3" /> Pretoria Flagship Cellar
                  </div>
                )}

                <h3 className="text-2xl font-serif font-bold text-white">
                  {activeLoc.name}
                </h3>
                
                <p className="text-xs text-amber-500 font-medium mt-0.5">
                  {activeLoc.subName}
                </p>

                {/* Address */}
                <div className="mt-6 flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider">Physical Address</span>
                    <p className="text-sm text-zinc-200 mt-0.5 leading-relaxed">
                      {activeLoc.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="mt-4 flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider">Direct Concierge</span>
                    <p className="text-sm text-zinc-200 mt-0.5 font-mono font-medium">
                      {activeLoc.phone}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="mt-4 flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div className="w-full">
                    <span className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider">Operating Hours</span>
                    <div className="mt-1 space-y-1">
                      {activeLoc.hours.map((h, i) => (
                        <div key={i} className="flex justify-between text-xs">
                          <span className="text-zinc-300">{h.days}</span>
                          <span className="font-medium text-white">{h.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Parking */}
                <div className="mt-4 flex items-start gap-3">
                  <Car className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider">Valet & Parking</span>
                    <p className="text-xs text-zinc-300 mt-0.5 leading-relaxed">
                      {activeLoc.parking}
                    </p>
                  </div>
                </div>

              </div>

              {/* Bottom Quick Call or External trigger */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-zinc-500">Need specific protocol directions?</span>
                <a 
                  href={`tel:${activeLoc.phone.replace(/[^0-9+]/g, '')}`} 
                  className="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1"
                >
                  Call Concierge Directly →
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
