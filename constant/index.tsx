export type ItineraryItem = {
  day: number;
  title: string;
  description: string;
};

export type Destination = {
  id: number;
  name: string;
  country: string;
  image: string;
  price: number;
  originalPrice: number;
  duration: string;
  persons: number;
  rating: number;
  reviews: number;
  featured: boolean;
  bestseller: boolean;
  description?: string;
  highlights?: string[];
  itinerary?: ItineraryItem[];
};

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Days and 6 nights From Moscow",
    description: `Experience the vibrant city of Moscow, Russia, from the comfort of your own vehicle.`,
    country: "United States USA",
    image:
      "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=800&q=80",
    price: 169.0,
    originalPrice: 199.0,
    duration: "5 days",
    persons: 12,
    rating: 5,
    reviews: 1,
    highlights: [
      "Visit iconic Red Square and Saint Basil's Cathedral",
      "Explore the world-renowned Kremlin complex",
      "Experience authentic Russian culture and cuisine",
      "Professional English-speaking tour guides included",
      "5-star hotel accommodation in central Moscow",
      "Private transportation throughout the journey",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Moscow",
        description:
          "Arrive at Sheremetyevo International Airport. Transfer to your luxury hotel in the heart of Moscow. Evening orientation tour of the illuminated city.",
      },
      {
        day: 2,
        title: "Red Square & Kremlin",
        description:
          "Full day exploring Red Square, Saint Basil's Cathedral, and the Kremlin. Visit the Armoury Chamber and Diamond Fund. Farewell dinner at traditional Russian restaurant.",
      },
      {
        day: 3,
        title: "Museums & Culture",
        description:
          "Visit the State Tretyakov Gallery and pushkin Museum of Fine Arts. Afternoon at leisure to explore local markets and shops.",
      },
      {
        day: 4,
        title: "Day Trip to Golden Ring",
        description:
          "Excursion to historic cities of Sergiev Posad and Rostov. Visit ancient monasteries and learn about Russian heritage.",
      },
      {
        day: 5,
        title: "Leisure & Departure",
        description:
          "Morning spa session at hotel. Afternoon shopping at GUM department store. Evening transfer to airport for return flight.",
      },
    ],
    featured: true,
    bestseller: true,
  },
  {
    id: 2,
    name: "Santorini Island Tour",
    country: "Greece",
    image:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80",
    price: 299.0,
    originalPrice: 349.0,
    duration: "7 days",
    persons: 8,
    rating: 5,
    reviews: 24,
    description:
      "Discover the beautiful island of Santorini with breathtaking views.",
    highlights: [
      "Sunset views at Oia",
      "Wine tasting tours",
      "Relax on black sand beaches",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Santorini",
        description:
          "Check-in at hotel and enjoy a welcome dinner with sunset view.",
      },
      {
        day: 2,
        title: "Island Tour",
        description:
          "Explore Santorini's villages, beaches, and historical sites.",
      },
    ],
    featured: true,
    bestseller: false,
  },
  {
    id: 3,
    name: "Dubai Desert Safari",
    country: "United Arab Emirates",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    price: 189.0,
    originalPrice: 220.0,
    duration: "4 days",
    persons: 15,
    rating: 4,
    reviews: 18,
    description: "Experience thrilling desert adventures in Dubai.",
    highlights: [
      "Dune bashing in 4x4 vehicles",
      "Camel riding experience",
      "Traditional Bedouin camp dinner",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Desert Excursion",
        description: "Pick-up from hotel and begin desert safari activities.",
      },
    ],
    featured: false,
    bestseller: true,
  },
  {
    id: 4,
    name: "Paris Romance Package",
    country: "France",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
    price: 459.0,
    originalPrice: 520.0,
    duration: "6 days",
    persons: 6,
    rating: 5,
    reviews: 42,
    description: "Enjoy a romantic getaway in the city of love, Paris.",
    highlights: [
      "Eiffel Tower visit",
      "Seine River cruise",
      "Louvre museum tour",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Paris",
        description: "Check-in at hotel and evening walk along the Seine.",
      },
    ],
    featured: true,
    bestseller: true,
  },
  {
    id: 5,
    name: "Tokyo Cultural Experience",
    country: "Japan",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
    price: 549.0,
    originalPrice: 599.0,
    duration: "8 days",
    persons: 10,
    rating: 5,
    reviews: 36,
    description: "Immerse yourself in Tokyo's unique culture and traditions.",
    highlights: ["Visit temples", "Sushi making workshop", "Explore Akihabara"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Tokyo",
        description: "Check-in at hotel and evening city walk.",
      },
    ],
    featured: false,
    bestseller: false,
  },
  {
    id: 6,
    name: "Bali Beach Paradise",
    country: "Indonesia",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    price: 279.0,
    originalPrice: 320.0,
    duration: "5 days",
    persons: 12,
    rating: 4,
    reviews: 28,
    description:
      "Relax on Bali's pristine beaches and enjoy tropical adventures.",
    highlights: ["Beach activities", "Temple visits", "Spa treatments"],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Bali",
        description: "Check-in at resort and enjoy beachside sunset.",
      },
    ],
    featured: false,
    bestseller: true,
  },
];

// Return min and max price
export const getMinMaxPrice = () => {
  const prices = destinations.map((d) => d.price);

  return { minPrice: Math.min(...prices), maxPrice: Math.max(...prices) };
};

// Return single destination by id
export const getSingleDestination = (id: number) => {
  return destinations.find((d) => d.id === id);
};
