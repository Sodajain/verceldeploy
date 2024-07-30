"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from 'next/image';
import furniture_solution from '../../public/furniture_solution.png';
import illustration from '../../public/illustration.png';

// Using placeholder images
const placeholderImages = [
    { id: 1, src: illustration, alt: 'Placeholder 1' },
    { id: 2, src: furniture_solution, alt: 'Placeholder 2' },
    { id: 3, src: illustration, alt: 'Placeholder 3' },
    { id: 4, src: furniture_solution, alt: 'Placeholder 4' },
    { id: 5, src: illustration, alt: 'Placeholder 5' },
    { id: 6, src: furniture_solution, alt: 'Placeholder 6' },
];

export default function HappyPeople() {
    return (
        <div className="max-w-7xl mx-auto px-8 py-10">
            <div className="text-center mb-8">
                <p className="text-2xl text-[#FF2C61] font-bold">Delivered Smiles with Happy Homes</p>
                <p className="text-gray-700">Our end-to-end service handles everything from property visits to paperwork, including police verification and rental agreements, eliminating the typical hassles associated with renting.</p>
            </div>

            <div className="text-center mb-8">
                <Carousel 
                    opts={{ align: "start", loop: true }} 
                    plugins={[Autoplay({ delay: 3000 })]}
                >
                    <CarouselContent className="-mt-1 h-[400px]">
                        {placeholderImages.slice(0, 3).map((image, index) => (
                            <CarouselItem key={`${image.id}-${index}`} className="pt-1 md:basis-1/3">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                width={400}
                                                height={400}
                                                objectFit="cover"
                                                className="rounded-lg"
                                            />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {[0, 1, 2].map((columnIndex) => (
                    <Carousel
                        key={columnIndex}
                        orientation="vertical"
                        className="w-full"
                        plugins={[Autoplay({ delay: 2000 })]}
                        opts={{ loop: true }}
                    >
                        <CarouselContent className="-mt-1 h-[600px]">
                            {placeholderImages.map((image, index) => (
                                <CarouselItem key={`${image.id}-${index}`} className="pt-1">
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                                <Image
                                                    src={image.src}
                                                    alt={image.alt}
                                                    width={400}
                                                    height={400}
                                                    objectFit="cover"
                                                    className="rounded-lg"
                                                />
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                ))}
            </div>
        </div>
    );
}