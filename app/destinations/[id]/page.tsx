"use client";

import { useParams } from "next/navigation";
import { Destination, getSingleDestination } from "@/constant";
import Hero from "@/components/destinations/Hero";
import Content from "@/components/destinations/Content";

export default function Home() {
  const params = useParams();
  const id = params.id;
  const tripData = getSingleDestination(Number(id));

  return (
    <main className="">
      {/* Hero Section */}
      <Hero tripData={tripData as Destination} />

      {/* Content & Form Section */}
      <Content tripData={tripData as Destination} />
    </main>
  );
}
