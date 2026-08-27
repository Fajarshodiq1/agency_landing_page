import Image from "next/image";
import { Navbar } from "@/app/components/navbar/index";
import Hero from "./components/pages/hero";
import HeroScroll from "@/components/container-scroll-animation-demo";
import { DigitalTransformation } from "./components/pages/DigitalTransformation";
import { Services } from "./components/pages/Services";
export default function Home() {
  return (
    <main>
      <Hero />
      <HeroScroll />
      <DigitalTransformation />
      <Services />
    </main>
  );
}
