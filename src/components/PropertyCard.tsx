import Image from 'next/image';

interface Property {
  id: string;
  imageUrl: string;
  name: string;
  location: string;
  rent: number;
  flatmates: number;
}

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const handleExplore = () => {
    window.open("https://docs.google.com/forms/d/1g4fQVkfGKrNvYk2ivsDyPSmJ9UGxbnZz-s4bgDdUkE4/edit?ts=66a71a44", "_blank");
  };

  return (
    <div className="property-card flex flex-col justify-between p-2 bg-white rounded-lg overflow-hidden shadow-md w-60 sm:w-80 h-96">
      <div>
        <div className="relative w-full h-60">
          <Image
            src={property.imageUrl}
            alt={property.name}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <div className="p-2">
          <h2 className="text-sm font-semibold">{property.name}</h2>
          <p className="text-xs text-gray-600">{property.location}</p>
          <div className="flex justify-between items-center text-gray-600 text-xs border-t border-gray-300 pt-2">
            <p className="text-xs rounded px-1">
              ₹{property.rent} /mnth
            </p>
            <p className="text-xs">
              {property.flatmates} flatmates
            </p>
          </div>
        </div>
        <div className="pt-2 border-t border-gray-300"></div>
      </div>
      <div className="items-center mx-auto justify-center border-gray-300">
        <button 
          onClick={handleExplore}
          className="mx-auto justify-center bg-[#FF2C61] hover:bg-pink-600 rounded-full px-2 py-2 text-white text-xs"
        >
          <p className='text-center px-3 py-1'>Explore Similar Properties</p>
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;