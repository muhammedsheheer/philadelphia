"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

import Special from "./(section)/(special)/Special";
import Reviews from "./(section)/Review";
import Hero from "./(section)/Hero";
import Popular from "./(section)/Popular";
import United from "./(section)/United";
import Made from "./(section)/Made";
import Follow from "./(section)/Follow";
import Menu from "./(section)/Menu";
import Crispy from "./(section)/Crispy";
import Map from "./(section)/Map";
import Book from "./(section)/Book";

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight ?? 0;
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className="relative flex h-full w-full overflow-hidden bg-[#000]">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Navbar position="absolute" />
        <Hero />
        <Popular />
        <div className="h-full w-full pb-12 lg:pb-24">
          <United />
        </div>
        <div className="h-full w-full pb-12 lg:pb-16">
          <Special />
        </div>
        <Made />
        <Menu />
        <Crispy />
        <Book />
        <Reviews />
        <Map />
        <Follow />
        <Footer />
      </div>
    </main>
  );
}
