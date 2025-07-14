"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(SplitText, ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const header = new SplitText("h2", {
      type: "words , lines",
    });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
      },
    });

    scrollTimeline
      .from(header.lines, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out",
        stagger: 0.05,
      })
      .from(
        ".top-grid div, .bottom-grid div",
        {
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
          stagger: 0.05,
        },
        "-=0.5"
      );
  }, []);
  return (
    <section id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Quality</p>
            <h2>
              Where every detail matters <span className="text-white">-</span>{" "}
              from chip to ear
            </h2>
          </div>

          <div className="sub-content">
            <p>
              Every AirPod we offer reflects our obsession with detail — from
              the cutting-edge chipset to the ergonomic design. That precision
              is what turns simple audio into an unforgettable listening
              experience.
            </p>

            <div>
              <p className="md:text-3xl text-xl font-bold">
                <span>4.5</span>/5
              </p>
              <p className="text-sm text-white-100">
                More than +12000 customers
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="top-grid">
        <div className="md:col-span-3">
          <div />
          <img src="/images/abt1.jpeg" alt="grid-img-1" />
        </div>

        <div className="md:col-span-6">
          <div />
          <img src="/images/abt2.jpeg" alt="grid-img-2" />
        </div>

        <div className="md:col-span-3">
          <div />
          <img src="/images/abt5.jpeg" alt="grid-img-5" />
        </div>
      </div>

      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div />
          <img src="/images/abt33.jpeg" alt="grid-img-3" />
        </div>

        <div className="md:col-span-4">
          <div />
          <img src="/images/abt4.jpeg" alt="grid-img-4" />
        </div>
      </div>
    </section>
  );
};
export default About;
