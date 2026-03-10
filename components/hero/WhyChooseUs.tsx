import Image from "next/image";

export default function WhyChooseUs(){
    return (
        <section>
            <div>
                <h2>Why Choose Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Fusce donec amet dui fames elit massa ornare. Justo arcu mi consequat dolor congue massa turpis arcu quam. Nulla venenatis natoque faucibus tellus lectus parturient at et imperdiet. </p>
                <p>Orci vitae id bibendum lorem. Adipiscing duis in eros odio risus. Cursus nam at pellentesque sagittis augue augue id phasellus lectus. Sed ornare odio ut duis sed dolor dolor. Turpis fermentum convallis dui diam. Suspendisse mi donec at aliquet arcu vestibulum. </p>
            </div>
            <div>
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