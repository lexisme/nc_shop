import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="sticky top-0 z-50 bg-white px-4 py-2 shadow-md">
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
        <Search className="w-5 h-5 text-gray-400" />
        <input 
          className="ml-2 bg-transparent w-full outline-none text-gray-700 placeholder-gray-500"
          placeholder="Search products..."
          readOnly
        />
      </div>
    </div>
  );
}