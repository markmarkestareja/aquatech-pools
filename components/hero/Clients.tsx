import React from "react";
import LogoLoop from '../LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

type LogoItem = {
  node?: React.ReactNode
  src?: string
  alt?: string
  title?: string
  href?: string
}

const LogoLoopTyped = LogoLoop as React.ComponentType<{
  logos: LogoItem[]
  speed?: number
  direction?: string
  logoHeight?: number
  gap?: number
  hoverSpeed?: number
  scaleOnHover?: boolean
  fadeOut?: boolean
  fadeOutColor?: string
  ariaLabel?: string
}>

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];

export default function Clients() {
  return (
    <section style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
      {/* Horizontal loop with icons */}
      <LogoLoopTyped
        logos={techLogos}
        speed={100}
        direction="left"
        logoHeight={60}
        gap={120}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </section>
  );
}