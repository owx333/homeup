import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { Packages } from "@/components/Packages";
import { WhyUs } from "@/components/WhyUs";
import { Works } from "@/components/Works";
import { Process } from "@/components/Process";
import { WhoWeServe } from "@/components/WhoWeServe";
import { Areas } from "@/components/Areas";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <Services />
        <Packages />
        <WhyUs />
        <Works />
        <Process />
        <WhoWeServe />
        <Areas />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
