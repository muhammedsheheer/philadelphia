"use client";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";
import { Button } from "@/components/ui/button";
import { Clock, Navigation, Phone } from "lucide-react";

const Footer = ({}) => {
  return (
    <footer className="h-full w-full rounded-tl-[50px] rounded-tr-[50px] bg-[#FF8A00] pt-12">
      <div className="flex flex-col gap-4 lg:gap-8">
        <div className="flex justify-center">
          <Image
            src={"/images/home/hero/logo.svg"}
            width={344}
            height={61}
            alt="logo"
            className="w-32 lg:w-40"
          />
        </div>
        <div className="flex flex-col items-center gap-4 px-4 lg:flex-row lg:items-start lg:justify-between lg:px-[120px]">
          <div className="flex flex-col gap-8 lg:gap-16">
            <div className="flex flex-row items-center gap-4">
              <div className="flex items-center justify-center rounded-full bg-[#DB0C10] px-3 py-3">
                <Navigation className="text-white" />
              </div>
              <Link
                href={"/"}
                target="_blank"
                className="font-bebas text-base font-[400] uppercase text-[#0d0d0d] lg:text-lg"
              >
                <span>
                  15 Bury Old Rd, Manchester, <br /> Salford M7 4QJ, United
                  Kingdom
                </span>
              </Link>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div className="flex items-center justify-center rounded-full bg-[#DB0C10] px-3 py-3">
                <Phone className="text-white" />
              </div>
              <Link
                href={"tel:+441617406969"}
                target="_blank"
                className="font-bebas text-base font-[400] uppercase text-[#0d0d0d] lg:text-lg"
              >
                <span>+441617406969</span>
              </Link>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div className="flex items-center justify-center rounded-full bg-[#DB0C10] px-3 py-3">
                <Clock className="text-white" />
              </div>
              <Link
                href={"/"}
                target="_blank"
                className="font-bebas text-base font-[400] uppercase text-[#0d0d0d] lg:text-lg"
              >
                <span>
                  Opening hours <br /> Thursday - Wednesday : 11 am–1 am
                </span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 lg:mr-[8%] lg:gap-6">
            <Link href={"/"}>
              <Button className="rounded-full bg-[#DB0C10] px-5 py-4 text-center font-bebas text-lg font-[400] uppercase text-[#fff] lg:text-xl">
                Home
              </Button>
            </Link>
            <Link href={"/"}>
              <Button className="rounded-full bg-[#DB0C10] px-5 py-4 text-center font-bebas text-lg font-[400] uppercase text-[#fff] lg:text-xl">
                About us
              </Button>
            </Link>
            <Link href={"/"}>
              <Button className="rounded-full bg-[#DB0C10] px-5 py-4 text-center font-bebas text-lg font-[400] uppercase text-[#fff] lg:text-xl">
                Booking
              </Button>
            </Link>
            <Link href={"/"}>
              <Button className="rounded-full bg-[#DB0C10] px-5 py-4 text-center font-bebas text-lg font-[400] uppercase text-[#fff] lg:text-xl">
                Contact us
              </Button>
            </Link>
            <Link href={"/"}>
              <Button className="rounded-full bg-[#DB0C10] px-5 py-4 text-center font-bebas text-lg font-[400] uppercase text-[#fff] lg:text-xl">
                Menu
              </Button>
            </Link>
          </div>
          <div className="flex items-center lg:mt-10">
            <Image
              src={"/images/home/hero/logo.png"}
              width={344}
              height={61}
              alt="logo"
              className="w-32 lg:w-40"
            />
          </div>
        </div>
        <div className="flex flex-row justify-center gap-4">
          <Link
            href={"/"}
            target="_blank"
            className="rounded-full bg-[#DB0C10] px-3 py-3"
          >
            <Icons.unknown className="mt-2 w-10 text-white" />
          </Link>
          <Link
            href={"/"}
            target="_blank"
            className="rounded-full bg-[#DB0C10] px-3 py-3"
          >
            <Icons.google className="w-10 text-white" />
          </Link>
          <Link
            href={"/"}
            target="_blank"
            className="rounded-full bg-[#DB0C10] px-3 py-3"
          >
            <Icons.instagram className="w-10 text-white" />
          </Link>
          <Link
            href={"/"}
            target="_blank"
            className="rounded-full bg-[#DB0C10] px-3 py-3"
          >
            <Icons.facebook className="w-10 text-white" />
          </Link>
        </div>
        <div>
          <div className="border-t-[rgba(0, 0, 0, 0.25)] border-t-[1px]" />
          <div className="flex flex-col justify-center px-8 py-6 lg:flex-row lg:justify-between lg:px-28">
            <p className="text-center font-bebas text-sm font-[400] text-[#000] lg:text-base">
              © All Rights Reserved by PHILADELPHIA FRIED CHICKEN
            </p>
            <Link
              className="text-center font-bebas text-sm font-[400] text-[#000] lg:text-base"
              href={"/"}
              target="_blank"
            >
              Powerd by foodo
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
