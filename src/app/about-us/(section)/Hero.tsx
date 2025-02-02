import Image from "next/image";

const Hero = ({}) => {
  return (
    <section id="hero" className="flex w-full items-center justify-center">
      <div className="relative flex min-h-[100vh] w-full items-center justify-center">
        <div className="flex w-full flex-col gap-6 px-4 lg:flex-row lg:gap-0 lg:px-0">
          <div className="flex w-full items-center justify-center lg:w-1/2">
            <div className="mt-20 flex flex-col items-start gap-6 lg:mt-0 lg:w-8/12">
              <h1 className="font-oswald text-5xl font-semibold leading-[66px] text-[#fff] lg:text-6xl">
                Welcome to
                <br /> La Turka - Where
                <br /> Every Bite is an
                <br /> Art Form
              </h1>
              <p className="font-manrope font-normal text-[#f7f5f1]">
                At La Turka, we are dedicated to delivering an exceptional
                dining experience, where rich flavors and warm hospitality come
                together. Our expertly crafted dishes celebrate the vibrant
                essence of Mediterranean cuisine, from succulent grilled meats
                to mouthwatering mezes bursting with authentic spices. Every
                bite tells a story of tradition, passion, and culinary
                excellence. Whether you`re indulging in a hearty feast or
                savoring delicate flavors, La Turka is where unforgettable
                moments and exquisite tastes come to life.
              </p>
            </div>
          </div>
          <div className="mt-[15vh] flex w-full flex-col items-center justify-center gap-6 lg:w-1/2">
            <Image
              src="/images/about-us/hero.jpg"
              width={951}
              height={975}
              alt="hero"
              className="h-full w-full lg:w-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
