"use client";
import React, { useEffect, useState } from "react";
import { CarCard, Car } from "./CarCard";
import { client } from "@/sanity/lib/client";

export const RecentCars: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Fetch recent cars from Sanity
    const fetchCars = async () => {
      const query = `*[_type == "car"] | order(_createdAt desc) [0..7] {
        _id,
        name,
        brand,
        type,
        fuelCapacity,
        transmission,
        seatingCapacity,
        pricePerDay,
        image
      }`;
      const data = await client.fetch(query);
      setCars(data);
    };

    fetchCars();

    // Handle screen size changes
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const interval = setInterval(() => {
      if (isMobile && cars.length > 1) {
        setOffset((prev) => (prev + 1) % cars.length);
      }
    }, 3000);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, [isMobile, cars.length]);

  return (
    <div className="p-8 bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Recent Cars</h2>
        <a href="#" className="text-blue-600 hover:underline">
          View All
        </a>
      </div>

      {/* Render slider for mobile view */}
      {isMobile ? (
        <div className="overflow-hidden">
          <div
            className={`flex transition-transform duration-1000 ease-in-out`}
            style={{
              transform: `translateX(-${offset * 100}%)`,
            }}
          >
            {cars.map((car) => (
              <div key={car._id} className="w-full flex-shrink-0">
                <CarCard car={car} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Render grid for desktop view */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cars.map((car) => (
            <CarCard key={car._id} car={car} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentCars;
