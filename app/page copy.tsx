import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] min-h-150">
      {/* Background Image */}
      <Image
        src="/images/hero.jpg" // replace with your image
        alt="Luxury pool"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/30" /> */}

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="max-w-4xl text-center text-white">
          
          <h1 className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Lorem ipsum dolor sit amet consectetur.
          </h1>

          <p className="mt-6 text-sm sm:text-base md:text-lg max-w-2xl text-black mx-auto">
            Lorem ipsum dolor sit amet consectetur. Mattis diam platea massa
            viverra purus dolor. Feugiat eget felis cursus viverra morbi.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-medium"
            >
              Message Us Today
            </Link>

            <Link
              href="/services"
              className="text-black px-6 py-3 rounded-lg bg-white/20 backdrop-blur hover:bg-white/30 transition font-medium"
            >
              Explore What We Offer
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}