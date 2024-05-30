import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { FaGlobe } from 'react-icons/fa';
import founders from "../../../public/2-1.png";

export default function About() {
  return (
    <main className="px-8 py-12">
      <div className="flex flex-col items-center justify-center text-center mb-12">
        <p className="text-5xl font-bold">
          We are <span className="text-primary transition-all duration-300 transform hover:scale-105">Habiiito</span>
        </p>
        <Badge variant={"success"} className="text-sm mt-4 transition-all duration-300 transform hover:scale-105">
          Your Full-Stack Digital Platform for Seamless Housing Rental
        </Badge>
      </div>

      <div className="max-w-3xl mx-auto mb-12 bg-gray-100 p-6 rounded-lg transition-all duration-300 transform hover:scale-105">
        <p className="text-gray-700">
          Habiiito revolutionizes housing rentals by addressing key pain points for renters and owners.
           We offer an ecosystem for seamless management, aiming for comfortable, safe, and supportive living spaces.
        </p>
      </div>

      <div className="mb-12 bg-gray-100 p-6 rounded-lg">
        <p className="text-xl font-semibold mb-6">Transforming Rental Experiences</p>
        <div className="grid grid-cols-1 gap-6">
          <div className="flex items-center transition-all duration-300 transform hover:scale-105">
            <FaGlobe className="text-3xl text-primary mr-4" />
            <div>
              <p className="text-gray-700 mb-2">
                Comprehensive suite of rental services for both renters and owners, including listing, marketing, tenant screening, and property management.
              </p>
              <p className="text-gray-700">
                24/7 dedicated support team for seamless rental journeys, with convenient pick-up and drop-off services.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Image
          src={founders}
          alt="Founders"
          className="rounded-lg shadow-lg"
        />
      </div>

      <Footer/>
    </main>
  );
}
