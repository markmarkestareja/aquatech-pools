import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="">
      <Image
        src="/images/hero.jpg"
        alt="Luxury Pool"
        fill
        priority
        className="object-cover"
      />

      <div>
        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Mattis diam platea massa
          viverra purus dolor. Feugiat eget felis cursus viverra morbi.
        </p>

        <button>
          <Link
            href="/"
          >
            Message Us Today
          </Link>

          <Link
            href="/"
          >
            Explore What We Offer
          </Link>
        </button>
      </div>
    </section>
  );
}
