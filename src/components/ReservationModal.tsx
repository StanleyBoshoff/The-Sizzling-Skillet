import React, { useState } from 'react';
import { X, Calendar, Clock, Users, CheckCircle, Sparkles, MapPin } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('19:00');
  const [guests, setGuests] = useState<number>(2);
  const [seating, setSeating] = useState<string>('Main Dining Room');
  
  // Contact state
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [occasion, setOccasion] = useState<string>('None');

  const [bookingRef, setBookingRef] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Set default date to tomorrow
  React.useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    setDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step === 1) {
      if (!date) return;
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email) return;

    setIsSubmitting(true);

    // Simulate backend reservation processing
    setTimeout(() => {
      const randomRef = 'SKILLET-' + Math.floor(1000 + Math.random() * 9000);
      setBookingRef(randomRef);
      setIsSubmitting(false);
      setStep(4);
    }, 1200);
  };

  const resetAndClose = () => {
    setStep(1);
    setName('');
    setPhone('');
    setEmail('');
    setNotes('');
    setOccasion('None');
    onClose();
  };

  const timeSlots = [
    '12:00', '12:30', '13:00', '13:30', 
    '18:00', '18:30', '19:00', '19:30', 
    '20:00', '20:30', '21:00'
  ];

  const seatingOptions = [
    { id: 'Main Dining Room', desc: 'Elegant, central atmosphere' },
    { id: 'Cozy Fireplace', desc: 'Intimate ambient warmth' },
    { id: 'Open Kitchen View', desc: 'Watch the master grillers live' },
    { id: 'Covered Terrace', desc: 'Al fresco with outdoor heaters' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={resetAndClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-xl bg-[#121212] border border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10 animate-scaleUp">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-900/40 via-[#121212] to-[#121212] p-6 border-b border-white/10 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
              The Sizzling Skillet Pretoria
            </span>
            <h3 className="text-xl font-serif font-bold text-white">
              {step === 4 ? 'Reservation Confirmed' : 'Reserve Your Table'}
            </h3>
          </div>

          <button 
            onClick={resetAndClose}
            className="text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-white/5 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Bar */}
        {step < 4 && (
          <div className="w-full bg-white/5 h-1">
            <div 
              className="bg-amber-600 h-1 transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          
          {/* STEP 1: Date, Time & Guests */}
          {step === 1 && (
            <div className="space-y-6 animate-fadeIn">
              
              <div>
                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                  1. Select Date
                </label>
                <div className="relative">
                  <input 
                    type="date" 
                    value={date} 
                    onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                  2. Party Size
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {[1, 2, 3, 4, 5, 6, 8, 10].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setGuests(num)}
                      className={`py-2.5 rounded-xl text-sm font-semibold transition-all ${
                        guests === num 
                          ? 'bg-amber-600 text-white shadow' 
                          : 'bg-white/5 text-zinc-300 hover:bg-white/10'
                      }`}
                    >
                      {num} {num === 10 ? '+' : ''}
                    </button>
                  ))}
                </div>
                {guests >= 8 && (
                  <p className="mt-1.5 text-[11px] text-amber-400">
                    * For groups larger than 8, our Executive Chef provides a custom shared dining experience.
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                  3. Select Time
                </label>
                <div className="grid grid-cols-4 gap-2 max-h-40 overflow-y-auto pr-1 custom-scrollbar">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setTime(slot)}
                      className={`py-2 rounded-xl text-xs font-medium transition-all ${
                        time === slot 
                          ? 'bg-amber-600 text-white font-bold' 
                          : 'bg-white/5 text-zinc-300 hover:bg-white/10'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!date}
                  className="w-full rounded-full bg-amber-600 hover:bg-amber-500 disabled:bg-zinc-800 disabled:text-zinc-600 text-white font-semibold py-3.5 transition-all shadow-lg shadow-amber-600/20"
                >
                  Continue to Seating
                </button>
              </div>

            </div>
          )}

          {/* STEP 2: Seating Preference */}
          {step === 2 && (
            <div className="space-y-6 animate-fadeIn">
              
              <div>
                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">
                  Choose Preferred Ambience
                </label>
                <div className="space-y-3">
                  {seatingOptions.map((option) => (
                    <div
                      key={option.id}
                      onClick={() => setSeating(option.id)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all ${
                        seating === option.id 
                          ? 'bg-amber-600/10 border-amber-500 text-white' 
                          : 'bg-white/5 border-white/5 text-zinc-300 hover:border-white/10'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-serif font-bold text-base">{option.id}</span>
                        <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          seating === option.id ? 'border-amber-500 bg-amber-500' : 'border-zinc-600'
                        }`}>
                          {seating === option.id && <span className="w-1.5 h-1.5 rounded-full bg-black" />}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 mt-1">{option.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                  Special Occasion
                </label>
                <select
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors text-sm"
                >
                  <option value="None" className="bg-[#121212]">Regular Premium Dining</option>
                  <option value="Date Night" className="bg-[#121212]">Intimate Date Night</option>
                  <option value="Birthday" className="bg-[#121212]">Birthday Celebration</option>
                  <option value="Anniversary" className="bg-[#121212]">Wedding / Anniversary</option>
                  <option value="Business" className="bg-[#121212]">Executive Business Dinner</option>
                </select>
              </div>

              <div className="pt-4 flex gap-3">
                <button
                  type="button"
                  onClick={handleBack}
                  className="w-1/3 rounded-full bg-white/5 hover:bg-white/10 text-zinc-300 font-semibold py-3.5 transition-all"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-2/3 rounded-full bg-amber-600 hover:bg-amber-500 text-white font-semibold py-3.5 transition-all shadow-lg"
                >
                  Enter Contact Details
                </button>
              </div>

            </div>
          )}

          {/* STEP 3: Contact Details */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4 animate-fadeIn">
              
              <div>
                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Johan Botha"
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+27 82 000 0000"
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    required
                    placeholder="johan@example.com"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                  Dietary Restrictions / Special Requests
                </label>
                <textarea 
                  rows={2}
                  placeholder="e.g. Severe peanut allergy, please arrange high chair, preferred sommelier recommendation..."
                  value={notes} 
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-amber-500 text-sm"
                />
              </div>

              {/* Review block */}
              <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-xs text-zinc-300 space-y-1">
                <div className="flex justify-between">
                  <span className="text-zinc-500">Booking Summary:</span>
                  <span className="font-semibold text-amber-400">{guests} Guests</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Date & Time:</span>
                  <span className="font-semibold text-white">{date} at {time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Seating:</span>
                  <span className="font-semibold text-white">{seating} ({occasion})</span>
                </div>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={isSubmitting}
                  className="w-1/3 rounded-full bg-white/5 hover:bg-white/10 text-zinc-300 font-semibold py-3.5 transition-all"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-2/3 rounded-full bg-amber-600 hover:bg-amber-500 disabled:bg-amber-800 text-white font-semibold py-3.5 transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Securing Table...
                    </>
                  ) : (
                    <>Instant Confirmation</>
                  )}
                </button>
              </div>

            </form>
          )}

          {/* STEP 4: Success Screen */}
          {step === 4 && (
            <div className="text-center py-6 animate-fadeIn">
              
              <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
                <CheckCircle className="w-8 h-8" />
              </div>

              <h4 className="text-2xl font-serif font-bold text-white">
                Table Successfully Reserved!
              </h4>

              <p className="mt-2 text-sm text-zinc-300">
                We have sent an instant SMS and Email confirmation to <strong className="text-white">{email}</strong>.
              </p>

              {/* Booking Reference card */}
              <div className="mt-6 p-4 bg-white/5 rounded-2xl border border-white/10 max-w-sm mx-auto text-left space-y-2.5">
                <div className="flex justify-between items-center pb-2 border-b border-white/5">
                  <span className="text-xs text-zinc-400 uppercase font-semibold">Reference Code:</span>
                  <span className="text-sm font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                    {bookingRef}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <Calendar className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>{date}</span>
                  <span className="text-zinc-600">•</span>
                  <Clock className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>{time}</span>
                </div>

                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <Users className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>{guests} Guests</span>
                  <span className="text-zinc-600">•</span>
                  <span>{seating}</span>
                </div>

                <div className="flex items-start gap-2 text-xs text-zinc-300 pt-1">
                  <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>142 Sizzling Avenue, Waterkloof Heights, Pretoria</span>
                </div>
              </div>

              <div className="mt-6 inline-flex items-center gap-1.5 text-xs text-zinc-500">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Instant confirmation sent via SMS and email.</span>
              </div>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="w-full rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold py-3 transition-all"
                >
                  Back to Homepage
                </button>
              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
};
