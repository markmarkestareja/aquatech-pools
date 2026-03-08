import Image from "next/image";

export default function Offers(){
    return (
        <section className="bg-background-2">
            <div className="flex flex-col gap-6">
                <h2>What We Have For You</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Adipiscing aliquam lorem commodo vitae diam bibendum volutpat eu. Neque dolor nunc quis consequat eget ultrices lacus magna. In eros porta et id maecenas ornare. Nec diam at ullamcorper id vitae morbi tristique semper.</p>
            </div>

            <div>
                <div>
                    <div>
                        <Image 
                            src="/images/hero/pool-supplies.webp"
                            alt="pool supplies"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}