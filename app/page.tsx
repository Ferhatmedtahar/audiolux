import About from "@/modules/About";
import Art from "@/modules/Art";
import Contact from "@/modules/Contact";
import Hero from "@/modules/hero/Hero";
import Slider from "@/modules/Slider";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Art />
      <Slider />
      <Contact />
    </main>
  );
}
