"use client";

import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart, FaGasPump, FaCog, FaUsers } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Notification from "../components/Notification";

// Sanity Image Builder
const builder = imageUrlBuilder(client);
const urlFor = (source: any) => builder.image(source).url();

// Define Car Type
export type Car = {
  _id: string;
  name: string;
  brand: string;
  type: string;
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: string;
  pricePerDay: string;
  image: any;
};

// Define CarCard Props
interface CarCardProps {
  car?: Car;
}

export const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState<string | null>(null);
  const [wishlist, setWishlist] = useState<Car[]>(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("wishlist") || "[]");
    }
    return [];
  });

  // Fetch cars from Sanity if no specific car is provided
  useEffect(() => {
    if (!car) {
      client
        .fetch(`*[_type == "car"]`)
        .then((data) => {
          setCars(data || []);
        })
        .catch((error) => console.error("Error fetching cars:", error))
        .finally(() => setLoading(false));
    }
  }, [car]);

  // Toggle Wishlist
  const toggleWishlist = (car: Car) => {
    let updatedWishlist;

    if (wishlist.some((item) => item._id === car._id)) {
      updatedWishlist = wishlist.filter((item) => item._id !== car._id);
      setNotification(`${car.name} removed from wishlist!`);
    } else {
      updatedWishlist = [...wishlist, car];
      setNotification(`${car.name} added to wishlist!`);
    }

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

    setTimeout(() => setNotification(null), 5000);
  };

  // If no car is provided, render all fetched cars
  if (!car) {
    if (loading) {
      return <div className="text-gray-600">Loading cars...</div>;
    }

    if (cars.length === 0) {
      return <div className="text-red-500">No cars available!</div>;
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cars.map((car) => (
          <CarCard key={car._id} car={car} />
        ))}
      </div>
    );
  }

  return (
    <div className="relative flex flex-col bg-white rounded-lg shadow-lg p-4 w-full max-w-sm">
      <Notification message={notification} />

      <button
        onClick={() => toggleWishlist(car)}
        className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md"
        aria-label="Toggle Wishlist"
      >
        {wishlist.some((item) => item._id === car._id) ? (
          <FaHeart className="w-6 h-6 text-red-500" />
        ) : (
          <FaRegHeart className="w-6 h-6 text-gray-400 hover:text-red-500" />
        )}
      </button>

      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-800">{car.name}</h3>
        <p className="text-sm text-gray-400">{car.type}</p>
      </div>

      <Link href={`/carsdetailed?id=${car._id}`}>
        <Image
          src={car.image ? urlFor(car.image) : "/placeholder.svg"}
          alt={car.name}
          width={300}
          height={200}
          className="w-full object-contain mb-4 h-40"
        />
      </Link>

      <div className="flex justify-between text-gray-600 mb-4">
        <div className="flex items-center">
          <FaGasPump className="mr-1" />
          <span>{car.fuelCapacity}</span>
        </div>
        <div className="flex items-center">
          <FaCog className="mr-1" />
          <span>{car.transmission}</span>
        </div>
        <div className="flex items-center">
          <FaUsers className="mr-1" />
          <span>{car.seatingCapacity} People</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-lg font-bold text-gray-800">
          ${car.pricePerDay}/day
        </p>
        <Link
          href="/rentalForm"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
        >
          Rent Now
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
