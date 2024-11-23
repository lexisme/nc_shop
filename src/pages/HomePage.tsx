import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import Carousel from '../components/Carousel';
import QuickAccess from '../components/QuickAccess';
import ProductCard from '../components/ProductCard';
import BottomNav from '../components/BottomNav';

interface HomePageData {
  carousel: Array<{ id: number; image: string; link: string }>;
  advertisements: Array<{ id: number; image: string; link: string }>;
  featuredProducts: Array<{
    id: number;
    image: string;
    name: string;
    price: number;
    commission: number;
    category: string;
  }>;
  categories: Array<{ id: string; name: string }>;
}

const mockData: HomePageData = {
  carousel: [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop",
      link: "/promotion/1"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=400&fit=crop",
      link: "/promotion/2"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
      link: "/promotion/3"
    }
  ],
  advertisements: [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=800&h=200&fit=crop",
      link: "/ads/1"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=200&fit=crop",
      link: "/ads/2"
    }
  ],
  featuredProducts: [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      name: "Premium Smart Watch",
      price: 299.99,
      commission: 30.00,
      category: "Electronics"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      name: "Wireless Headphones",
      price: 199.99,
      commission: 20.00,
      category: "Electronics"
    }
  ],
  categories: [
    { id: "all", name: "All" },
    { id: "electronics", name: "Electronics" },
    { id: "fashion", name: "Fashion" },
    { id: "home", name: "Home" },
    { id: "beauty", name: "Beauty" }
  ]
};

export default function HomePage() {
  const [data, setData] = useState<HomePageData>(mockData);
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = data.featuredProducts.filter(
    product => activeCategory === 'all' || product.category.toLowerCase() === activeCategory
  );

  return (
    <div className="pb-16 bg-gray-100 min-h-screen">
      <SearchBar />
      <Carousel slides={data.carousel} />
      <QuickAccess />
      
      {/* Ad Banner */}
      <div className="p-4">
        <img 
          src={data.advertisements[0].image}
          alt="Advertisement"
          className="w-full h-32 object-cover rounded-lg"
        />
      </div>

      {/* Featured Products */}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Featured Products</h2>
        <div className="space-y-4">
          {data.featuredProducts.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      {/* Second Ad Banner */}
      <div className="p-4">
        <img 
          src={data.advertisements[1].image}
          alt="Advertisement"
          className="w-full h-32 object-cover rounded-lg"
        />
      </div>

      {/* Product List */}
      <div className="p-4">
        <div className="flex gap-4 overflow-x-auto pb-2 mb-4">
          {data.categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="space-y-4">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}