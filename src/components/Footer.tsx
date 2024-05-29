import {
  CaretRight,
  DiscordLogo,
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
} from "@phosphor-icons/react/dist/ssr";
import main_logo from "../../public/main_logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-background-dark py-12 md:px-24 mt-24">
        <div className="flex items-center gap-6 px-12 ">
          <Image src={main_logo} alt="logo" width={48} height={48} />
          <p className="text-white text-xl">Habiiito</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="text-white  flex flex-col gap-6 px-12  mt-6">
            <p className="text-md">
              We are not just an accommodation provider, we're a community
              builder, a technology innovator, and a partner in your educational
              journey. Our platform bridges the gap between students and
              landlords, offering a seamless accommodation experience
            </p>
            <div className="flex gap-6">
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
              help@habiiito.com | DLF Cyberpark, Gurugram, 122008
            </p>
          </div>
          <div className="text-white text-md flex flex-col gap-6 px-12  mt-6">
            <p className="text-lg font-bold">Explore</p>
            <div className="cursor-pointer flex items-center gap-2">
              <CaretRight size={12} />
              <Link href={"#"}>Services</Link>
            </div>
            <div className="cursor-pointer flex items-center gap-2">
              <CaretRight size={12} />
              <Link href={"#"}>Teams</Link>
            </div>
            <div className="cursor-pointer flex items-center gap-2">
              <CaretRight size={12} />
              <Link href={"#"}>Supprt</Link>
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
