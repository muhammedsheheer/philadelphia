import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const JoinUs = ({}) => {
  return (
    <section
      className="relative flex h-screen w-full items-center justify-center"
      style={{
        backgroundImage: `url('/images/about-us/join.jpg')`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex h-full w-full flex-col-reverse items-center justify-center gap-4 md:flex-row">
        <div className="flex h-full w-full flex-col items-center justify-center gap-[2.5rem] p-6">
          <h1 className="font-oswald max-w-[500px] text-center text-5xl leading-[60px] text-[#fff]">
            Join Us for an
            <br />
            Unforgettable Meal
          </h1>
          <p className="max-w-[450px] text-center font-[600] leading-[160%] text-[#f7f5f1]">
            Ready to experience the rich and authentic flavors of the
            Mediterranean? Whether you`re enjoying an intimate dinner or
            celebrating with family and friends, La Turka invites you to indulge
            in a culinary journey like no other. Join us and discover the
            perfect blend of tradition, flavor, and hospitality that makes every
            visit to La Turka truly unforgettable.
          </p>
          <Button
            variant="outline"
            className="group w-fit items-center gap-[1.19rem] rounded-none border-[#866c53] bg-[#866c53] px-8 py-8 font-semibold uppercase text-white hover:bg-primary"
          >
            <Link
              className="flex flex-row items-center justify-center gap-4"
              href={"/table-booking"}
            >
              Book Now{" "}
              <Icons.rightArrow className="text-white duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-primary-foreground" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
