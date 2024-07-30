"use client";
import { StaticImageData } from 'next/image';
import { useState } from "react";
import petfamily from '../../public/petfamily.png';


import buddies from '../../public/buddies.png';
import driver from '../../public/driver.png';
import BenefitCard from "./BenefitCard";
import { Button } from "./ui/button";
import Switch from "./ui/switch";

import keys from '../../public/keys.png';
import report from '../../public/report.png';
interface Benefit {
  id: string;
  imageUrl: StaticImageData;
  Benefit: string;
  Description: string;
}

const benefits: Benefit[] = [
  {
    id: '1',
    imageUrl: report,
    Benefit: 'Fully inspected properties',
    Description: 'We provide comprehensive inspection reports to ensure the quality of your new home.',
  },
  {
    id: '2',
    imageUrl: driver,
    Benefit: 'Pick up and drop off',
    Description: 'We know you are new to the city and want to make sure you get where you need to be.',
  },
  {
    id: '3',
    imageUrl: keys,
    Benefit: 'Scheduled visits',
    Description: 'Coordinating with the key manager to the best suited time for both the parties.',
  },
];

const flatmateBenefits: Benefit[] = [
  {
    id: '1',
    imageUrl: buddies,
    Benefit: 'Find Compatible Flatmates',
    Description: 'Our service helps you find flatmates with similar lifestyles and preferences.',
  },
  {
    id: '2',
    imageUrl: keys,
    Benefit: 'Scheduled Visits',
    Description: 'We make sure the potential flatmates meet you only at the best suited time',
  },
  {
    id: '3',
    imageUrl: petfamily,
    Benefit: 'Lifestyle matching',
    Description: 'You may love a pet or love hosting a good party - We make sure you flatmate is your partner in crime.',
  },
];

const handleFindFlat = () => {
  window.open("https://docs.google.com/forms/d/1g4fQVkfGKrNvYk2ivsDyPSmJ9UGxbnZz-s4bgDdUkE4/edit?ts=66a71a44", "_blank");
};
const handleMore = () => {
  window.open("/about", "_blank");
};
export default function BenefitsPage() {
  const [isFlatmate, setIsFlatmate] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-8 py-10">
      <div className="flex justify-center mb-6">
        <div className="space-y-4">
          <Switch label="" onToggle={setIsFlatmate} />
        </div>
      </div>
      <div className="text-center mb-8">
        <p className="text-2xl text-[#FF2C61] font-bold">Enjoy Habiiito Benefits</p>
      </div>
      <div className="text-center mb-8">
        <p className="text-gray-700">
          Our end-to-end service handles everything from property visits to paperwork, including police verification and rental agreements, eliminating the typical hassles associated with renting.
        </p>
      </div>
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {isFlatmate ? (
          flatmateBenefits.map((benefit) => <BenefitCard key={benefit.id} benefit={benefit} />)
        ) : (
          benefits.map((benefit) => <BenefitCard key={benefit.id} benefit={benefit} />)
        )}
      </div>
      <div className="flex justify-center mb-6 p-4 space-x-4">
        <Button onClick={handleFindFlat} className="bg-[#FF2C61] hover:bg-pink-600 rounded-full px-8 py-3 text-white font-semibold">
          Browse Flats
        </Button>
        <Button onClick={handleMore} className="bg-white hover:bg-pink-600 border border-[#FF2C61] rounded-full px-8 py-3 text-[#FF2C61] font-semibold">
          Learn more
        </Button>
      </div>
    </div>
  );
}
