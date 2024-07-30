import {
  DiscordLogo,
  FacebookLogo,
  InstagramLogo,
  TwitterLogo
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import main_logo from "../../public/main_logo.png";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-100 py-12 md:px-24 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="text-black flex flex-col gap-6 px-12 py-6">
            <Image src={main_logo} alt="logo" width={100} height={80} />
      
           
            <p>
              Habiiito is a full-stack digital platform designed to revolutionise the rental housing market. We provide a seamless, trustworthy, and efficient rental experience by offering verified property listings, lifestyle-based filters, and comprehensive end-to-end services.
            </p>
            <div className="flex gap-6 mt-6">
              <DiscordLogo size={24} weight="fill" className="cursor-pointer" />
              <InstagramLogo
                size={24}
                weight="fill"
                className="cursor-pointer"
              />
              <FacebookLogo
                size={24}
                weight="fill"
                className="cursor-pointer"
              />
              <TwitterLogo size={24} weight="fill" className="cursor-pointer" />
            </div>
            <p className="text-sm text-gray-500">
              info@habiiito.in | DLF Cyberpark, Gurugram, 122008
            </p>
          </div>
          <div className="text-black flex flex-col gap-6 px-12 py-6">
            <div className="border-t border-gray-600">
              <p className="text-lg font-bold">Find a Flatmate</p>
              <p>Gurgaon | Mumbai | Delhi</p>
            </div>
            <div className="border-t border-gray-600">
              <p className="text-lg font-bold">Find Your Home</p>
              <p>Gurgaon | Mumbai | Delhi</p>
            </div>
          
          </div>
        </div>
      </footer>
      <p className="text-gray-500 text-center text-xs py-1">
        Habiiito &copy; All rights reserved
      </p>
    </>
  );
}
