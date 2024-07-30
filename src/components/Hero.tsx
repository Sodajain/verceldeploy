"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import another_image from "../../public/another_image.png"; // Add the third image import
import flatemate from "../../public/flatemate.png";
import hero_image from "../../public/hero_image.png";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [hero_image, flatemate, another_image];

  const texts = [
    "Hassle-Free Living Starts with Habiiito",
    "Finding the perfect flatmate just became easier",
    "Finding the perfect flat just became easier"
  ];

  const buttons = [
    { text: "List a Property", link: "https://habito.in/" },
    { text: "Find a Flatmate", link: "https://docs.google.com/forms/d/1pRHzK-2YZ7s005i1xCfjjY-3RdSCCH7AJxvsmpeM4Zs/edit?ts=66a71a77" },
    { text: "Find a Flat", link: "https://docs.google.com/forms/d/1g4fQVkfGKrNvYk2ivsDyPSmJ9UGxbnZz-s4bgDdUkE4/edit?ts=66a71a44" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 9 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main 
  className="relative h-screen bg-cover bg-center transition-all duration-700 ease-out" 
  style={{ backgroundImage: `url(${images[activeIndex].src})` }}
>
      {/* Background overlay for dimming effect */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Hero content container */}
      <div className="absolute inset-0 flex flex-col md:flex-row justify-between items-end px-6 md:px-12 pb-12">
        {/* Text container */}
        <div className="max-w-2xl pb-5 mb-20 md:mb-0 mt-6">
          {/* Hero title */}
          <h2 className="text-4xl md:text-5xl text-white font-semibold mb-4">
            {texts[activeIndex]}
          </h2>
          {/* Hero description */}
          <p className="text-md md:text-lg text-gray-200 mb-6">
            Find the perfect flatmates with our trusted, simplified, and tech-enabled full-stack rental solutions.
          </p>
          {/* Call to action button */}
          <Button asChild className="bg-[#FF2C61] h-45 w-60 hover:bg-pink-600 rounded-full px-8 py-3 text-white text-xl ">
            <Link href={buttons[activeIndex].link}>{buttons[activeIndex].text}</Link>
          </Button>
        </div>

        {/* Carousel container */}
        {/* Carousel container */}
{/* Carousel container */}
<div className="w-full max-w-3xl mb-8 md:mb-0 flex justify-center md:justify-end">
  <Carousel className="w-full max-w-md">
    <CarouselContent className="-ml-2 flex items-center">
      {images.map((image, index) => (
        <CarouselItem
          key={index}
          className={`pl-2 transition-all duration-500 ease-out ${
            index === activeIndex ? 'basis-1/2' : 'basis-1/4'
          }`}
        >
          <div className={`aspect-[3/4] relative overflow-hidden rounded-lg ${
            index === activeIndex ? 'border-2 border-white' : ''
          }`}>
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className={`transition-all duration-500 ease-out ${
                index === activeIndex ? 'scale-105' : 'scale-100 opacity-80'
              }`}
            />
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious className="hidden" />
    <CarouselNext className="hidden" />
  </Carousel>
</div>
      </div>
    </main>
  );
}
