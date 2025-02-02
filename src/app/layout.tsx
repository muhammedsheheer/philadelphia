import "@/styles/globals.css";
import "@/styles/lines.css";
import "@/styles/ham.css";
import { cn } from "@/lib/utils";
import { type Metadata } from "next";
import {
  Oswald,
  Roboto,
  Playfair_Display,
  Italiana,
  Mrs_Saint_Delafield,
  Poppins,
  Marcellus_SC,
  Inter,
  Bebas_Neue,
} from "next/font/google";
import Providers from "@/app/Providers";

export const metadata: Metadata = {
  title: "Philadelphia",
  description: "Philadelphia Fried Chicken",
  icons: [{ rel: "icon", url: "/images/home/hero/logo.svg", sizes: "12x12" }],
};

const manrope = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["200", "300", "400", "500", "600", "700"],
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  weight: ["400"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["200", "300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["200", "300", "400", "500", "600", "700"],
});

const marcellus = Marcellus_SC({
  subsets: ["latin"],
  variable: "--font-marcellus",
  weight: ["400"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

const italiana = Italiana({
  subsets: ["latin"],
  variable: "--font-italiana",
  weight: ["400"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const saint = Mrs_Saint_Delafield({
  subsets: ["latin"],
  variable: "--font-saint",
  weight: ["400"],
});
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "theme-custom font-forum flex min-h-screen antialiased",
          manrope.variable,
          roboto.variable,
          playfair.variable,
          italiana.variable,
          saint.variable,
          poppins.variable,
          marcellus.variable,
          inter.variable,
          bebas.variable,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
