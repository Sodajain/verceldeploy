"use client";
import Image, { StaticImageData } from 'next/image';

interface Benefit {
  id: string;
  imageUrl: StaticImageData;
  Benefit: string;
  Description: string;
}

interface BenefitCardProps {
  benefit: Benefit;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ benefit }) => {
  return (
    <div className="property-card flex flex-col justify-between p-1 bg-white rounded-lg overflow-hidden shadow-md">
      <div>
        <div className="relative w-full h-60">
          <Image
            src={benefit.imageUrl}
            alt={benefit.Benefit}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <div className="p-2">
          <h2 className="text-sm font-semibold">{benefit.Benefit}</h2>
          <p className="text-xs text-gray-600">{benefit.Description}</p>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;

