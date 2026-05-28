import React from 'react';
import { MenuItem } from '../data/menuData';
import { X, Wine, Sparkles, Check } from 'lucide-react';

interface DishDetailModalProps {
  dish: MenuItem | null;
  onClose: () => void;
  onOpenReservation: () => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({ dish, onClose, onOpenReservation }) => {
  if (!dish) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-[#121212] border border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10 animate-scaleUp">
        
        {/* If Dish has an image, render banner */}
        {dish.image ? (
          <div className="relative h-56 w-full">
            <img src={dish.image} alt={dish.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent" />
            
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-white p-1.5 rounded-full bg-black/60 hover:bg-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {dish.isChefSignature && (
              <div className="absolute bottom-4 left-6 bg-amber-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow">
                Chef's Signature Selection
              </div>
            )}
          </div>
        ) : (
          <div className="bg-gradient-to-r from-zinc-900 to-[#121212] p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-500 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" /> Culinary Breakdown
            </div>
            <button 
              onClick={onClose}
              className="text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-white/5 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        )}

        {/* Content */}
        <div className={`p-6 sm:p-8 ${dish.image ? 'pt-2' : ''}`}>
          
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider block font-semibold">
                {dish.category.toUpperCase()}
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-0.5">
                {dish.name}
              </h3>
            </div>

            <div className="text-right flex-shrink-0">
              <span className="text-2xl font-serif font-bold text-amber-500 block">
                R {dish.price}
              </span>
              {dish.calories && (
                <span className="text-xs text-zinc-500 block">
                  ~{dish.calories} kcal
                </span>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="mt-4 text-sm text-zinc-300 font-light leading-relaxed">
            {dish.description}
          </p>

          {/* Ingredients list */}
          {dish.ingredients && dish.ingredients.length > 0 && (
            <div className="mt-6">
              <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2.5">
                Key Premium Ingredients
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {dish.ingredients.map((ing, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300 bg-white/5 p-2 rounded-lg border border-white/5">
                    <Check className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                    <span>{ing}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sommelier Pairing */}
          {dish.pairing && (
            <div className="mt-6 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Wine className="w-4 h-4" /> Sommelier Wine Pairing
              </div>
              <p className="text-xs text-zinc-300 mt-1.5 italic font-serif">
                "{dish.pairing}"
              </p>
              <span className="block text-[10px] text-zinc-500 mt-1">
                Specially selected to complement the intrinsic fat profiles and robust seasoning.
              </span>
            </div>
          )}

          {/* Dietary tags */}
          <div className="mt-6 flex flex-wrap gap-1.5">
            {dish.tags.map(tag => (
              <span key={tag} className="text-[10px] bg-white/5 text-zinc-400 px-2.5 py-1 rounded-full border border-white/5 font-medium">
                {tag}
              </span>
            ))}
          </div>

          {/* Action */}
          <div className="mt-8 pt-4 border-t border-white/5 flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-3 rounded-full bg-white/5 hover:bg-white/10 text-zinc-300 text-xs font-semibold transition-all"
            >
              Back to Menu
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenReservation();
              }}
              className="flex-1 py-3 rounded-full bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold transition-all shadow-lg shadow-amber-600/20"
            >
              Reserve Table to Order
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
