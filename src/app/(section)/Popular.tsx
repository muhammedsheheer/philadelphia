import { Button } from "@/components/ui/button";
import { Circle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Popular: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#000] pb-12 lg:pb-24">
      <div className="flex flex-col gap-4 lg:gap-8">
        <div className="relative w-full">
          <div className="absolute left-[15%] top-[15%]">
            <Image
              src={"/images/home/popular/chickenr.png"}
              width={1687}
              height={924}
              alt="logo"
              className="w-16 md:w-28 lg:w-64"
            />
          </div>
          <div className="absolute right-[10%] top-[15%]">
            <Image
              src={"/images/home/popular/chickenl.png"}
              width={1687}
              height={924}
              alt="logo"
              className="w-20 md:w-36 lg:w-80"
            />
          </div>
          <h1 className="pl-3 font-bebas text-[21vw] font-[400] uppercase text-[#FF8A00] lg:pl-8">
            Most Popular
          </h1>
        </div>
        <div className="relative grid w-full gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
          <div className="absolute inset-0 z-10 hidden items-center justify-center lg:flex">
            <Link href={"/menu"}>
              <Button className="flex flex-row gap-2 rounded-full bg-[#DB0C10] px-7 py-7 font-roboto text-sm font-[400] uppercase text-[#fff]">
                <Circle className="w-2 fill-white" />
                Order Now
              </Button>
            </Link>
          </div>
          <div className="relative w-full px-8 lg:px-0">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col gap-4">
                <Image
                  src={"/images/home/popular/image1.png"}
                  width={1687}
                  height={924}
                  alt="logo"
                  className="w-48 lg:w-56"
                />
                <h6 className="text-center font-bebas text-xl font-[400] uppercase text-[#FF8A00] lg:text-3xl">
                  Meals
                </h6>
              </div>
            </div>
            <Image
              src={"/images/home/popular/frame.png"}
              width={1687}
              height={924}
              alt="logo"
              className="h-[300px] w-full lg:h-[350px]"
            />
          </div>
          <div className="relative w-full px-8 lg:px-0">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col gap-4">
                <Image
                  src={"/images/home/popular/image2.png"}
                  width={1687}
                  height={924}
                  alt="logo"
                  className="w-48 lg:w-56"
                />
                <h6 className="text-center font-bebas text-xl font-[400] uppercase text-[#FF8A00] lg:text-3xl">
                  BUcket Meals{" "}
                </h6>
              </div>
            </div>
            <Image
              src={"/images/home/popular/frame.png"}
              width={1687}
              height={924}
              alt="logo"
              className="h-[300px] w-full md:h-[300px] lg:h-[350px]"
            />
          </div>
          <div className="relative w-full px-8 lg:px-0">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col gap-4">
                <Image
                  src={"/images/home/popular/image3.png"}
                  width={1687}
                  height={924}
                  alt="logo"
                  className="w-48 lg:w-56"
                />
                <h6 className="text-center font-bebas text-xl font-[400] uppercase text-[#FF8A00] lg:text-3xl">
                  MaiN
                </h6>
              </div>
            </div>
            <Image
              src={"/images/home/popular/frame.png"}
              width={1687}
              height={924}
              alt="logo"
              className="h-[300px] w-full md:h-[300px] lg:h-[350px]"
            />
          </div>
          <div className="relative w-full px-8 lg:px-0">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col gap-4">
                <Image
                  src={"/images/home/popular/image4.png"}
                  width={1687}
                  height={924}
                  alt="logo"
                  className="w-48 lg:w-56"
                />
                <h6 className="text-center font-bebas text-xl font-[400] uppercase text-[#FF8A00] lg:text-3xl">
                  Burgers
                </h6>
              </div>
            </div>
            <Image
              src={"/images/home/popular/frame.png"}
              width={1687}
              height={924}
              alt="logo"
              className="h-[300px] w-full md:h-[300px] lg:h-[350px]"
            />
          </div>
          <div className="flex justify-center md:hidden">
            <Link href={"/menu"}>
              <Button className="flex flex-row gap-2 rounded-full bg-[#DB0C10] px-7 py-7 font-roboto text-sm font-[400] uppercase text-[#fff]">
                <Circle className="w-2 fill-white" />
                Order Now
              </Button>
            </Link>
          </div>
          <div className="relative w-full px-8 lg:px-0">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col gap-4">
                <Image
                  src={"/images/home/popular/image1.png"}
                  width={1687}
                  height={924}
                  alt="logo"
                  className="w-48 lg:w-56"
                />
                <h6 className="text-center font-bebas text-xl font-[400] uppercase text-[#FF8A00] lg:text-3xl">
                  Meals
                </h6>
              </div>
            </div>
            <Image
              src={"/images/home/popular/frame.png"}
              width={1687}
              height={924}
              alt="logo"
              className="h-[300px] w-full lg:h-[350px]"
            />
          </div>
          <div className="relative w-full px-8 lg:px-0">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col gap-4">
                <Image
                  src={"/images/home/popular/image2.png"}
                  width={1687}
                  height={924}
                  alt="logo"
                  className="w-48 lg:w-56"
                />
                <h6 className="text-center font-bebas text-xl font-[400] uppercase text-[#FF8A00] lg:text-3xl">
                  BUcket Meals{" "}
                </h6>
              </div>
            </div>
            <Image
              src={"/images/home/popular/frame.png"}
              width={1687}
              height={924}
              alt="logo"
              className="h-[300px] w-full md:h-[300px] lg:h-[350px]"
            />
          </div>
          <div className="relative w-full px-8 lg:px-0">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col gap-4">
                <Image
                  src={"/images/home/popular/image3.png"}
                  width={1687}
                  height={924}
                  alt="logo"
                  className="w-48 lg:w-56"
                />
                <h6 className="text-center font-bebas text-xl font-[400] uppercase text-[#FF8A00] lg:text-3xl">
                  MaiN
                </h6>
              </div>
            </div>
            <Image
              src={"/images/home/popular/frame.png"}
              width={1687}
              height={924}
              alt="logo"
              className="h-[300px] w-full md:h-[300px] lg:h-[350px]"
            />
          </div>
          <div className="relative w-full px-8 lg:px-0">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col gap-4">
                <Image
                  src={"/images/home/popular/image4.png"}
                  width={1687}
                  height={924}
                  alt="logo"
                  className="w-48 lg:w-56"
                />
                <h6 className="text-center font-bebas text-xl font-[400] uppercase text-[#FF8A00] lg:text-3xl">
                  Burgers
                </h6>
              </div>
            </div>
            <Image
              src={"/images/home/popular/frame.png"}
              width={1687}
              height={924}
              alt="logo"
              className="h-[300px] w-full md:h-[300px] lg:h-[350px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;
