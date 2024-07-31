import Link from "next/link"
import { ReactNode } from "react"

type HeaderProps = {
    children: ReactNode;
}

export const Header = ({children} : HeaderProps) => {
    return (
        <header>
            <div className="container px-6 py-4">
                <Link href="/" className="md:flex-1">

                </Link>
            </div>
        </header>
    )
}