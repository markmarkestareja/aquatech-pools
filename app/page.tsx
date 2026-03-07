import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[100vh] flex justify-center">
      {/* <Image
        src="/images/hero.jpg"
        alt="Luxury Pool"
        fill
        priority
        className="object-cover"
      /> */}

      <div className="text-black relative z-10 flex flex-col justify-center h-auto max-w-4xl p-6 md:p-12 lg:p-16 xl:p-24 text-center">
        <h1 className="text-5xl/12 lg:text-7xl font-bold ">Lorem ipsum dolor sit amet consectetur.</h1>
        <p className="text-base/7 lg:text-lg/7">
          Lorem ipsum dolor sit amet consectetur. Mattis diam platea massa
          viverra purus dolor. Feugiat eget felis cursus viverra morbi.
        </p>

        <div className="flex gap-4">
          <Link
            href="/"
            className="px-6 py-3 rounded-lg bg-blue-600"
          >
            Message Us Today
          </Link>

          <Link
            href="/"
          >
            Explore What We Offer
          </Link>
        </div>
      </div>
    </section>
  );
}
