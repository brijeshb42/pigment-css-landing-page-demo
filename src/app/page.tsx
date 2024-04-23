import { css, styled } from "@/lib/styled";
import { Header } from "@/landing-page/Header";
import { Hero } from "@/landing-page/Hero";
import { Testimonials } from "@/landing-page/Testimonials";

const Divider = styled.hr(({ theme }) => ({
  all: "unset",
  display: "flex",
  height: 1,
  backgroundColor: theme.vars.palette.divider,
}));

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Divider />
      <Testimonials />
      <Divider />
    </main>
  );
}
