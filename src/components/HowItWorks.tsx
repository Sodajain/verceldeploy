"use client";

import Image from 'next/image';
import dealdonegirls from '../../public/Dealdonegirls.png';
import houseinspect from '../../public/houseinspect.png';
import houseinspected from '../../public/houseinspected.png';

export default function HowItWorks() {
    return (
        <div className="max-w-7xl mx-auto px-8 py-10">
            <div className="text-center mb-12">
                <p className="text-3xl text-[#FF2C61] font-bold mb-4">How It Works</p>
                <p className="text-gray-700 text-lg">Our comprehensive service manages everything from property visits to paperwork, including police verification and rental agreements, ensuring a seamless rental experience.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="text-center">
                    <Image 
                        src={houseinspect} 
                        alt="Verified and trusted properties" 
                        className="w-2/3 mx-auto mb-4 rounded-full shadow-lg" 
                    />
                    <p className='text-[#FF2C61] text-xl font-bold mb-2'>Verified and Trusted Properties</p>
                    <p className='text-gray-700'>We ensure all properties are thoroughly verified before listing them on the Habiiito catalogue.</p>
                </div>
                <div className="text-center">
                    <Image 
                        src={houseinspected} 
                        alt="Assisted property visits" 
                        className="w-2/3 mx-auto mb-4 rounded-full shadow-lg" 
                    />
                    <p className='text-[#FF2C61] text-xl font-bold mb-2'>Assisted Property Visits</p>
                    <p className='text-gray-700'>We schedule visits according to your convenience and provide transportation for all appointments.</p>
                </div>
                <div className="text-center">
                    <Image 
                        src={dealdonegirls} 
                        alt="You choose the best properties" 
                        className="w-2/3 mx-auto mb-4 rounded-full shadow-lg" 
                    />
                    <p className='text-[#FF2C61] text-xl font-bold mb-2'>Personalized Property Matches</p>
                    <p className='text-gray-700'>Receive property matches tailored to your lifestyle preferences and make informed decisions.</p>
                </div>
            </div>
        </div>
    );
}
