"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import image1 from "@/public/slide1.jpg";
import overlayImage from "@/public/mask-slide.png";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
type Props = {};

function Hero({}: Props) {
  return (
    <div className="relative h-screen  overflow-hidden">
      {/* Image */}
      <Image src={image1} alt="hero" fill className="object-cover" />

      {/* Overlay */}
      <Image
        src={overlayImage}
        alt="overlay"
        fill
        className="object-cover w-full opacity-70 md:opacity-95  md:max-w-[67%]"
      />
      {/* Overlay */}
      <div
        className="
      absolute top-0 left-0 w-full h-full bg-black/20"
      ></div>

      <div className="animate-rotate-left-right w-[180px] relative h-20 border-2 border-primary top-20 left-[55%] text-4xl flex items-center justify-center font-yesteryear text-white">
        Booling
        <div>
          <div className="absolute -top-1.5 -left-2 w-4 h-3 bg-white border-2 border-primary"></div>
          <div className="absolute -top-1.5 -right-2 w-4 h-3 bg-white border-2 border-primary"></div>
          <div className="absolute -bottom-1.5 -left-2 w-4 h-3 bg-white border-2 border-primary"></div>
          <div className="absolute -bottom-1.5 -right-2 w-4 h-3 bg-white border-2 border-primary"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-[1380px] mx-auto mb-36 px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl text-center md:text-left">
            <p className="text-primary font-yesteryear text-3xl mb-2 font-light italic">
              Explore the world
            </p>

            <h1 className="text-5xl md:text-[76px] uppercase font-extrabold text-white mb-6 leading-tight text-balance">
              Tour Travel &<br />
              <span className="text-accent">
                Adventure{" "}
                <span className="text-primary">
                  <TypeAnimation
                    preRenderFirstString={true}
                    sequence={[2000, "Camping", 2000, "Hiking", 2000]}
                    speed={5}
                    repeat={Infinity}
                  />
                </span>
              </span>
            </h1>

            <p className="text-gray-200 text-md mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
              Welcome to our Print 128 website! We are a professional and
              reliable printing company that offers a wide range of printing
              services to
            </p>

            <div className="flex gap-4 items-center flex-wrap justify-center md:justify-start">
              <Link href="">
                <Button
                  size="lg"
                  className="uppercase w-full max-w-[200px] text-md font-semibold group transition-all duration-[400]"
                  variant={"default"}
                >
                  <span className="group-hover:translate-x-0 translate-x-2 transition-all duration-500">
                    Let's Get Started
                  </span>
                  <ArrowRight className="opacity-0 group-hover:opacity-100 size-5!" />
                </Button>
              </Link>

              <Button
                size="lg"
                variant="ghost"
                className="w-full max-w-[200px] text-xl font-medium text-white items-center group"
              >
                Who we are
                <div className="bg-primary rounded-full text-black mt-1 group-hover:translate-x-1 transition-all duration-300">
                  <ChevronRight />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
