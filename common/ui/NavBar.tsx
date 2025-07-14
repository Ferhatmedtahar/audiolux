"use client";

import { NAVBAR_ITEMS } from "@/utils/constants";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
export default function NavBar() {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      { background: "transparent" },
      {
        background: "#00000050",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  }, []);
  return (
    <nav>
      <div>
        <Link href="/" className="flex items-center gap-2">
          <Image
            alt="logo"
            width={40}
            height={40}
            src="/images/logo.webp"
            className="w-10 h-10 rounded-full"
          />
          <p>Audiolux</p>
        </Link>

        <ul>
          {NAVBAR_ITEMS.map((item) => (
            <li key={item.id}>
              <Link href={`/#${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
