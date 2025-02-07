"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaHeart, FaGasPump, FaCog, FaUsers } from "react-icons/fa";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import Notification from "../components/Notification";

// Sanity Image Builder
const builder = imageUrlBuilder(client);
const urlFor = (source: any) =>
  source ? builder.image(source).url() : "/placeholder.svg";

// Define Car Type
type Car = {
  _id: string;
  name: string;
  type: string;
  pricePerDay: string;
  image: any;
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: string;
};

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<Car[]>([]);
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  // Toggle Wishlist Function (Fix: Properly Remove Items)
  const toggleWishlist = (id: string) => {
    const updatedWishlist = wishlist.some((car) => car._id === id)
      ? wishlist.filter((car) => car._id !== id) // Remove if already in wishlist
      : wishlist; // Keep same if not in wishlist (should never happen here)

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

    setNotification("Item removed from wishlist!");
    setTimeout(() => setNotification(null), 5000); // Increased to 5 seconds
  };

  return (
    <div className="bg-gray-50 mt-16 min-h-screen flex flex-col items-center p-6">
      <h1 className="text-2xl text-blue-600 font-bold mb-4">Your Wishlist</h1>

      {/* Enhanced Notification */}
      <Notification message={notification} />

      {wishlist.length === 0 ? (
        <div className="text-center">
          <Image
            src="/wishlist.jpg"
            alt="Empty Wishlist"
            width={300}
            height={200}
          />
          <h2 className="text-lg font-bold mt-4 text-gray-700">
            Your Wishlist is Empty
          </h2>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((car) => (
            <div
              key={car._id}
              className="bg-white p-6 rounded-lg shadow-md relative"
            >
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-800">{car.name}</h3>
                <p className="text-sm text-gray-400">{car.type}</p>
              </div>

              {/* Display Car Image */}
              <Image
                src={urlFor(car.image) || "/placeholder.svg"}
                alt={car.name}
                width={250}
                height={150}
                className="w-full object-cover mb-4"
              />

              {/* Car Specifications */}
              <div className="flex justify-between text-gray-600 text-sm mb-2">
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
                  <span>{car.seatingCapacity}</span>
                </div>
              </div>

              <p className="text-gray-800 font-bold">{car.pricePerDay}</p>

              {/* Heart Icon to Remove from Wishlist */}
              <FaHeart
                className="absolute top-4 right-4 text-red-600 cursor-pointer w-6 h-6"
                onClick={() => toggleWishlist(car._id)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
