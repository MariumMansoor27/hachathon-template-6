"use client"
import Image from "next/image";
import { useState } from "react";

// Products data
const allProducts = [
  {
    name: "Syltherine",
    description: "Stylish cafe chair",
    originalPrice: 3500000,
    price: 2500000,
    discount: 30,
    isNew: false,
    image: "/pictures/syltherine.png",
  },
  {
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: 2500000,
    isNew: false,
    image: "/pictures/leviosa.png",
  },
  {
    name: "Lolito",
    description: "Luxury big sofa",
    originalPrice: 14000000,
    price: 7000000,
    discount: 50,
    isNew: false,
    image: "/pictures/lolito.png",
  },
  {
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: 500000,
    isNew: true,
    image: "/pictures/respira.png",
  },
  {
    name: "Grifo",
    description: "Night lamp",
    price: 1500000,
    isNew: false,
    image: "/pictures/grifo.png",
  },
  {
    name: "Muggo",
    description: "Small mug",
    price: 150000,
    isNew: true,
    image: "/pictures/muggo.png",
  },
  {
    name: "Pingky",
    description: "Cute bed set",
    originalPrice: 14000000,
    price: 7000000,
    discount: 50,
    isNew: false,
    image: "/pictures/pingky.png",
  },
  {
    name: "Potty",
    description: "Minimalist flower pot",
    price: 500000,
    isNew: true,
    image: "/pictures/potty.png",
  },
  {
    name: "Tranquilo",
    description: "Comfortable recliner",
    price: 12000000,
    isNew: false,
    image: "/pictures/tranquilo.png",
  },
  {
    name: "Florista",
    description: "Elegant vase",
    price: 800000,
    isNew: true,
    image: "/pictures/florista.png",
  },
];

const ProductsGrid = () => {
  const [visibleProducts, setVisibleProducts] = useState(8); // Start with 8 products

  const handleShowMore = () => {
    setVisibleProducts((prev) => prev + 4); // Load 4 more products each time
  };

  return (
    <div className="w-[1236px] h-[1084px] ml-[102px]">
    <div className="p-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-around">
        {allProducts.slice(0, visibleProducts).map((product, index) => (
          <div
            key={index}
            className="relative h-[446px] bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
          >
            {/* Badges */}
            {product.discount && (
              <div className="absolute top-10 right-6 h-[48px] w-[48px] bg-red-500 text-white text-center font-bold px-2 py-1 rounded-full">
                -{product.discount}%
              </div>
            )}
            {product.isNew && (
              <div className="absolute top-10 right-6 h-[48px] w-[48px] bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                New
              </div>
            )}
            {/* Product Image */}
            <div className="mt-4 overflow-hidden rounded-lg">
               <Image
                                  src={product.image}
                                  alt={product.name}
                                  width={285}
                                  height={301}
                                  
                                />
            </div>
            {/* Product Info */}
            <div className="text-center mt-6">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.description}</p>
              <div className="mt-4">
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through mr-2">
                    Rp {product.originalPrice.toLocaleString()}
                  </span>
                )}
                <span className="text-lg font-bold text-orange-500">
                  Rp {product.price.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {visibleProducts < allProducts.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleShowMore}
            className="w-[245px] h-[48px] bg-white text-orange-500 border-orange-500 border-2 b px-6 py-2 mt-1  font-semibold hover:bg-orange-600 transition"
          >
            Show More
          </button>
        </div>
      )}
    </div>
    </div>
  );
};

export default ProductsGrid;
