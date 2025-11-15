import { Destination } from "@/constant";
import React from "react";

type Props = { tripData: Destination };

function Hero({ tripData }: Props) {
  return (
    <header className=" relative isolate [&_nav]:items-end">
      <img
        className="absolute inset-0 z-[-1] h-full w-full object-cover object-center"
        src={tripData?.image}
        alt={tripData?.name}
      />
      <div className="bg-black/60 absolute inset-0 z-[-1] h-full w-full"></div>

      <div className="py-16 lg:py-32 xl:py-48 text-white">
        <div className="mx-auto w-full max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
          <div className="mx-auto max-w-3xl text-center [&>p]:mx-auto [&>p]:max-w-xl">
            <h1 className="text-4xl/tight font-bold tracking-tight sm:text-4xl/tight lg:text-6xl/tight">
              {tripData?.name}
            </h1>
            <p className="mt-4 text-lg/8">{tripData?.description}</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
