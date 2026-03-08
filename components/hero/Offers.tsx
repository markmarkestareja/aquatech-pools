import Image from "next/image";
import Link from "next/link";

export default function Offers(){
    return (
        <section className="bg-background-2 flex flex-col gap-12">
            <div className="flex flex-col gap-6">
                <h2>What We Have For You</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Adipiscing aliquam lorem commodo vitae diam bibendum volutpat eu. Neque dolor nunc quis consequat eget ultrices lacus magna. In eros porta et id maecenas ornare. Nec diam at ullamcorper id vitae morbi tristique semper.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex flex-col gap-6 bg-card overflow-hidden rounded-2xl">
                    <div className="relative w-full h-[300px] overflow-hidden rounded-2xl">
                        <Image 
                            src="/images/pool-supplies.webp"
                            alt="pool supplies"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col gap-8 px-4 pb-8">
                        <div className="flex flex-col gap-4">
                            <h3>Pool Supplies</h3>
                            <p>Lorem ipsum dolor sit amet consectetur. Vel sed aenean nibh nulla a sed. Luctus felis tristique egestas quisque lacus.</p>
                        </div>
                        <Link
                            href="/"
                            className="text-xl text-foreground px-6 py-3 rounded-lg bg-primary text-center"
                        >
                            Message Us Today
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col gap-6 bg-card overflow-hidden rounded-2xl">
                    <div className="relative w-full h-[300px] overflow-hidden rounded-2xl">
                        <Image 
                            src="/images/pool-construction.webp"
                            alt="pool supplies"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col gap-8 px-4 pb-8">
                        <div className="flex flex-col gap-4">
                            <h3>Pool Construction</h3>
                            <p>Lorem ipsum dolor sit amet consectetur. Vel sed aenean nibh nulla a sed. Luctus felis tristique egestas quisque lacus.</p>
                        </div>
                        <Link
                            href="/"
                            className="text-xl text-foreground px-6 py-3 rounded-lg bg-primary text-center"
                        >
                            Message Us Today
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col gap-6 bg-card overflow-hidden rounded-2xl">
                    <div className="relative w-full h-[300px] overflow-hidden rounded-2xl">
                        <Image 
                            src="/images/pool-consultancy.webp"
                            alt="pool supplies"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col gap-8 px-4 pb-8">
                        <div className="flex flex-col gap-4">
                            <h3>Pool Consultancy</h3>
                            <p>Lorem ipsum dolor sit amet consectetur. Vel sed aenean nibh nulla a sed. Luctus felis tristique egestas quisque lacus.</p>
                        </div>
                        <Link
                            href="/"
                            className="text-xl text-foreground px-6 py-3 rounded-lg bg-primary text-center"
                        >
                            Message Us Today
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}