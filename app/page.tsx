import Header from "@/app/components/landing-page/header";
import Hero from "@/app/components/landing-page/hero";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto ">
      <Header />
      <Hero />
      {/* 
      <VideoExplanation />
      <Pricing />
      <FAQ /> */}
    </div>
  );
}
