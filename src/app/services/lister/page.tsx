import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import furniture_solution from "../../../../public/furniture_solution.png";
import housing_solution from "../../../../public/housing_solution.png";
import support_solution from "../../../../public/support_solution.png";

export default function StudentService() {
  return (
    <main className="">
      <div className="flex flex-col items-center justify-center text-center gap-8 mt-12 px-12">
        <p className="text-5xl font-bold">Introducing Habiiito</p>
        <Badge variant={"secondary"} className="text-sm">
          Your Gateway to Hassle-Free Property Management
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center px-12">
        <div className="flex justify-center mt-20 md:mt-24">
          <Image src={housing_solution} alt="student" className="w-[75%]" />
        </div>
        <div className="flex flex-col gap-6 mt-20 md:mt-24">
          <p className="text-2xl font-bold text-primary">Access to Verified Tenants</p>
          <p className="text-md">
            Habiiito connects you with thoroughly screened and verified tenants, ensuring a reliable and trustworthy experience.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center px-12">
        <div className="flex flex-col gap-6 mt-20 md:mt-24 order-2 md:order-1">
          <p className="text-2xl font-bold text-primary">List Your Property with Ease</p>
          <p className="text-md">
            Our user-friendly platform streamlines the process of listing your property. Showcase your space with detailed descriptions and high-quality photos, attracting the right tenants.
          </p>
        </div>
        <div className="flex justify-center mt-20 md:mt-24 order-1 md:order-2">
          <Image src={furniture_solution} alt="student" className="w-[75%]" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center px-12">
        <div className="flex justify-center mt-20 md:mt-24">
          <Image src={support_solution} alt="student" className="w-[75%]" />
        </div>
        <div className="flex flex-col gap-6 mt-20 md:mt-24">
          <p className="text-2xl font-bold text-primary">Manage Visits with Assistance</p>
          <p className="text-md">
            Our dedicated team is here to support you every step of the way. We'll help you coordinate and manage property visits, ensuring a seamless experience for both you and your potential tenants.
          </p>
        </div>
      </div>

      {/* <div className="flex flex-col items-center justify-center text-center gap-12 ">
        <p className="text-3xl font-bold">A Glipse of Habiiito Homes</p>
        <Badge variant={"primary"} className="text-sm py-6 px-12 rounded-3xl">
          <Image src={glimpse} alt="glimpse of homes" layout="fill" objectFit="cover" />
        </Badge>
      </div> */}

      {/* <div className=" flex justify-center">
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1 ">hello</div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div> */}
    </main>
  );
}