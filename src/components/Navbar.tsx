"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger
} from "@/components/ui/drawer";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { List, XCircle } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import main_logo from "../../public/main_logo.png";

function Sidebar() {
  return (
    <Drawer direction="right" >
      <DrawerTrigger className="cursor-pointer md:hidden">
        <List size={24} weight="fill"  />
      </DrawerTrigger>
      <DrawerContent className=" flex flex-col h-full bg-white p-4">
        <DrawerHeader className="flex justify-between items-center">
          <DrawerClose>
            <XCircle size={24} />
          </DrawerClose>
        </DrawerHeader>
        <NavigationMenu>
          <NavigationMenuList className="flex flex-col gap-4 mt-8">
            <NavigationMenuItem>
              <Link href={"https://docs.google.com/forms/d/1g4fQVkfGKrNvYk2ivsDyPSmJ9UGxbnZz-s4bgDdUkE4/edit?ts=66a71a44"} legacyBehavior passHref>
                <NavigationMenuLink className="text-lg hover:text-primary">
                  Look for a Flat
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={"https://docs.google.com/forms/d/1pRHzK-2YZ7s005i1xCfjjY-3RdSCCH7AJxvsmpeM4Zs/edit?ts=66a71a77"} legacyBehavior passHref>
                <NavigationMenuLink className="text-lg hover:text-primary">
                  Look for a Flatmate
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={"/about"} legacyBehavior passHref>
                <NavigationMenuLink className="text-lg hover:text-primary">
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </DrawerContent>
    </Drawer>
  );
}

export default function Navbar() {
  return (
    <nav className="flex flex-row items-center px-6 py-4 md:px-12 md:py-6 bg-white shadow-md w-full h-auto">
      <Link href={"/"} className="flex items-center gap-2">
        <Image src={main_logo} alt="logo" width={120} height={60} unoptimized />
      </Link>
      <NavigationMenu className="ml-auto transition-all duration-300 transform  hidden md:flex">
        <NavigationMenuList className="flex gap-4">
          <NavigationMenuItem>
            <Link href={"https://docs.google.com/forms/d/1g4fQVkfGKrNvYk2ivsDyPSmJ9UGxbnZz-s4bgDdUkE4/edit?ts=66a71a4"} legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} hover:text-primary focus:bg-none hover:scale-105 hover:bg-none`}
              >
                Look for a Flat
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={"https://docs.google.com/forms/d/1pRHzK-2YZ7s005i1xCfjjY-3RdSCCH7AJxvsmpeM4Zs/edit?ts=66a71a77"} legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} hover:text-primary focus:bg-none hover:scale-105 hover:bg-none`}
              >
                Look for a Flatmate
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={"/about"} legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} hover:text-primary focus:bg-none hover:scale-105 hover:bg-none`}
              >
                About Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Sidebar />
    </nav>
  );
}

