import React from 'react';

interface ProductProps {
  image: string;
  name: string;
  price: number;
  commission: number;
}

export default function ProductCard({ image, name, price, commission }: ProductProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      <img src={image} alt={name} className="w-full aspect-square object-cover" />
      <div className="p-4">
        <h3 className="text-gray-800 font-medium line-clamp-2">{name}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="text-red-600 font-semibold">¥{price.toFixed(2)}</span>
          <span className="text-orange-500 text-sm">¥{commission.toFixed(2)} commission</span>
        </div>
      </div>
    </div>
  );
}