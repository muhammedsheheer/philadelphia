import { Button } from "@/components/ui/button";
import { Circle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Made: React.FC = () => {
  return (
    <section className="h-screen w-full bg-[#000] lg:h-[130vh]">
      <div
        className="relative flex h-full w-full px-4 py-12 md:px-[50px] lg:items-end lg:justify-end lg:px-[140px] lg:py-40"
        style={{
          backgroundImage: "url('/images/home/made/bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute left-[250px] top-12 hidden lg:block">
          <h1 className="w-full font-bebas text-6xl font-[400] uppercase text-[#FF8A00] lg:text-9xl">
            Made Fresh,
          </h1>
        </div>
        <div className="absolute left-[250px] top-40 hidden lg:block">
          <h1 className="w-full font-bebas text-6xl font-[400] uppercase text-[#FF8A00] lg:text-9xl">
            Fried To Perfection
          </h1>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col lg:hidden">
            <h1 className="w-full font-bebas text-6xl font-[400] uppercase text-[#FF8A00] lg:text-9xl">
              Made Fresh,
            </h1>
            <h1 className="w-full font-bebas text-6xl font-[400] uppercase text-[#FF8A00] lg:text-9xl">
              Fried To Perfection
            </h1>
          </div>
          <div className="flex flex-col gap-4 lg:items-end lg:justify-end lg:pb-20">
            <p className="w-full max-w-[420px] from-neutral-400 font-roboto text-sm uppercase leading-[130%] text-[#FF8A00] lg:text-base">
              From hand-breaded crispy coating to juicy, flavorful bites, every
              piece of our fried chicken is made with care and passion. Taste
              the crunch, savor the flavor!
            </p>
            <div>
              <Link href={"/"}>
                <Button className="flex flex-row gap-2 rounded-full bg-[#FF8A00] px-7 py-7 font-roboto text-sm font-[400] uppercase text-[#fff]">
                  <Circle className="w-2 fill-white" />
                  Order Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Made;
