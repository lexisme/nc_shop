import React from 'react';
import { Home, Grid, ShoppingCart, User } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Grid, label: 'Categories', path: '/categories' },
  { icon: ShoppingCart, label: 'Orders', path: '/orders' },
  { icon: User, label: 'Profile', path: '/profile' },
];

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
      <div className="flex justify-between">
        {navItems.map(({ icon: Icon, label, path }) => (
          <div
            key={path}
            className="flex flex-col items-center text-gray-600"
          >
            <Icon className="w-6 h-6" />
            <span className="text-xs mt-1">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}