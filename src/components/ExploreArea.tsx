"use client";

import Image from 'next/image';
import Loc1 from '../../public/Loc1.png';
import Loc2 from '../../public/Loc2.png';
import Loc3 from '../../public/Loc3.png';
import Loc4 from '../../public/Loc4.png';
import Loc5 from '../../public/Loc5.png';
import carton from '../../public/carton.png';
import house from '../../public/house.png';
import { Button } from './ui/button';

const images = [Loc1, Loc2, Loc3, Loc4, Loc5];
const repeatedImages = [...images, ...images]; // Double the images array for repeating effect

export default function ExploreArea() {
    const handleFindFlat = () => {
        window.open("https://docs.google.com/forms/d/1g4fQVkfGKrNvYk2ivsDyPSmJ9UGxbnZz-s4bgDdUkE4/edit?ts=66a71a44", "_blank");
    };

    const handleFindFlatmate = () => {
        window.open("https://docs.google.com/forms/d/1pRHzK-2YZ7s005i1xCfjjY-3RdSCCH7AJxvsmpeM4Zs/edit?ts=66a71a77", "_blank");
    };

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
            {/* ... (rest of the code remains the same) ... */}

            {/* Bottom Cards */}
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-100 p-0 rounded-lg flex flex-col md:flex-row items-center md:items-start h-auto md:h-72 w-full">
                        <div className="w-full p-3 md:w-1/2 md:pr-4">
                            <p className="text-md md:text-lg font-bold mb-2">For Tenant</p>
                            <p className="text-gray-600 text-left mb-4 text-xs md:text-sm">
                                Get verified properties at your specified location. under budget. in a few clicks.
                            </p>
                            <div className="mt-auto">
                                <Button 
                                    onClick={handleFindFlat}
                                    className="bg-[#FF2C61] hover:bg-pink-600 rounded-full px-4 py-2 text-white text-xs md:text-sm"
                                >
                                    Find a Flat
                                </Button>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 h-24 md:h-full bg-gray-200 rounded-md mt-4 md:mt-0 relative">
                            <Image
                                src={house}
                                alt="List a Property"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-md"
                            />
                        </div>
                    </div>
                    <div className="bg-gray-100 p-0 rounded-lg flex flex-col md:flex-row items-center md:items-start h-auto md:h-72 w-full">
                        <div className="w-full p-3 md:w-1/2 md:pr-4">
                            <p className="text-md md:text-lg font-bold mb-2">For Flat</p>
                            <p className="text-gray-600 text-left mb-4 text-xs md:text-sm">
                                Get perfect verified flatmates who match your vibe & lifestyle.
                            </p>
                            <div className="mt-auto">
                                <Button  
                                    onClick={handleFindFlatmate}
                                    className="bg-[#FF2C61] hover:bg-pink-600 rounded-full px-4 py-2 text-white text-xs md:text-sm"
                                >
                                    Find a Flatmate
                                </Button>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 h-24 md:h-full bg-gray-200 rounded-md mt-4 md:mt-0 relative">
                            <Image
                                src={carton}
                                alt="Find a Flatmate"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-md"
                            />
                        </div>
                        <div className="w-full md:w-1/2 h-24 md:h-full bg-gray-200 rounded-md mt-4 md:mt-0"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
