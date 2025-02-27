'use client'
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
     <div className="overflow-x-hidden antialiased">
        <Navbar />
        <Hero />
     </div>
  );
}
