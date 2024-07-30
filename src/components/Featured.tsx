"use client";

import prop1 from "../../public/18k_residency_ardee.png";
import prop2 from "../../public/24.5k_sec51mayfield.png";
import prop4 from "../../public/DLFp4_22500furnished.png";
import prop3 from "../../public/esselmgroad_21000.png";
import PropertyCard from "./PropertyCard";

interface Property {
  id: string;
  imageUrl: string;
  name: string;
  location: string;
  rent: number;
  flatmates: number;
}

export default function Featured() {
  const properties: Property[] = [
    {
      id: 'Villas',
      imageUrl: prop1,
      name: 'Room in 4BHK',
      location: 'The Residency, Ardee City, Sector 54',
      rent: 18000,
      flatmates: 3,
    },
    {
      id: 'blue-homes',
      imageUrl: prop2,
      name: 'Essel Towers - 2BHK',
      location: 'MG Road, Gurgaon',
      rent: 21000,
      flatmates: 1,
    },
    {
      id: 'mayfield',
      imageUrl: prop3,
      name: '1 Room in 4BHK',
      location: 'Sec 51, Mayfield, Gurgaon',
      rent: 24500,
      flatmates: 3,
    },
    {
      id: 'DLFp4',
      imageUrl: prop4,
      name: '1 room in condomonium',
      location: 'DLF Phase 4, Gurgaon',
      rent: 22500,
      flatmates: 2,
    }
    // Add more properties here
  ];

  return (
    <div className="w-full mx-auto px-8 py-10">
      <div className="text-center mb-8">
        <p className="text-2xl text-[#FF2C61] font-bold">Featured Properties</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}
