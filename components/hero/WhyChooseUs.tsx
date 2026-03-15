import Image from "next/image";

export default function WhyChooseUs(){
    return (
        <section className="flex flex-col lg:flex-row gap-12 h-auto lg:h-lvh">
            <div className="flex-1 flex flex-col gap-4">
                <h2>Why Choose Us</h2>
                <p className="pt-2">Lorem ipsum dolor sit amet consectetur. Fusce donec amet dui fames elit massa ornare. Justo arcu mi consequat dolor congue massa turpis arcu quam. Nulla venenatis natoque faucibus tellus lectus parturient at et imperdiet. </p>
                <p>Orci vitae id bibendum lorem. Adipiscing duis in eros odio risus. Cursus nam at pellentesque sagittis augue augue id phasellus lectus. Sed ornare odio ut duis sed dolor dolor. Turpis fermentum convallis dui diam. Suspendisse mi donec at aliquet arcu vestibulum. </p>
            </div>
            <div className="flex-1 relative min-h-80 lg:h-full rounded-2xl overflow-hidden">
                <Image 
                    src="/images/pool-supplies.webp"
                    alt=""
                    fill
                    className="object-cover"
                />
            </div>
        </section>
    )
}