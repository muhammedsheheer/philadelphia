import { Button } from "@/components/ui/button";
import { Circle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const United: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#000] px-2 py-12 lg:h-[150vh] lg:px-4 lg:py-24">
      <div className="absolute bottom-[10%] left-[140px] hidden lg:block">
        <Image
          src={"/images/home/united/logo.png"}
          width={1687}
          height={924}
          alt="logo"
          className="w-52"
        />
      </div>
      <div className="absolute bottom-[10%] left-[27%] hidden lg:block">
        <Image
          src={"/images/home/united/chicken.png"}
          width={1687}
          height={924}
          alt="logo"
          className="w-[550px]"
        />
      </div>
      <div className="absolute bottom-[20%] right-[140px] hidden flex-col gap-6 lg:flex">
        <p className="w-full max-w-[420px] from-neutral-400 font-roboto text-sm uppercase leading-[130%] text-[#FF8A00] lg:text-base">
          Welcome to Philadelphia Fried Chicken—where bold flavors, quality, and
          tradition come together! From our roots in Manchester to our newest
          branch in Blackburn, we’re bringing the same mouthwatering fried
          chicken, burgers, and wraps you love. With passion in every bite and
          service that feels like home, we’re excited to serve you. Philadelphia
          Fried Chicken – Where Flavor Meets Tradition.
        </p>
        <Link href={"/"}>
          <Button className="flex flex-row gap-2 rounded-full bg-[#DB0C10] px-7 py-7 font-roboto text-sm font-[400] uppercase text-[#fff]">
            <Circle className="w-2 fill-white" />
            Order Now
          </Button>
        </Link>
      </div>
      <div className="h-full w-full rounded-2xl border border-[#8B0D10] bg-[#8B0D10] px-4 py-12 md:px-[50px] lg:rounded-3xl lg:px-[140px] lg:py-24">
        <div className="flex flex-col gap-8">
          <h1 className="font-bebas text-7xl font-[400] uppercase text-[#FF8A00] lg:text-[180px] lg:leading-[145px]">
            UNITED <br />
            WE SERVE!
          </h1>
          <div className="lg:hidden">
            <div className="flex flex-col gap-5">
              <p className="w-full max-w-[400px] from-neutral-400 font-roboto text-sm uppercase leading-[130%] text-[#FF8A00] lg:text-base">
                Welcome to Philadelphia Fried Chicken—where bold flavors,
                quality, and tradition come together! From our roots in
                Manchester to our newest branch in Blackburn, we’re bringing the
                same mouthwatering fried chicken, burgers, and wraps you love.
                With passion in every bite and service that feels like home,
                we’re excited to serve you. Philadelphia Fried Chicken – Where
                Flavor Meets Tradition.
              </p>
              <Link href={"/"}>
                <Button className="flex flex-row gap-2 rounded-full bg-[#DB0C10] px-7 py-7 font-roboto text-sm font-[400] uppercase text-[#fff]">
                  <Circle className="w-2 fill-white" />
                  Order Now
                </Button>
              </Link>
              <div className="flex flex-col items-center justify-center gap-5">
                <Image
                  src={"/images/home/united/chicken.png"}
                  width={1687}
                  height={924}
                  alt="logo"
                  className="w-60"
                />
                <Image
                  src={"/images/home/united/logo.png"}
                  width={1687}
                  height={924}
                  alt="logo"
                  className="w-40"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default United;
