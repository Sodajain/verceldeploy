import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import housing_solution from "../../../../public/housing_solution.png";
import furniture_solution from "../../../../public/furniture_solution.png";
import support_solution from "../../../../public/support_solution.png";
import glimpse from "../../../../public/glimpse.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export default function CollegeService() {
  return (
    <main className="px-12">
      <div className="flex flex-col items-center justify-center text-center gap-8 mt-12 ">
        <p className="text-5xl font-bold">
          Empower Your Students with Exceptional Living Spaces
        </p>
        <Badge variant={"secondary"} className="text-sm">
          Unlock Your Ideal Student Living Experience
        </Badge>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center ">
        <div className="flex justify-center mt-20 md:mt-24">
          <Image src={housing_solution} alt="student" className="w-[75%]" />
        </div>
        <div className="flex flex-col gap-6 mt-20 md:mt-24">
          <p className="text-2xl font-bold text-primary">
            End to End Housing Solutions
          </p>
          <p className="text-md">
            Delivering a complete ecosystem from selection to management,
            tailored to enhance and streamline college housing operations,
            fostering academic success and community engagement.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center ">
        <div className="flex flex-col gap-6 mt-20 md:mt-24 order-2 md:order-1">
          <p className="text-2xl font-bold text-primary">
            Efficient Property Management
          </p>
          <p className="text-md">
            Whether your college has existing hostel infrastructure or requires
            complete setup and management, We offer customisable solutions to
            fit your needs
          </p>
        </div>
        <div className="flex justify-center mt-20 md:mt-24 order-1 md:order-2">
          <Image src={furniture_solution} alt="student" className="w-[75%]" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center ">
        <div className="flex justify-center mt-20 md:mt-24">
          <Image src={support_solution} alt="student" className="w-75%]" />
        </div>
        <div className="flex flex-col gap-6 mt-20 md:mt-24">
          <p className="text-2xl font-bold text-primary">
            Streamlined Operations
          </p>
          <p className="text-md">
            Our app and dashboard integrate all parties, automating processes
            for room allotment, payment tracking, and more, ensuring a seamless
            accommodation experience. We help you save upto 30% of operational
            costs.
          </p>
        </div>
      </div>
      {/* <div className="flex flex-col items-center justify-center text-center gap-12 ">
        <p className="text-3xl font-bold">A Glipse of Habiiito Homes</p>
        <Badge variant={"primary"} className="text-sm py-6 px-12 rounded-3xl">
          <Image src={glimpse} alt="glimpse" />
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
