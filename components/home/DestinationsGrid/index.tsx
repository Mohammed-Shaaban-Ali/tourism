"use client";
import React, { useState } from "react";
import { Search, MapPin, ChevronDown } from "lucide-react";
import { destinations, getMinMaxPrice } from "@/constant";
import Card from "./Card";
import { Slider } from "@/components/ui/slider";

export default function DestinationsGrid() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("all");
  const { minPrice, maxPrice } = getMinMaxPrice();
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
  // Get unique countries
  const countries = ["all", ...new Set(destinations.map((d) => d.country))];

  // Filter destinations
  const filteredDestinations = destinations.filter((dest) => {
    const matchesSearch =
      dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dest.country.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry =
      selectedCountry === "all" || dest.country === selectedCountry;
    const matchesPrice =
      dest.price >= priceRange[0] && dest.price <= priceRange[1];

    return matchesSearch && matchesCountry && matchesPrice;
  });

  return (
    <div className=" mb-8">
      {/* Search & Filter Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-5 py-5 bg-white shadow rounded-md -mt-10 z-10 relative">
        <div className="flex flex-col lg:flex-row gap-4 items-center ">
          {/* Search Input */}
          <div className="flex-1 w-full relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by destination name or country..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-14! pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none
               focus:ring-1 focus:ring-black/40 transition-all duration-150"
            />
          </div>

          {/* Country Filter */}
          <div className="relative w-full lg:w-64 h-14! ">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full h-14 pl-10 pr-8 py-3 border border-gray-300 rounded-lg appearance-none 
        focus:outline-none focus:ring-1 focus:ring-black/40  transition-all duration-150 bg-white cursor-pointer"
            >
              <option value="all">All Countries</option>
              {countries
                .filter((c) => c !== "all")
                .map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
          </div>

          {/* Price Range */}
          <div
            className="w-full h-14 lg:w-[300px] flex flex-col gap-2
                border border-gray-300 rounded-lg 
                px-4 py-2 bg-white 
                focus-within:ring-1 focus-within:ring-black/40 
                transition-all duration-150
              "
          >
            <p className="text-sm font-medium text-gray-600 ">
              Price Range: ${priceRange[0]} - ${priceRange[1]}
            </p>

            <Slider
              max={maxPrice}
              min={minPrice}
              value={priceRange}
              onValueChange={setPriceRange}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="max-w-[1380px] mx-auto px-3">
        <div className=" text-3xl sm:text-6xl font-extrabold flex flex-col items-center justify-center my-10 max-w-[800px] mx-auto">
          Amazing Featured Tour
          <div className="flex items-center gap-2 mt-3">
            <span className="text-primary font-yesteryear">Package</span>The
            World
          </div>
        </div>

        {filteredDestinations.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">
              No destinations found. Try adjusting your filters.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredDestinations.map((destination) => (
              <Card key={destination.id} destination={destination} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
