"use client";

import { useState } from "react";
import { ShoppingCart, Heart, Eye, Star } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
}

export default function ProductCard() {
  const [cartItems, setCartItems] = useState<number[]>([]);

  const products: Product[] = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 79.99,
      originalPrice: 99.99,
      image: "/api/placeholder/300/300",
      rating: 4.5,
      reviews: 128,
      badge: "Sale",
    },
    {
      id: 2,
      name: "Smart Watch Series 9",
      price: 299.99,
      image: "/api/placeholder/300/300",
      rating: 4.8,
      reviews: 234,
      badge: "New",
    },
    {
      id: 3,
      name: "Premium Coffee Beans",
      price: 24.99,
      originalPrice: 34.99,
      image: "/api/placeholder/300/300",
      rating: 4.6,
      reviews: 89,
      badge: "Hot",
    },
    {
      id: 4,
      name: "Minimalist Desk Lamp",
      price: 89.99,
      image: "/api/placeholder/300/300",
      rating: 4.7,
      reviews: 156,
    },
  ];

  const addToCart = (productId: number) => {
    setCartItems((prev) => [...prev, productId]);
    // Hiệu ứng feedback
    setTimeout(() => {
      setCartItems((prev) => prev.filter((id) => id !== productId));
    }, 2000);
  };

  const isInCart = (productId: number) => cartItems.includes(productId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🛍️ Product Cards với Hover Animation
          </h1>
          <p className="text-gray-600 text-lg">
            Hover vào sản phẩm để xem hiệu ứng Add to Cart từ trái sang phải
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105"
            >
              {/* Badge */}
              {product.badge && (
                <div
                  className={`absolute top-4 left-4 z-10 px-3 py-1 text-xs font-bold text-white rounded-full ${
                    product.badge === "Sale"
                      ? "bg-red-500"
                      : product.badge === "New"
                      ? "bg-green-500"
                      : product.badge === "Hot"
                      ? "bg-orange-500"
                      : "bg-blue-500"
                  }`}
                >
                  {product.badge}
                </div>
              )}

              {/* Wishlist Button */}
              <div className="absolute top-4 right-4 z-10">
                <button className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-200 shadow-lg">
                  <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
                </button>
              </div>

              {/* Product Image */}
              <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                {/* Placeholder for actual image */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <div className="w-20 h-20 mx-auto mb-3 bg-gray-300 rounded-lg flex items-center justify-center">
                      <Eye className="w-8 h-8" />
                    </div>
                    <p className="text-sm font-medium">Product Image</p>
                  </div>
                </div>

                {/* Quick View Button - Fade in on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <button className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg font-medium text-gray-900 hover:bg-white">
                    <Eye className="w-4 h-4 inline mr-2" />
                    Quick View
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    ({product.reviews})
                  </span>
                </div>

                {/* Product Name */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>

                {/* Price */}
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-500 line-through ml-2">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Add to Cart Button Container */}
                <div className="relative h-12 rounded-xl overflow-hidden">
                  {/* Default State Button - Luôn ở đó làm nền */}
                  <button className="w-full h-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-colors duration-200">
                    View Details
                  </button>

                  {/* Add to Cart Button - Bắt đầu từ center, chỉ che nửa */}
                  <div
                    className={`absolute inset-0 transform transition-all duration-1000 ease-out ${
                      isInCart(product.id)
                        ? "translate-x-0 opacity-100"
                        : "translate-x-full  group-hover:translate-x-0 "
                    }`}
                  >
                    <button
                      onClick={() => addToCart(product.id)}
                      disabled={isInCart(product.id)}
                      className={`w-full h-full font-medium rounded-xl transition-all duration-200 flex items-center justify-center ${
                        isInCart(product.id)
                          ? "bg-green-500 text-white cursor-not-allowed"
                          : "bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg"
                      }`}
                    >
                      {isInCart(product.id) ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Added to Cart!
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-5 h-5 mr-2" />
                          Add to Cart
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Variants Demo */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            🎨 Các biến thể khác
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Variant 1: Overlay từ center */}
            <div className="group relative bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="font-semibold text-gray-900 mb-4">
                Overlay from Center
              </h3>
              <div className="relative h-12 rounded-lg">
                {/* Background button */}
                <button className="w-full h-full bg-gray-200 text-gray-600 font-medium rounded-lg">
                  Hover me
                </button>
                {/* Overlay button */}
                <div className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center flex items-center justify-center rounded-lg">
                  <span className="text-white font-medium">Add to Cart</span>
                </div>
              </div>
            </div>

            {/* Variant 2: Overlay từ bottom */}
            <div className="group relative bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="font-semibold text-gray-900 mb-4">
                Overlay from Bottom
              </h3>
              <div className="relative h-12 rounded-lg">
                {/* Background button */}
                <button className="w-full h-full bg-gray-200 text-gray-600 font-medium rounded-lg">
                  Hover me
                </button>
                {/* Overlay button */}
                <div className="absolute inset-0 bg-green-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex items-center justify-center rounded-lg">
                  <span className="text-white font-medium">Add to Cart</span>
                </div>
              </div>
            </div>

            {/* Variant 3: Fade In từ trái */}
            <div className="group relative bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="font-semibold text-gray-900 mb-4">
                Fade In từ trái
              </h3>
              <div className="relative h-12 rounded-lg">
                {/* Background button */}
                <button className="w-full h-full bg-gray-200 text-gray-600 font-medium rounded-lg transition-colors duration-200">
                  Hover me
                </button>
                {/* Fade in button */}
                <div className="absolute inset-0 bg-orange-600 -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-800 flex items-center justify-center rounded-lg">
                  <span className="text-white font-medium">Add to Cart</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Code Examples */}
        <div className="mt-8 bg-gray-900 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">
            💻 Code chính (Fade In Pattern):
          </h3>
          <div className="bg-black/50 rounded-lg p-4 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              {`<!-- Container -->
<div className="relative h-12 rounded-xl">
  
  <!-- Button nền - luôn hiển thị -->
  <button className="w-full h-full bg-gray-100 text-gray-700 rounded-xl">
    View Details
  </button>
  
  <!-- Add to Cart - Ẩn hoàn toàn, fade in + slide -->
  <div className="absolute inset-0 transform transition-all duration-1000 
                  -translate-x-full opacity-0 
                  group-hover:translate-x-0 group-hover:opacity-100">
    <button className="w-full h-full bg-blue-600 text-white rounded-xl">
      Add to Cart
    </button>
  </div>
  
</div>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
