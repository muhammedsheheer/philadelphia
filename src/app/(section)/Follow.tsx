import Image from "next/image";
import Link from "next/link";
import React from "react";

const Follow: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#000] px-8 py-12 lg:h-screen lg:px-[50px] lg:py-24">
      <div className="absolute inset-0 z-10 hidden items-center justify-center lg:flex">
        <Link href={"/"} target="_blank">
          <h2 className="text-center font-bebas text-9xl font-[400] uppercase text-[#FF8A00]">
            Follow <br /> on insta
          </h2>
        </Link>
      </div>
      <div className="absolute left-[150px] top-[25%] hidden lg:block">
        <Image
          src={"/images/home/follow/image1.png"}
          width={344}
          height={61}
          alt="logo"
          className="h-[250px] w-full object-cover"
        />
      </div>
      <div className="absolute left-[30%] top-[15%] hidden lg:block">
        <Image
          src={"/images/home/follow/image2.png"}
          width={344}
          height={61}
          alt="logo"
          className="h-[200px] w-full object-cover"
        />
      </div>
      <div className="absolute right-[5%] top-[15%] hidden lg:block">
        <Image
          src={"/images/home/follow/image3.png"}
          width={344}
          height={61}
          alt="logo"
          className="h-[310px] w-full object-cover"
        />
      </div>
      <div className="absolute bottom-[5%] right-[5%] hidden lg:block">
        <Image
          src={"/images/home/follow/image6.png"}
          width={344}
          height={61}
          alt="logo"
          className="h-[200px] w-full object-cover"
        />
      </div>
      <div className="absolute bottom-[5%] right-[25%] hidden lg:block">
        <Image
          src={"/images/home/follow/image5.png"}
          width={344}
          height={61}
          alt="logo"
          className="h-[250px] w-full object-cover"
        />
      </div>
      <div className="absolute bottom-[10%] left-[15%] hidden lg:block">
        <Image
          src={"/images/home/follow/image4.png"}
          width={344}
          height={61}
          alt="logo"
          className="h-[200px] w-full object-cover"
        />
      </div>
      <div className="absolute bottom-[10%] left-[45%] hidden lg:block">
        <Link href={"/"} target="_blank">
          <Image
            src={"/images/home/follow/text.png"}
            width={344}
            height={61}
            alt="logo"
            className="h-[150px] w-full object-cover"
          />
        </Link>
      </div>
      <div className="flex flex-col gap-4 lg:hidden">
        <h2 className="text-center font-bebas text-6xl font-[400] uppercase text-[#FF8A00]">
          Follow <br /> on insta
        </h2>
        <Image
          src={"/images/home/follow/image1.png"}
          width={344}
          height={61}
          alt="logo"
          className="h-[300px] w-full object-cover"
        />
        <Image
          src={"/images/home/follow/image2.png"}
          width={344}
          height={61}
          alt="logo"
          className="h-[300px] w-full object-cover"
        />
        <Image
          src={"/images/home/follow/image3.png"}
          width={344}
          height={61}
          alt="logo"
          className="h-[300px] w-full object-cover"
        />
        <Link href={"/"} target="_blank"></Link>
        <p className="text-center font-roboto text-lg font-[400] lowercase text-[#FF8A00]">
          @PHILADELPHIA FRIED CHICKEN
        </p>
        <Image
          src={"/images/home/follow/image4.png"}
          width={344}
          height={61}
          alt="logo"
          className="h-[300px] w-full object-cover"
        />
        <Image
          src={"/images/home/follow/image5.png"}
          width={344}
          height={61}
          alt="logo"
          className="h-[300px] w-full object-cover"
        />
        <Image
          src={"/images/home/follow/image6.png"}
          width={344}
          height={61}
          alt="logo"
          className="h-[300px] w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Follow;
