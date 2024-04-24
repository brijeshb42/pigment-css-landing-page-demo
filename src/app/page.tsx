import { css } from "@/lib/styled";
import { Header } from "@/landing-page/Header";
import { Hero } from "@/landing-page/Hero";
import { Testimonials } from "@/landing-page/Testimonials";
import { Pricing } from "@/landing-page/Pricing";
import { Divider } from "@/landing-page/components/Divider";
import { Footer } from "@/landing-page/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Divider />
      <Testimonials />
      <Divider />
      <Pricing />
      <Divider />
      <Footer />
    </main>
  );
}
