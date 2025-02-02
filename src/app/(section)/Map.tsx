import { Navigation } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Map: React.FC = () => {
  return (
    <section className="h-full w-full rounded-[30px] border-[#DB0C10] bg-[#DB0C10] px-4 py-12 sm:px-[10px] md:px-[50px] lg:px-[80px] lg:py-24 2xl:px-[140px]">
      <div className="flex flex-col-reverse items-center gap-8 lg:flex-row lg:gap-10">
        <div className="w-full lg:w-1/2">
          <iframe
            className="h-[50vh] w-full rounded-full grayscale invert lg:h-[80vh] lg:w-[75%]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2372.4721844649225!2d-2.249155623401593!3d53.5136234723383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb039a682f0c9%3A0x941ba5ac44622b0e!2sPhiladelphia%20Fried%20Chicken!5e0!3m2!1sen!2sin!4v1738489132537!5m2!1sen!2sin"
          ></iframe>
        </div>
        <div className="flex flex-col gap-4 lg:gap-8">
          <h1 className="font-bebas text-6xl font-[400] uppercase text-[#FF8A00] lg:text-9xl">
            Let's <br />
            connect.
          </h1>
          <div className="flex flex-row gap-10 lg:gap-16">
            <Link href={"/"} target="_blank">
              <p className="font-bebas text-lg font-[400] uppercase text-[#FF8A00] lg:text-xl">
                15 Bury Old Rd, Manchester, <br /> Salford M7 4QJ, United
                Kingdom
              </p>
            </Link>
            <Link
              href={"/"}
              target="_blank"
              className="flex items-center justify-center rounded-full bg-[#FF8A00] px-4 py-1"
            >
              <Navigation className="fill-[#db0c10] text-center text-[#DB0C10]" />
            </Link>
          </div>
          <Link href={"tel:+441617406969"}>
            <p className="font-bebas text-lg font-[400] uppercase text-[#FF8A00] lg:text-xl">
              +441617406969{" "}
            </p>
          </Link>
          <p className="font-bebas text-lg font-[400] uppercase text-[#FF8A00] lg:text-xl">
            Opening hours <br /> Thursday - Wednesday : 11 am–1 am
          </p>
        </div>
      </div>
    </section>
  );
};

export default Map;
