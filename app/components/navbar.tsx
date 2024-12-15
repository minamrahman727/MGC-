import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-gradient-to-l from-neutral-950 to-neutral-600 text-white shadow-lg md:px-12 lg:px-20">
            <div className="flex items-center">
                <Link href="/">
                <Image
                    className="rounded-full  hover:scale-110 transition-transform duration-300"
                    src="/mgc.png"
                    alt="MGC Logo"
                    width={50}
                    height={50}
                />
                </Link>
            </div>
            <ul className="hidden md:flex items-center gap-6 lg:gap-10 text-sm font-semibold uppercase tracking-wide">
                <li>
                    <Link href="/" className="hover:text-blue-400 hover:underline underline-offset-4 transition duration-300">Home</Link>
                </li>
                <li>
                    <Link href="/about" className="hover:text-blue-400 hover:underline underline-offset-4 transition duration-300">About</Link>
                </li>
                <li>
                    <Link href="/contact" className="hover:text-blue-400 hover:underline underline-offset-4 transition duration-300">Contact</Link>
                </li>
                <li>
                    <Link href="/team" className="hover:text-blue-400 hover:underline underline-offset-4 transition duration-300">Team</Link>
                </li>
            </ul>
            <div className="flex md:hidden">
                <button className="text-white focus:outline-none hover:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default NavBar;
