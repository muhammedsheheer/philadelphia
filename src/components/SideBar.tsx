import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { type FC } from "react";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-[300px] sm:w-[540px]">
        <SheetHeader>
          <SheetDescription className="flex w-full flex-col items-start justify-start gap-7 pt-14">
            <Link
              href="/"
              className="flex w-full justify-start p-0 font-playfair text-2xl font-normal text-[#000]"
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="flex w-full justify-start p-0 font-playfair text-2xl font-normal text-[#000]"
            >
              Menu
            </Link>
            <Link
              href="/about-us"
              className="flex w-full justify-start p-0 font-playfair text-2xl font-normal text-[#000]"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="flex w-full justify-start p-0 font-playfair text-2xl font-normal text-[#000]"
            >
              Contact
            </Link>
            <button className="flex flex-row items-center gap-2 border border-[#DB0C10] bg-[#DB0C10] px-5 py-4 font-inter text-sm font-[600] uppercase leading-[80%] tracking-[1.56px] text-[#fff]">
              <Link
                className="flex flex-row items-center justify-center gap-2"
                href={"/table-booking"}
              >
                Book Table <ArrowRight className="w-4" />
              </Link>
            </button>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
