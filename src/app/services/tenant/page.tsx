import { FaFilter, FaHandshake, FaHome } from 'react-icons/fa';

const tenants = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        Find Your Perfect Rental Home
      </h1>

      <div className="bg-gray-100 rounded-lg p-8 flex flex-col items-center max-w-lg mx-auto mb-12">
        <FaHome className="text-6xl text-blue-500 mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">For Flat Seekers</h2>
        <p className="text-gray-600 text-center mb-4">
          Browse extensive listings, apply filters, and connect seamlessly with potential matches.
        </p>
        <button  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          <a href="https://habito.in">Find Your Match</a>
        </button>
      </div>

      <div className="max-w-4xl mx-auto mt-12 flex flex-col md:flex-row items-center justify-center">
        <div className="mr-8 mb-8 md:mb-0">
          <FaFilter className="text-6xl text-purple-500" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Advanced Filtering</h2>
          <p className="text-gray-600">
            Narrow down your search based on location, budget, amenities, and more to find the perfect flat.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-12 flex flex-col md:flex-row items-center justify-center">
        <div className="mr-8 mb-8 md:mb-0">
          <FaHandshake className="text-6xl text-pink-500" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Seamless Connections</h2>
          <p className="text-gray-600">
            Connect with potential landlords effortlessly and discuss further details to secure your ideal rental.
          </p>
        </div>
      </div>
    </div>
  );
};

export default tenants;