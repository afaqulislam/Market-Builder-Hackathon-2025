"use client";

import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { X, Menu } from "lucide-react";

interface SidebarProps {
  priceRange: number[];
  setPriceRange: React.Dispatch<React.SetStateAction<number[]>>;
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  priceRange,
  setPriceRange,
  isOpen,
  onToggle,
}) => {
  const capacities = [2, 4, 6, 8, 10, 12];
  const [randomCounts, setRandomCounts] = React.useState<number[]>([]);
  const [price, setPrice] = React.useState<number>(50); // Default price value
  const [typeCounts, setTypeCounts] = React.useState<number[]>([]);

  // Generate random counts only on the client side
  React.useEffect(() => {
    setRandomCounts(capacities.map(() => Math.floor(Math.random() * 15)));
    setTypeCounts(
      ["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map(() =>
        Math.floor(Math.random() * 20)
      )
    );
  }, []);

  return (
    <>
      {/* Bar icon for smaller screens */}
      <button
        onClick={onToggle}
        className="lg:hidden fixed top-[70px] left-4 z-50 p-2 bg-white rounded-lg shadow-md"
        aria-label="Toggle sidebar"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Sidebar content */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed inset-y-0 left-0 z-40 w-64 bg-white border-r transform transition-transform duration-300 ease-in-out lg:relative overflow-y-auto`}
      >
        <div className="flex justify-between items-center p-6">
          <h2 className="text-xl font-bold text-gray-800">Filters</h2>
          <button
            onClick={onToggle}
            className="lg:hidden"
            title="Close Sidebar"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="p-6 space-y-6">
          {/* Type Filter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">TYPE</h3>
            <div className="space-y-2">
              {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map(
                (type, index) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox
                      id={type}
                      className="border-blue-500 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                    />
                    <label htmlFor={type} className="text-sm text-gray-600">
                      {type} ({typeCounts[index] || 0})
                    </label>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Capacity Filter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">CAPACITY</h3>
            <div className="space-y-2">
              {capacities.map((capacity, index) => (
                <div key={capacity} className="flex items-center space-x-2">
                  <Checkbox
                    id={`capacity-${capacity}`}
                    className="border-blue-500 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                  />
                  <label
                    htmlFor={`capacity-${capacity}`}
                    className="text-sm text-gray-600"
                  >
                    {capacity} Person ({randomCounts[index] || 0})
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">PRICE</h3>
            <div className="flex flex-col space-y-4">
              <input
                type="range"
                min="0"
                max="100"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full h-3 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${price}%, #d1d5db ${price}%, #d1d5db 100%)`,
                }}
              />
              <span className="text-lg text-gray-600">Max. ${price}.00</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
