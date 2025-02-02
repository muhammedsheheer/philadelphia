import Image from "next/image";
import React from "react";

const Crispy: React.FC = () => {
  return (
    <section className="h-full w-full">
      <Image
        src={"/images/home/crispy/juicy.svg"}
        width={344}
        height={61}
        alt="juicy"
        className="h-full w-full"
      />
      <Image
        src={"/images/home/crispy/image.svg"}
        width={344}
        height={61}
        alt="juicy"
        className="h-full w-full"
      />
    </section>
  );
};

export default Crispy;
