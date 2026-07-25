import type { Metadata } from "next";
import { Nunito, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomScrollbar from "@/components/ui/CustomScrollbar";
import ScrollBlurOverlay from "@/components/layout/ScrollBlurOverlay";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const instrument = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  title: "Justin Mathais",
  description: "Personal portfolio and blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${nunito.variable} ${instrument.variable} min-h-full antialiased`}
      >
        {/* 🌫️ Background Layer (IMPORTANT for glass effect) */}
        <div className="min-h-screen bg-gradient-to-b from-[#FAF7F2] via-[#F3EFE8] to-[#FAF7F2]">

          <CustomScrollbar />
          <ScrollBlurOverlay />

          <Navbar />

          <main>
            {children}
          </main>

          <Footer />

        </div>
      </body>
    </html>
  );
}
