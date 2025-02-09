"use client";

import React, { useEffect, useState, useRef } from "react";
import { CarCard } from "./CarCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { client } from "@/sanity/lib/client";
import { Car } from "./CarCard";

export const PopularCarPage: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fetch cars from Sanity
    const fetchCars = async () => {
      const query = `*[_type == "car"]{
...
      }`;
      const data: Car[] = await client.fetch(query);
      setCars(data);
    };

    fetchCars();
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <div className="p-8 bg-gray-50 relative">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Popular Cars</h2>
        <a href="#" className="text-blue-600 hover:underline">
          View All
        </a>
      </div>

      {/* Scroll Buttons */}
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md z-10"
        onClick={scrollLeft}
        aria-label="Scroll Left"
      >
        <FaChevronLeft className="text-gray-700" />
      </button>

      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md z-10"
        onClick={scrollRight}
        aria-label="Scroll Right"
      >
        <FaChevronRight className="text-gray-700" />
      </button>

      {/* Horizontal Scrollable Car List */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-6 scrollbar-hide scroll-smooth"
      >
        {cars.slice(0, 10).map((car) => (
          <div key={car._id} className="min-w-[300px]">
            <CarCard car={car} /> {/* ✅ Now it correctly passes `car` prop */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCarPage;
