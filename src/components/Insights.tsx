import Image from "next/image";
import insight_image from "../../public/insight_image.png";

export default function Insights() {
  return (
    <main className="grid grid-cols-1  justify-center bg-background-dark text-white p-2 md:p-6">
      <div className="hidden">
        <Image src={insight_image} alt="insight_image" />
      </div>

      <div className="col-span-3 flex flex-col justify-center items-center gap-6 ">
        <p className="text-center text-xl md:text-2xl font-bold">
          Making your househunt smoother
        </p>
        <div className="flex justify-center bg-gray-600 rounded-3xl py-6 px-2 md:px-12  max-w-[100%]">
          <div className="text-center pr-6 md:pr-12 border-r-2">
            <p className="text-2xl md:text-4xl font-bold text-[#52D7D7]">20+</p>
            <p className="text-sm md:text-md ">Landlord Connects</p>
          </div>
          <div className="text-center px-6 md:px-12 border-r-2">
            <p className="text-2xl md:text-4xl font-bold text-[#52D7D7]">
              20+
            </p>
            <p className="text-sm md:text-md ">Flatmate connects</p>
          </div>
          <div className="text-center pl-6 md:pl-12">
            <p className="text-2xl md:text-4xl font-bold text-[#52D7D7]">60+</p>
            <p className="text-sm md:text-md ">Available rooms</p>
          </div>
        </div>
      </div>
    </main>
  );
}
