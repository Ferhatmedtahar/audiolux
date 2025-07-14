"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import AirpodsScrollCanvas from "./components/AirPodsShowCase";

gsap.registerPlugin(SplitText, ScrollTrigger);

function Hero() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const heroSplit = new SplitText(".title", {
      type: "chars, words",
    });
    const paragraphSplit = new SplitText(".subtitle", {
      type: "lines",
    });

    const yellowSubtitle = new SplitText(".yellow-subtitle", {
      type: "words",
    });

    heroSplit.chars.forEach((char, i) => {
      char.classList.add("text-gradient");
    });

    gsap.from(heroSplit.chars, {
      y: 100,
      duration: 1.5,
      ease: "expo.out",
      stagger: 0.05,
    });

    gsap.from(yellowSubtitle.words, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "expo.out",
      stagger: 0.05,
      delay: 0.8,
    });

    gsap.from(paragraphSplit.lines, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "expo.out",
      stagger: 0.05,
      delay: 1,
    });
    gsap.from(".right-leaf ,.left-leaf", {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "expo.out",
      delay: 1.5,
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-airpod", { y: 200 }, 0)
      .to(".left-airpod", { y: -200 }, 0);
  }, [isMobile]);

  return (
    <>
      <section id="hero" className="relative noisy">
        <h1 className="title">Audiolux</h1>
        <Image
          src={`/images/air-pods-left-hero.png`}
          alt="left-airpod"
          width={100}
          height={100}
          className={`left-airpod`}
        />
        <Image
          src={`/images/air-pods-right-hero.png`}
          alt="right-airpod"
          width={100}
          height={100}
          className={`right-airpod`}
        />
        <div className="body">
          <div className="content">
            <div className="space-y-4 hidden md:block">
              <p>Immersive. Seamless. Iconic.</p>
              <p className="yellow-subtitle">
                Pure Sound <br />
                Seamlessly Yours
              </p>
            </div>
            <div className="view-airpods">
              <p className="subtitle">
                Unlock incredible sound. Experience the future of listening.
              </p>
              <Link href="#menu">Explore AirPods</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="airpods-showcase" className="relative h-[200vh]">
        <AirpodsScrollCanvas />
      </section>
    </>
  );
}

export default Hero;
