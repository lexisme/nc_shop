import React from 'react';
import { ShoppingBag, Heart, Gift, Ticket, Star, Clock, Percent, Menu } from 'lucide-react';

const features = [
  { icon: ShoppingBag, label: 'New In' },
  { icon: Heart, label: 'Popular' },
  { icon: Gift, label: 'Gifts' },
  { icon: Ticket, label: 'Deals' },
  { icon: Star, label: 'Featured' },
  { icon: Clock, label: 'Flash Sale' },
  { icon: Percent, label: 'Discount' },
  { icon: Menu, label: 'More' },
];

export default function QuickAccess() {
  return (
    <div className="grid grid-cols-4 gap-4 px-4 py-6 bg-white">
      {features.map(({ icon: Icon, label }) => (
        <div key={label} className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-2">
            <Icon className="w-6 h-6 text-gray-700" />
          </div>
          <span className="text-xs text-gray-600">{label}</span>
        </div>
      ))}
    </div>
  );
}