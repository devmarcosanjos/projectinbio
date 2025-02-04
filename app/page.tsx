import Hero from "@/app/components/landing-page/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto border">
      <Hero />
      {/* <Header />
      <VideoExplanation />
      <Pricing />
      <FAQ /> */}
    </div>
  );
}
