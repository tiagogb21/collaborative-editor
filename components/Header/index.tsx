import Link from "next/link"
import { SiFiles } from "react-icons/si";

export const Header = ({children}:HeaderProps) => {
    return (
        <header>
            <div className="container px-6 py-4">
                <Link href="/" className="md:flex-1">
                    <SiFiles />
                    LiveDocs
                </Link>
            </div>
        </header>
    )
}