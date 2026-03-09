import Link from "next/link";

type BtnProps = {
    link: string
    label?: string
}

export function GeneratePrimaryBtn({link, label = "Explore More"} : BtnProps) {
    return (
        <Link 
            href={link}
            className="text-lg text-foreground px-6 py-3 rounded-lg bg-primary"
        >
            {label}
        </Link>
    )
}

export function GenerateSecondaryBtn({link, label = "Explore More"} : BtnProps) {
    return (
        <Link
            href={link}
            className="text-lg px-6 py-3 rounded-lg bg-foreground text-primary"
        >
            {label}
        </Link>
    )
}