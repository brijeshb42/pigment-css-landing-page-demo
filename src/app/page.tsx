import { cookies } from "next/headers";

import { Header } from "@/landing-page/Header";
import { Hero } from "@/landing-page/Hero";
import { Testimonials } from "@/landing-page/Testimonials";
import { Pricing } from "@/landing-page/Pricing";
import { Divider } from "@/landing-page/components/Divider";
import { Footer } from "@/landing-page/Footer";
import { Features } from "@/landing-page/Features";
import { Highlights } from "@/landing-page/Highlights";
import Perf from "@/landing-page/components/Perf";

export default function Home({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const isDarkMode = (cookies().get("theme")?.value || "dark") === "dark";
  return (
    <main>
      <Header />
      <Hero />
      <Divider />
      <Features isDarkMode={isDarkMode} />
      <Divider />
      <Testimonials />
      <Divider />
      <Highlights />
      <Divider />
      <Pricing />
      <Divider />
      <Footer />
      {searchParams.metric === "1" && <Perf />}
    </main>
  );
}
