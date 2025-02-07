"use client";
import React, { useEffect, useState } from "react";
import { CarCard, Car } from "./CarCard";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

export const RecomendationCar: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const data = await client.fetch(`*[_type == "car"][0..11]`); // Fetch 4 recommended cars
        setCars(data || []);
      } catch (error) {
        console.error("Error fetching recommended cars:", error);
        setCars([]); // Prevent errors
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  return (
    <div className="p-8 bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Recommended Cars</h2>
      </div>

      {loading ? (
        <p className="text-gray-600">Loading cars...</p>
      ) : cars.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {cars.map((car) => (
            <CarCard key={car._id} car={car} />
          ))}
        </div>
      ) : (
        <p className="text-red-500">No recommended cars available.</p>
      )}

      <div className="flex text-center items-center justify-center py-10">
        <Link
          href={"/carcategory"}
          className="py-3 px-8 bg-blue-600 text-white hover:bg-blue-500 rounded-md transition duration-300 ease-in-out"
        >
          Show more cars
        </Link>
      </div>
    </div>
  );
};

export default RecomendationCar;
