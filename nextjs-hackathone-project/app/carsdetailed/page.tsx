"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ReviewsSection from "../components/ReviewSection";
import { RecentCars } from "../cars/RecentCars";
import Sidebar from "../components/Sidebar";
import Link from "next/link";
import { RecomendationCar } from "../cars/RecomendationCar";

const images = ["/Hero2.png", "/preview-2.png", "/preview-3.png"];

export default function CarCard() {
  const [mainImage, setMainImage] = useState(images[0]);
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const [priceRange, setPriceRange] = useState<number[]>([0, 100]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const toggleHeart = () => setIsHeartFilled((prev) => !prev);

  return (
    <div className="flex mt-10  flex-col lg:flex-row gap-8 p-6 ">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4">
        <Sidebar
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          isOpen={sidebarOpen}
          onToggle={toggleSidebar}
        />
      </div>

      {/* Main Content */}
      <div className="w-full  mt-10  lg:w-3/4 flex flex-col gap-4">
        <Card className="bg-white rounded-3xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Section */}
            <div className="bg-[#4177DC] p-6 text-white relative">
              <h2 className="text-xl md:text-2xl font-bold leading-tight">
                Sports car with the best design and acceleration
              </h2>
              <p className="text-sm text-blue-100/90 mt-2">
                Safety and comfort while driving a futuristic and elegant sports
                car.
              </p>
              <div className="relative h-[200px] md:h-[250px] my-4">
                <Image
                  src={mainImage}
                  alt="Nissan GT-R"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex gap-2 justify-center">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setMainImage(image)}
                    className={`relative w-[60px] md:w-[80px] h-[40px] md:h-[60px] rounded-lg overflow-hidden bg-white/20 hover:ring-2 ${mainImage === image ? "ring-2 ring-white" : ""}`}
                    title={`Nissan GT-R view ${index}`}
                  >
                    <Image
                      src={image}
                      alt={`Nissan GT-R view ${index}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Section */}
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                    Nissan GT-R
                  </h3>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(4)].map((_, i) => (
                      <FaStar
                        key={i}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                      />
                    ))}
                    <FaStar
                      className="w-4 h-4 text-gray-300"
                      fill="currentColor"
                    />
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-red-500 hover:text-red-600"
                  onClick={toggleHeart}
                >
                  <Heart
                    className="h-5 w-5"
                    fill={isHeartFilled ? "currentColor" : "none"}
                  />
                </Button>
              </div>

              {/* Specifications */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-4 my-6 md:my-8">
                {[
                  { label: "Type Car", value: "Sport" },
                  { label: "Capacity", value: "2 Person" },
                  { label: "Steering", value: "Manual" },
                  { label: "Gasoline", value: "70L" },
                ].map((item, index) => (
                  <div key={index} className="space-y-1 md:space-y-2">
                    <p className="text-xs md:text-sm text-gray-500">
                      {item.label}
                    </p>
                    <p className="text-sm md:text-base font-medium">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Pricing and Button */}
              <div className="flex flex-col md:flex-row md:items-center justify-between mt-6 pt-4 border-t border-gray-200">
                <div>
                  <div className="flex items-end gap-1">
                    <span className="text-lg md:text-2xl font-bold">
                      $80.00
                    </span>
                    <span className="text-gray-500 text-xs md:text-sm mb-1">
                      /day
                    </span>
                  </div>
                  <div className="text-xs md:text-sm text-gray-500 line-through">
                    $100.00
                  </div>
                </div>
                <Link
                  href={"./rentalForm"}
                  className="mt-4 text-center md:mt-0 bg-blue-600 text-white px-4 py-2 rounded-lg text-xs md:text-sm font-medium hover:bg-blue-500 transition duration-200"
                >
                  Rent Now
                </Link>
              </div>
            </div>
          </div>
        </Card>
        <ReviewsSection />
        <RecentCars />
        <RecomendationCar />
      </div>
    </div>
  );
}
