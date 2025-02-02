import { Button } from "@/components/ui/button";
import { Circle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Menu: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#000] px-4 py-12 md:px-[50px] lg:px-[80px] lg:py-24 2xl:px-[140px]">
      <div className="flex flex-col gap-6 lg:gap-8">
        <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:items-start lg:justify-between">
          <h1 className="font-bebas text-6xl font-[400] uppercase text-[#FF8A00] lg:text-9xl">
            our menu
          </h1>
          <div className="">
            <Link href={"/menu"}>
              <Button className="flex flex-row gap-2 rounded-full bg-[#DB0C10] px-7 py-7 font-roboto text-sm font-[400] uppercase text-[#fff] lg:mt-6">
                <Circle className="w-2 fill-white" />
                View Menu
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex w-full flex-col gap-4 lg:flex-row lg:gap-10">
          <div className="flex w-full flex-col gap-4 lg:w-1/2 lg:gap-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex w-full flex-row items-center justify-center gap-4 px-2">
                  <div>
                    <Image
                      src={"/images/home/popular/image1.png"}
                      width={344}
                      height={61}
                      alt="logo"
                      className="w-32 object-cover lg:w-36"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-row justify-between">
                      <h3 className="font-bebas text-lg font-[400] uppercase text-[#FF8A00] lg:text-xl">
                        Adana Kebab
                      </h3>
                      <h3 className="font-bebas text-lg font-[400] uppercase text-[#FF8A00] lg:text-xl">
                        $13.95
                      </h3>
                    </div>
                    <p className="w-full font-roboto text-sm font-[400] text-[#8F6D45] lg:w-[350px] lg:text-base">
                      Charcoal grilled, skewered minced lamb with onions,
                      peppers, parsley and herbs,{" "}
                    </p>
                  </div>
                </div>
              </div>
              <Image
                src={"/images/home/popular/bg.png"}
                width={344}
                height={61}
                alt="logo"
                className="h-[100px] w-full lg:h-full"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex w-full flex-row items-center justify-center gap-4 px-2">
                  <div>
                    <Image
                      src={"/images/home/popular/image1.png"}
                      width={344}
                      height={61}
                      alt="logo"
                      className="w-32 object-cover lg:w-36"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-row justify-between">
                      <h3 className="font-bebas text-lg font-[400] uppercase text-[#FF8A00] lg:text-xl">
                        Adana Kebab
                      </h3>
                      <h3 className="font-bebas text-lg font-[400] uppercase text-[#FF8A00] lg:text-xl">
                        $13.95
                      </h3>
                    </div>
                    <p className="w-full font-roboto text-sm font-[400] text-[#8F6D45] lg:w-[350px] lg:text-base">
                      Charcoal grilled, skewered minced lamb with onions,
                      peppers, parsley and herbs,{" "}
                    </p>
                  </div>
                </div>
              </div>
              <Image
                src={"/images/home/popular/bg.png"}
                width={344}
                height={61}
                alt="logo"
                className="h-[100px] w-full lg:h-full"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex w-full flex-row items-center justify-center gap-4 px-2">
                  <div>
                    <Image
                      src={"/images/home/popular/image1.png"}
                      width={344}
                      height={61}
                      alt="logo"
                      className="w-32 object-cover lg:w-36"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-row justify-between">
                      <h3 className="font-bebas text-lg font-[400] uppercase text-[#FF8A00] lg:text-xl">
                        Adana Kebab
                      </h3>
                      <h3 className="font-bebas text-lg font-[400] uppercase text-[#FF8A00] lg:text-xl">
                        $13.95
                      </h3>
                    </div>
                    <p className="w-full font-roboto text-sm font-[400] text-[#8F6D45] lg:w-[350px] lg:text-base">
                      Charcoal grilled, skewered minced lamb with onions,
                      peppers, parsley and herbs,{" "}
                    </p>
                  </div>
                </div>
              </div>
              <Image
                src={"/images/home/popular/bg.png"}
                width={344}
                height={61}
                alt="logo"
                className="h-[100px] w-full lg:h-full"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex w-full flex-row items-center justify-center gap-4 px-2">
                  <div>
                    <Image
                      src={"/images/home/popular/image1.png"}
                      width={344}
                      height={61}
                      alt="logo"
                      className="w-32 object-cover lg:w-36"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-row justify-between">
                      <h3 className="font-bebas text-lg font-[400] uppercase text-[#FF8A00] lg:text-xl">
                        Adana Kebab
                      </h3>
                      <h3 className="font-bebas text-lg font-[400] uppercase text-[#FF8A00] lg:text-xl">
                        $13.95
                      </h3>
                    </div>
                    <p className="w-full font-roboto text-sm font-[400] text-[#8F6D45] lg:w-[350px] lg:text-base">
                      Charcoal grilled, skewered minced lamb with onions,
                      peppers, parsley and herbs,{" "}
                    </p>
                  </div>
                </div>
              </div>
              <Image
                src={"/images/home/popular/bg.png"}
                width={344}
                height={61}
                alt="logo"
                className="h-[100px] w-full lg:h-full"
              />
            </div>
          </div>

          <div className="flex w-full flex-col gap-4 lg:w-1/2 lg:gap-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex w-full flex-row items-center justify-center gap-4 px-2">
                  <div>
                    <Image
                      src={"/images/home/popular/image1.png"}
                      width={344}
                      height={61}
                      alt="logo"
                      className="w-32 object-cover lg:w-36"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-row justify-between">
                      <h3 className="font-bebas text-lg font-[400] uppercase text-[#FF8A00] lg:text-xl">
                        Adana Kebab
                      </h3>
                      <h3 className="font-bebas text-lg font-[400] uppercase text-[#FF8A00] lg:text-xl">
                        $13.95
                      </h3>
                    </div>
                    <p className="w-full font-roboto text-sm font-[400] text-[#8F6D45] lg:w-[350px] lg:text-base">
                      Charcoal grilled, skewered minced lamb with onions,
                      peppers, parsley and herbs,{" "}
                    </p>
                  </div>
                </div>
              </div>
              <Image
                src={"/images/home/popular/bg.png"}
                width={344}
                height={61}
                alt="logo"
                className="h-[100px] w-full lg:h-full"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex w-full flex-row items-center justify-center gap-4 px-2">
                  <div>
                    <Image
                      src={"/images/home/popular/image1.png"}
                      width={344}
                      height={61}
                      alt="logo"
                      className="w-32 object-cover lg:w-36"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-row justify-between">
                      <h3 className="font-bebas text-lg font-[400] uppercase text-[#FF8A00] lg:text-xl">
                        Adana Kebab
                      </h3>
                      <h3 className="font-bebas text-lg font-[400] uppercase text-[#FF8A00] lg:text-xl">
                        $13.95
                      </h3>
                    </div>
                    <p className="w-full font-roboto text-sm font-[400] text-[#8F6D45] lg:w-[350px] lg:text-base">
                      Charcoal grilled, skewered minced lamb with onions,
                      peppers, parsley and herbs,{" "}
                    </p>
                  </div>
                </div>
              </div>
              <Image
                src={"/images/home/popular/bg.png"}
                width={344}
                height={61}
                alt="logo"
                className="h-[100px] w-full lg:h-full"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex w-full flex-row items-center justify-center gap-4 px-2">
                  <div>
                    <Image
                      src={"/images/home/popular/image1.png"}
                      width={344}
                      height={61}
                      alt="logo"
                      className="w-32 object-cover lg:w-36"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-row justify-between">
                      <h3 className="font-bebas text-lg font-[400] uppercase text-[#FF8A00] lg:text-xl">
                        Adana Kebab
                      </h3>
                      <h3 className="font-bebas text-lg font-[400] uppercase text-[#FF8A00] lg:text-xl">
                        $13.95
                      </h3>
                    </div>
                    <p className="w-full font-roboto text-sm font-[400] text-[#8F6D45] lg:w-[350px] lg:text-base">
                      Charcoal grilled, skewered minced lamb with onions,
                      peppers, parsley and herbs,{" "}
                    </p>
                  </div>
                </div>
              </div>
              <Image
                src={"/images/home/popular/bg.png"}
                width={344}
                height={61}
                alt="logo"
                className="h-[100px] w-full lg:h-full"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex w-full flex-row items-center justify-center gap-4 px-2">
                  <div>
                    <Image
                      src={"/images/home/popular/image1.png"}
                      width={344}
                      height={61}
                      alt="logo"
                      className="w-32 object-cover lg:w-36"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-row justify-between">
                      <h3 className="font-bebas text-lg font-[400] uppercase text-[#FF8A00] lg:text-xl">
                        Adana Kebab
                      </h3>
                      <h3 className="font-bebas text-lg font-[400] uppercase text-[#FF8A00] lg:text-xl">
                        $13.95
                      </h3>
                    </div>
                    <p className="w-full font-roboto text-sm font-[400] text-[#8F6D45] lg:w-[350px] lg:text-base">
                      Charcoal grilled, skewered minced lamb with onions,
                      peppers, parsley and herbs,{" "}
                    </p>
                  </div>
                </div>
              </div>
              <Image
                src={"/images/home/popular/bg.png"}
                width={344}
                height={61}
                alt="logo"
                className="h-[100px] w-full lg:h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
