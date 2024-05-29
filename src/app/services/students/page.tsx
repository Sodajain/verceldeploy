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

export default function StudentService() {
  return (
    <main className="">
      <div className="flex flex-col items-center justify-center text-center gap-8 mt-12 px-12">
        <p className="text-5xl font-bold">Simplifying Student Living </p>
        <Badge variant={"secondary"} className="text-sm">
          Unlock Your Ideal Student Living Experience
        </Badge>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center px-12">
        <div className="flex justify-center mt-20 md:mt-24">
          <Image src={housing_solution} alt="student" className="w-[75%]" />
        </div>
        <div className="flex flex-col gap-6 mt-20 md:mt-24">
          <p className="text-2xl font-bold text-primary">
            Tailored Housing Solutions
          </p>
          <p className="text-md">
            Forget one-size-fits-all. Our service matches you with the ideal
            accommodation that fits your specific needs, lifestyle, and budget.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center px-12">
        <div className="flex flex-col gap-6 mt-20 md:mt-24 order-2 md:order-1">
          <p className="text-2xl font-bold text-primary">
            Fully Furnished Comfort
          </p>
          <p className="text-md">
            Move in with ease. Our properties come fully furnished, designed for
            student life. From cozy beds to study desks, everything is set up
            for your comfort
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
          <p className="text-2xl font-bold text-primary">24/7 Support</p>
          <p className="text-md">
            We're here for you around the clock. Whether it's a maintenance
            issue or you just need some advice, our dedicated support team is
            always a call away.
          </p>
        </div>
      </div>
      {/* <div className="flex flex-col items-center justify-center text-center gap-12 ">
        <p className="text-3xl font-bold">A Glipse of Habiiito Homes</p>
        <Badge variant={"primary"} className="text-sm py-6 px-12 rounded-3xl">
          <Image
            src={glimpse}
            alt="glimpse of homes"
            layout="fill"
            objectFit="cover"
          />
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
