import Image from "next/image";
import airtel from "../../public/airtel.png";
import cognizant from "../../public/cognizant.png";
import google from "../../public/google.png";
import zomato from "../../public/zomato.png";

export default function UserAndJourney() {
  return (
    <div className="user-and-journey bg-white">
      {/* Header Section */}
      <header className="flex flex-col justify-center items-center py-12 px-6 md:px-24">
        <h2 className="text-4xl font-bold text-[#FF2C61]">Our Journey So Far!</h2>
        <p className="text-sm text-gray-700 mt-4 max-w-2xl text-center">
          Our end-to-end service handles everything from property visits to paperwork, including police verification.
        </p>
      </header>

      {/* Logos Section */}
      <section className="logos flex justify-center items-center gap-12 py-12 px-6 md:px-24">
        <div className="logo w-32 h-30 rounded-full overflow-hidden">
          <Image src={google} alt="Google" className="h-18 w-full" />
        </div>
        <div className="logo w-32 h-30 rounded-full overflow-hidden">
          <Image src={cognizant} alt="Cognizant" className="h-18 w-full" />
        </div>
        <div className="logo w-32 h-30 rounded-full overflow-hidden">
          <Image src={airtel} alt="Airtel"  className="h-18 w-full"/>
        </div>
        <div className="logo w-32 h-30 rounded-full overflow-hidden">
          <Image src={zomato} alt="Zomato" className="h-18 w-full" />
        </div>
      </section>

      {/* Statistics Section */}
      <div className="flex flex-col col-1 justify-center items-center py-12 px-6 md:px-24 bg-gradient-to-b from-white to-gray-900">
      <section className="statistics grid grid-cols-1 md:grid-cols-4 gap-6 py-12 px-6 md:px-24">
        {[
          { value: "20%", label: "Total Clients who referred us further after using our services" },
          { value: "200+", label: "Total Properties we have shown to our clients till date" },
          { value: "100+", label: "Client Leads in last 50 Days" },
          { value: "4.8/5", label: "NPS by Clients we have shown to our clients till date" },
        ].map((item, index) => (
          <div key={index} className="stat text-center bg-gray-600 opacity-90 rounded-lg p-6 md:p-8 shadow-md">
            <p className="text-4xl font-bold text-teal-400">{item.value}</p>
            <p className="text-sm text-white mt-2">{item.label}</p>
          </div>
        ))}
      </section>

      {/* Bottom Section */}
      <section className="bottom  text-white py-12 px-6 md:px-24">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm mb-4">
            Our end-to-end service handles everything from property visits to paperwork, including police verification.
          </p>
        
        </div>
      </section>
    </div>
    </div>
  );
}
