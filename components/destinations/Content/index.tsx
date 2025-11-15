import { useState } from "react";
import {
  Star,
  MapPin,
  Calendar,
  Users,
  Check,
  User,
  Mail,
  Award,
  Shield,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Destination } from "@/constant";
type Props = { tripData: Destination };

function Content({ tripData }: Props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    persons: 1,
    date: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.date) {
      alert("Please fill in all required fields");
      return;
    }

    const bookingDetails = {
      ...formData,
      trip: tripData?.name,
      totalPrice: (
        parseFloat(String(tripData?.price)) *
        parseInt(formData.persons.toString())
      ).toFixed(2),
    };

    console.log("Booking submitted:", bookingDetails);

    alert(
      `Booking Confirmed! ${formData.persons} person(s) for ${tripData?.name}. Total: $${bookingDetails.totalPrice}`
    );

    setFormData({ name: "", email: "", persons: 1, date: "" });
  };

  const totalPrice = (
    parseFloat(String(tripData?.price)) * parseInt(formData.persons.toString())
  ).toFixed(2);
  const savings = (
    parseFloat(String(tripData?.originalPrice)) *
      parseInt(formData.persons?.toString() || "1") -
    parseFloat(totalPrice)
  ).toFixed(2);
  return (
    <section className="max-w-[1380px] mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Overview */}
          <div className="bg-white rounded-2xl p-3  md:p-8 border border-gray-300">
            <h2 className="text-3xl font-bold mb-6 ">Overview</h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-base">
              Experience the magic of Moscow, Russia's fascinating capital, in
              this carefully curated 5-day luxury journey. This premium package
              offers an immersive exploration of one of Europe's most
              captivating cities, where centuries-old history meets vibrant
              modern culture. From the iconic domes of Saint Basil's Cathedral
              to the grandeur of the Kremlin, discover the architectural wonders
              and cultural treasures that make Moscow truly unforgettable.
            </p>
            <p className="text-gray-600 leading-relaxed text-base">
              With expert guides, five-star accommodations, and thoughtfully
              planned itineraries, this journey ensures you experience authentic
              Russian hospitality while enjoying world-class comfort throughout
              your stay.
            </p>
          </div>

          {/* Trip Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white border border-gray-300 text-gray-500  p-6 rounded-2xl  transform transition-all duration-300 hover:scale-[1.02]">
              <Calendar className="w-8 h-8 mb-3 opacity-90 text-primary" />
              <p className="text-sm opacity-90 mb-1">Duration</p>
              <p className="text-2xl font-bold">{tripData?.duration}</p>
            </div>
            <div className="bg-white border border-gray-300 text-gray-500  p-6 rounded-2xl  transform transition-all duration-300 hover:scale-[1.02]">
              <Users className="w-8 h-8 mb-3 opacity-90 text-orange" />
              <p className="text-sm opacity-90 mb-1">Group Size</p>
              <p className="text-2xl font-bold">
                {tripData?.persons} Travelers
              </p>
            </div>
            <div className="bg-white border border-gray-300 text-gray-500  p-6 rounded-2xl transform transition-all duration-300 hover:scale-[1.02]">
              <Star className="w-8 h-8 mb-3 opacity-90 text-yellow-500" />
              <p className="text-sm opacity-90 mb-1">Rating</p>
              <p className="text-2xl font-bold">{tripData?.rating}/5</p>
            </div>
          </div>

          {/* Highlights */}
          <div className="bg-white rounded-2xl p-3  md:p-8 border border-gray-300">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Trip Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tripData?.highlights?.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700 text-base">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Itinerary */}
          <div className="bg-white rounded-2xl shadow-smp-3  md:p-8 border border-gray-300">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Day-by-Day Itinerary
            </h3>
            <div className="">
              {tripData?.itinerary?.map((day) => (
                <div
                  key={day.day}
                  className="relative pl-8 pb-6 border-l-2 border-orange last:pb-0"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-orange"></div>
                  <div className="bg-gray-50 rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-orange text-white text-sm font-bold px-3 py-1 rounded-full">
                        Day {day.day}
                      </span>
                      <h4 className="font-bold text-gray-900 text-lg">
                        {day.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed mt-2">
                      {day.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Booking Form */}
        <div className="lg:col-span-1">
          <div className="sticky top-2 bg-white rounded-2xl p-3  md:p-8 border border-gray-300">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Book Now</h2>
            </div>

            {/* Price Summary */}
            <div className="bg-primary rounded-lg p-6 mb-6 text-white shadow-lg">
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-100">Price per person</span>
                <div className="text-right">
                  <div className="text-2xl font-bold">${tripData?.price}</div>
                  <div className="text-sm line-through text-gray-200">
                    ${tripData?.originalPrice}
                  </div>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3 mt-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Total Amount</span>
                  <span className="text-3xl font-bold">${totalPrice}</span>
                </div>
                {Number(savings) > 0 && (
                  <div className="flex items-center justify-center gap-2 mt-2 bg-primary/50 rounded-md px-3 py-1">
                    <Check className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      You save ${savings}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Form */}
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition-colors bg-gray-50 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition-colors bg-gray-50 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Number of Travelers
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                  <select
                    name="persons"
                    value={formData.persons}
                    onChange={handleInputChange}
                    className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition-colors appearance-none bg-gray-50 focus:bg-white"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "Person" : "Persons"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Travel Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition-colors bg-gray-50 focus:bg-white"
                  />
                </div>
              </div>

              <Button
                onClick={handleSubmit}
                className="w-full text-lg font-semibold"
              >
                {" "}
                Confirm Booking
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
