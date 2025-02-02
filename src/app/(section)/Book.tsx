import { Button } from "@/components/ui/button";
import { Circle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Book: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#000] px-4 py-12 sm:px-[10px] md:px-[50px] lg:px-[80px] lg:py-32 2xl:px-[160px]">
      <div className="absolute bottom-44 right-20">
        <Image
          src={"/images/home/book/chickenb.png"}
          width={344}
          height={61}
          alt="logo"
          className="w-48"
        />
      </div>
      <div className="absolute bottom-20 right-0 hidden lg:block">
        <Image
          src={"/images/home/book/star.png"}
          width={344}
          height={61}
          alt="logo"
          className="w-48"
        />
      </div>
      <div className="absolute bottom-28 left-[30%] hidden lg:block">
        <Image
          src={"/images/home/book/chicken.png"}
          width={344}
          height={61}
          alt="logo"
          className="h-[400px] w-full"
        />
      </div>
      <div className="absolute -bottom-72 -left-14 hidden lg:block">
        <Image
          src={"/images/home/book/bg.png"}
          width={344}
          height={61}
          alt="logo"
          className="h-[1300px] w-[1300px]"
        />
      </div>
      <div className="flex w-full flex-col lg:flex-row lg:justify-between">
        <div className="relative">
          <div className="absolute left-20 top-20 hidden lg:block">
            <Image
              src={"/images/home/book/chickenl.png"}
              width={344}
              height={61}
              alt="logo"
              className="w-40"
            />
          </div>
          <h1 className="font-bebas text-8xl font-[400] uppercase text-[#FF8A00] lg:text-[12vw] lg:leading-[150px]">
            book <br /> your <br /> SPOT
          </h1>
        </div>
        <div className="lg:hidden">
          <Image
            src={"/images/home/book/chicken.png"}
            width={344}
            height={61}
            alt="logo"
            className="h-full w-full"
          />
        </div>
        <div className="flex flex-col gap-4 lg:gap-6">
          <p className="w-full max-w-[400px] from-neutral-400 font-roboto text-sm uppercase leading-[130%] text-[#FF8A00] lg:text-base">
            Craving our crispy, golden perfection? Skip the wait and secure your
            table today! Whether it’s a family feast, a casual hangout, or a
            special celebration, we’ve got the perfect spot for you.
          </p>
          <div>
            <Link href={"/table-booking"}>
              <Button className="flex flex-row gap-2 rounded-full bg-[#DB0C10] px-7 py-7 font-roboto text-sm font-[400] uppercase text-[#fff]">
                <Circle className="w-2 fill-white" />
                Book Table
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
