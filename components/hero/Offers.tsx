import Image from "next/image";
import { GeneratePrimaryBtn } from "../generateBtn";

const offersCardContents = [
    {
        img: "pool-chlorine.webp",
        title: "CARTRIDGE POOL FITER (AQUA BRAND)",
        desc: "Lorem ipsum dolor sit amet consectetur. Vel sed aenean nibh nulla a sed. Luctus felis tristique egestas quisque lacus.",
        link: "/",
    }, {
        img: "pool-construction.webp",
        title: "POOL CHLORINE",
        desc: "Lorem ipsum dolor sit amet consectetur. Vel sed aenean nibh nulla a sed. Luctus felis tristique egestas quisque lacus.",
        link: "/",
    }, {
        img: "pool-consultancy.webp",
        title: "POOL PUMP (JET-FLO)",
        desc: "Lorem ipsum dolor sit amet consectetur. Vel sed aenean nibh nulla a sed. Luctus felis tristique egestas quisque lacus.",
        link: "/",
    },
]

export default function Offers(){
    return (
        <section className="bg-m-lighter flex flex-col gap-12">
            <div className="flex flex-col gap-6">
                <h2>What We Have For You</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Adipiscing aliquam lorem commodo vitae diam bibendum volutpat eu. Neque dolor nunc quis consequat eget ultrices lacus magna. In eros porta et id maecenas ornare. Nec diam at ullamcorper id vitae morbi tristique semper.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-4">

                {offersCardContents.map((offersCardContent, index) => (
                    <div key={index} className="flex flex-col gap-6 bg-m-white overflow-hidden rounded-2xl border border-m-grey h-auto">
                        <div className="relative w-full h-75 overflow-hidden rounded-2xl">
                            <Image 
                                src={`/images/${offersCardContent.img}`}
                                alt={`${offersCardContent.title}`}
                                fill
                                className="object-contain"
                            />
                        </div>

                        <div className="flex flex-col justify-between border-1 min-h-75 gap-8 px-4 pb-8">
                            <div className="flex flex-col gap-4">
                                <h3>{offersCardContent.title}</h3>
                                <p>{offersCardContent.desc}</p>
                            </div>
                            
                            <GeneratePrimaryBtn
                                link={`${offersCardContent.link}`}
                                label="See More"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}