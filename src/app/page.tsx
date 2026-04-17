import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Ecosystem } from "@/components/Ecosystem";
import { AppShowcase } from "@/components/AppShowcase";
import { ForDevelopers } from "@/components/ForDevelopers";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Ecosystem />
        <AppShowcase />
        <ForDevelopers />
      </main>
      <Footer />
    </>
  );
}
