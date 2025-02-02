"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Sidebar from "./SideBar";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Circle, Dot } from "lucide-react";

interface NavbarProps {
  position?: "static" | "fixed" | "absolute";
}

const Navbar: React.FC<NavbarProps> = ({ position = "static" }) => {
  const pathname = usePathname();

  return (
    <section
      className={`${position} top-5 z-50 flex h-[10vh] w-full items-center bg-transparent p-4 px-4 transition-all duration-300 ease-in-out md:px-[50px] lg:top-9 lg:px-[80px]`}
    >
      <div className="flex w-full items-center justify-between">
        <Link href={"/"}>
          <Image
            src={"/images/home/hero/logo.svg"}
            width={344}
            height={61}
            alt="logo"
            className={pathname !== "/" ? "w-24 text-white" : "w-32 lg:w-40"}
            style={
              pathname !== "/" ? { filter: "brightness(0) invert(1)" } : {}
            }
          />
        </Link>

        <div className="flex flex-row items-center gap-2">
          <div className="hidden flex-row gap-2 lg:flex">
            <Link href={"/"}>
              <Button className="flex flex-row items-center justify-center gap-2 rounded-full bg-[#fff] px-6 py-6 text-center font-bebas text-base font-[400] uppercase text-[#040404]">
                <Circle className="w-2 fill-black" /> Order Now
              </Button>
            </Link>
            <Link href={"/"}>
              <Button className="rounded-full bg-[#fff] px-3 py-6">
                <Image
                  src={"/images/home/hero/bag.svg"}
                  width={32}
                  height={32}
                  alt="bag"
                />
              </Button>
            </Link>
          </div>
          <div className="">
            <Sidebar>
              <Button
                variant="ghost"
                className="flex rounded-full bg-red-600 px-3 py-6 text-primary"
              >
                <div className="flex flex-row gap-2">
                  <EqualizerIcon />
                </div>
              </Button>
            </Sidebar>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

const EqualizerIcon: React.FC = () => {
  return (
    <div className="equalizer-icon rotate">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};
