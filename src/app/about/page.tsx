import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import founders from "../../../public/2-1.png";

export default function About() {
  return (
    <main className="px-8 py-12">
      <div className="flex flex-col items-center justify-center text-center gap-8 mb-12">
        <p className="text-5xl font-bold">
          We are <span className="text-primary">Habiiito</span>
        </p>
        <Badge variant={"success"} className="text-sm">
          Your Full-Stack Digital Platform for a Seamless Housing Rental Experience
        </Badge>
      </div>

      <div className="max-w-3xl mx-auto mb-12">
        <p className="text-md text-gray-700">
          Habiiito is revolutionizing the housing rental landscape by addressing the crucial pain points faced by
          renters and property owners alike. With a comprehensive ecosystem for seamless rental management, Habiiito is
          dedicated to improving the quality, accessibility, and management of rental properties. Our vision is to
          create a world where everyone has access to comfortable, safe, and supportive living spaces that enhance
          their overall well-being.
        </p>
      </div>

      <div className="mb-12">
        
        <p className="text-xl font-semibold mb-8">
          Transforming housing rental experiences while streamlining operational efficiencies
        </p>
        <div className="grid grid-cols-1 gap-8 items-center">
         
          <div>
            <p className="text-md text-gray-700">
              We identified a significant gap in the housing rental sector and set out to solve it with innovative,
              technology-driven solutions. Our goal is to ensure that rental properties are more than just places to
              stay—they are communities where people thrive. With Habiiito, you can enjoy a seamless end-to-end rental
              experience, from finding the perfect property to managing your stay with our dedicated support services.
            </p>
          </div>
        </div>
      </div>
  
      <div className="mb-12">
        <p className="text-lg text-primary font-bold mb-4">End-to-End Rental Services</p>
        <div className="grid grid-cols-1 gap-8">
          <div>
            <p className="text-md text-gray-700 mb-4">
              At Habiiito, we offer a comprehensive suite of rental services to ensure a hassle-free experience for
              both renters and property owners. From listing and marketing your property to tenant screening and
              property management, we've got you covered.
            </p>
            <p className="text-md text-gray-700">
              Our dedicated team is available 24/7 to assist you with any queries or concerns, ensuring a smooth and
              enjoyable rental journey. We also provide convenient pick-up and drop-off services, making your move-in
              and move-out process a breeze.
            </p>
          </div>
        </div>
            <div>
      <p className="text-lg text-primary font-bold mb-4">Our Founders</p>
        <div className="flex justify-center">
            <Image
              src={founders}
              alt="Founders"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          </div>
      </div>
      <Footer/>
    </main>
  );
}
