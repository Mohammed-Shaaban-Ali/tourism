import { Button } from "@/components/ui/button";
import { Destination } from "@/constant";
import { Bookmark, Clock, MapPin, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = { destination: Destination };

function Card({ destination }: Props) {
  return (
    <div
      key={destination.id}
      className="bg-white  rounded-md overflow-hidden hover:shadow border transition-all duration-300 group"
    >
      {/* Image Container */}
      <div
        className="relative h-56 
       overflow-hidden"
      >
        <Image
          width={500}
          height={500}
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 z-0"
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {destination.featured && (
            <span className="bg-teal-500 scale-0 group-hover:scale-100 text-white px-3 py-1 rounded-md text-sm font-medium">
              Featured
            </span>
          )}
        </div>

        {destination.bestseller && (
          <div className="absolute top-4 right-4 scale-0 group-hover:scale-100 bg-white px-3 py-1 rounded-md text-sm font-semibold shadow-md">
            Bestseller
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 py-3 bg-white rounded-t-md -mt-2  overflow-hidden relative z-10">
        {/* Location */}
        <div className="flex items-center text-gray-600 text-sm mb-2">
          <MapPin className="w-4 h-4 mr-1 text-green-600" />
          {destination.country}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-3 line-clamp-1">
          {destination.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < destination.rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300 fill-gray-300"
              }`}
            />
          ))}
          <span className="text-sm text-gray-600 ml-1">
            ({destination.reviews} Review
            {destination.reviews !== 1 ? "s" : ""})
          </span>
        </div>

        {/* Info */}
        <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-green-600" />
            {destination.duration}
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4 text-green-600" />
            {destination.persons} Person
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between pt-2 border-t">
          <div>
            <span className="text-sm text-gray-500">From </span>
            <span className="text-lg font-bold text-primary">
              ${destination.price.toFixed(2)}
            </span>
            {destination.originalPrice && (
              <span className="text-sm text-gray-400 line-through ml-2">
                ${destination.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <Link href={`/destinations/${destination.id}`}>
            <Button variant="outline" size={"icon"}>
              <Bookmark className="w-5! h-5! " />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
