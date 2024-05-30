"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { List, XCircle } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import main_logo from "../../public/main_logo.png";

function Sidebar() {
  return (
    <Drawer direction="right">
      <DrawerTrigger className="cursor-pointer md:hidden">
        <List size={24} />
      </DrawerTrigger>
      <DrawerContent className="h-full bg-white p-2">
        <DrawerHeader className="flex justify-between items-center">
          <DrawerClose>
            <XCircle size={24} />
          </DrawerClose>
        </DrawerHeader>
        <NavigationMenu>
          <NavigationMenuList className="flex flex-col gap-4 mt-8">
            <NavigationMenuItem>
              <Link href={"/"} legacyBehavior passHref>
                <NavigationMenuLink className="text-lg hover:text-primary">
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={"/about"} legacyBehavior passHref>
                <NavigationMenuLink className="text-lg hover:text-primary">
                  About us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-lg hover:text-primary">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent className=" flex flex-col gap-2 mt-2 w-40 ">
                <Link href={"/services/lister"} legacyBehavior passHref>
                  <NavigationMenuLink className="text-base hover:text-primary px-4 py-2">
                    For Listing Property
                  </NavigationMenuLink>
                </Link>
                <Link href={"/services/tenant"} legacyBehavior passHref>
                  <NavigationMenuLink className="text-base hover:text-primary px-4 py-2">
                    For Searching Property
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={"/#contact"} legacyBehavior passHref>
                <NavigationMenuLink className="text-lg hover:text-primary">
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <DrawerFooter className="mt-auto">
          <Button
            variant={"outline"}
            className="w-full rounded-full border-primary text-primary hover:text-primary/90 hover:bg-transparent"
            asChild
          >
            <Link href={"/#contact"}>Contact Us</Link>
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <Link href={"/"} className="flex items-center gap-2">
        <Image src={main_logo} alt="logo" width={36} height={36} unoptimized />
        <p className="text-primary font-bold transition-all duration-300 transform hover:scale-105 ">Habiiito</p>
      </Link>
      <NavigationMenu className="hidden md:flex transition-all duration-300 transform hover:scale-105">
        <NavigationMenuList className="flex gap-4">
          <NavigationMenuItem>
            <Link href={"/"} legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} hover:text-primary focus:bg-none hover:bg-none`}
              >
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={"/about"} legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} hover:text-primary focus:bg-none hover:bg-none`}
              >
                About us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-sm font-medium">
              Services
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex flex-col gap-2">
                <Link href={"/services/lister"} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} hover:text-primary`}
                  >
                    For Listing Property
                  </NavigationMenuLink>
                </Link>
                <Link href={"/services/tenant"} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} hover:text-primary`}
                  >
                    For Searching Property
                  </NavigationMenuLink>
                </Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button
              variant={"outline"}
              className="rounded-full border-primary text-primary hover:text-primary/90 hover:bg-transparent"
              asChild
            >
              <Link href={"/#contact"}>Contact Us</Link>
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Sidebar />
    </nav>
  );
}
