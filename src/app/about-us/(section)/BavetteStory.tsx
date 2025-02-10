import Image from "next/image";

const BavetteStory = ({}) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center p-4 lg:py-16">
      <div className="flex h-full w-full flex-col items-center justify-center gap-11 bg-[#000]">
        <h2 className="font-oswald text-center text-8xl text-[#FF8A00] md:left-[15%] md:text-8xl">
          The La Turka
          <br />
          Story
        </h2>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#000] md:flex-row lg:px-24 lg:py-20">
          <div className="h-full w-full overflow-hidden p-4 md:w-1/2 md:p-0">
            <Image
              src="/images/about-us/laturka.jpg"
              width={577}
              height={676}
              alt="private dining"
              className="h-auto w-full rounded-lg md:rounded-none"
            />
          </div>
          <div className="flex h-full w-full flex-col items-center gap-[2.5rem] p-6 md:w-1/2 md:items-start lg:ml-24">
            <h1 className="font-oswald max-w-[500px] text-center text-6xl text-[#FF8A00] sm:text-7xl md:text-start">
              From Vision
              <br />
              to Flavor
            </h1>
            <p className="max-w-[450px] text-center font-light leading-[160%] text-[#FF8A00] md:text-start">
              La Turka was born from a deep passion for Mediterranean cuisine
              and a dream to bring its rich, authentic flavors to life. What
              started as a vision soon flourished into a vibrant dining
              destination, where tradition meets innovation. With a dedication
              to premium ingredients and time-honored recipes, La Turka has
              become a beloved spot for those seeking an extraordinary culinary
              experience.
              <br />
              <br />
              Every dish at La Turka reflects our commitment to authenticity and
              excellence, from perfectly grilled meats to flavorful mezes that
              transport you to the heart of the Mediterranean. Our journey from
              a dream to a dining favorite is driven by a love for great food,
              warm hospitality, and creating unforgettable moments for our
              guests.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BavetteStory;
