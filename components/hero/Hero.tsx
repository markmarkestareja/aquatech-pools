import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="h-[100vh] flex justify-center">
        {/* <Image
                src="/images/hero.jpg"
                alt="Luxury Pool"
                fill
                priority
                className="object-cover"
            /> */}

        <div className="text-black relative z-10 flex flex-col justify-center gap-4 h-auto max-w-4xl text-center ">
            <h1 className="text-4xl/12 md:text-5xl lg:text-6xl font-bold text-foreground-2">
            Lorem ipsum dolor sit amet consectetur.
            </h1>
            <p className="text-base/7 lg:text-lg/7 text-foreground-2">
            Lorem ipsum dolor sit amet consectetur. Mattis diam platea massa viverra
            purus dolor. Feugiat eget felis cursus viverra morbi.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-2 pt-5">
            <Link
                href="/"
                className="text-xl text-foreground px-6 py-3 rounded-lg bg-primary"
            >
                Message Us Today
            </Link>

            <Link
                href="/"
                className="px-6 py-3 rounded-lg bg-transparent border-2 border-primary text-primary"
            >
                Explore What We Offer
            </Link>
            </div>
        </div>
        </section>
    );
}
