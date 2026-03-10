import Link from "next/link";

type BtnProps = {
    link: string
    label?: string
}

export function GeneratePrimaryBtn({link, label = "Explore More"} : BtnProps) {
    return (
        <Link 
            href={link}
            className="text-m-white text-lg px-6 py-3 rounded-lg bg-m-primary text-center"
        >
            {label}
        </Link>
    )
}

export function GenerateSecondaryBtn({link, label = "Explore More"} : BtnProps) {
    return (
        <Link
            href={link}
            className="text-lg px-6 py-3 rounded-lg bg-m-white text-m-primary text-center"
        >
            {label}
        </Link>
    )
}