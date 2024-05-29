"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger
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
import { List, XCircle } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import main_logo from "../../public/main_logo.png";


function Sidebar() {
  return (
    <Drawer direction="right">
      <DrawerTrigger className="cursor-pointer md:hidden">
        <List size={24} />
      </DrawerTrigger>
      <DrawerContent className="h-full">
        <DrawerHeader className="flex justify-between items-center ml-auto">
          {/* <DrawerTitle>Are you absolutely sure?</DrawerTitle> */}
          {/* <DrawerDescription>This action cannot be undone.</DrawerDescription> */}

          <DrawerClose>
            <XCircle size={24} />
          </DrawerClose>
        </DrawerHeader>
        <DrawerFooter>{/* <Button>Submit</Button> */}</DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default function Navbar() {
  return (
    <nav className="flex justify-between px-6 py-4">
      <Link href={"/"} className="flex items-center gap-4">
        <Image src={main_logo} alt="logo" width={36} height={36} />
        <p className="text-md font-semibold">Habiiito</p>
      </Link>
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="gap-4">
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
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* <NavigationMenuItem>
            <Link href={"/"} legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} hover:text-primary focus:bg-none hover:bg-none`}
              >
                About Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem> */}
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
