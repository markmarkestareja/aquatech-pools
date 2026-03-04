interface HeroProps {
    title: string
    subtitle?: string
    image?: string
}

export default function HeroSection({ title, subtitle, image }: HeroProps){
    return (
        <section className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            {subtitle && <h2 className="text-xl text-gray-600">{subtitle}</h2>}
            {image && <img src={image} alt={title} className="mx-auto rounded-lg shadow-lg mt-6" />}
        </section>
    )
}