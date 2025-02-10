import { Button } from "@/components/ui/button";
import { Circle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative flex h-screen w-full items-center bg-[#FF8A00]">
      <div className="absolute bottom-4 right-4 z-10 lg:bottom-12 lg:right-20">
        <Image
          src={"/images/home/hero/chicken.png"}
          width={1687}
          height={924}
          alt="logo"
          className="h-full w-full object-cover lg:w-40"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0 lg:bottom-4 lg:left-4 lg:right-4 lg:top-4 lg:hidden">
        <Image
          src={"/images/home/hero/bg.png"}
          width={1687}
          height={924}
          alt="logo"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0 hidden lg:bottom-4 lg:left-4 lg:right-4 lg:top-4 lg:block">
        <Image
          src={"/images/home/hero/bg.png"}
          width={1687}
          height={924}
          alt="logo"
          className="h-full w-full"
        />
      </div>
      <div className="relative flex flex-col gap-4 px-4 md:px-[50px] lg:gap-8 lg:px-[80px] 2xl:px-[140px]">
        <p className="font-roboto text-base font-[400] uppercase leading-[130%] text-[#fff] lg:text-lg">
          Philadelphia Fried Chicken <br />
          Crispy, Juicy, Irresistible Flavor!
        </p>
        <Image
          src={"/images/home/hero/fried.png"}
          width={1687}
          height={924}
          alt="logo"
          className="h-full w-full"
        />
        <div>
          <Link href={"/menu"}>
            <Button className="flex flex-row gap-2 rounded-full bg-[#DB0C10] px-7 py-7 font-roboto text-sm font-[400] uppercase text-[#fff]">
              <Circle className="w-2 fill-white" />
              View Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
