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

export default function Clients() {
  return (
    <section className="bg-background px-0 md:px-0 lg:px-0 xl:px-0 flex flex-col gap-12" style={{ height: 'auto', position: 'relative', overflow: 'hidden' }}>
      <h2 className="text-center">Clients Who Trusted Us</h2>
      
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