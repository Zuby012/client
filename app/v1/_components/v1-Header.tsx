'use client'
import Link from 'next/link';
import HandBurger from './HandBurder';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
    const pathname = usePathname();

    return (
        <div>
            <header className="w-full flex flex-row items-center justify-between">
                <Link href={"/"} id="logo" className="flex flex-col items-center gap-x-5">
                    <Image
                        src="/logo_transparent.png"
                        alt="logo"
                        width={100}
                        height={200}
                        loading="eager"
                        className="w-20 h-auto"
                    />
                    <p className="text-indigo-800 font-bold">Shaine</p>
                </Link>
                <nav className="hidden md:flex flex-row items-center gap-x-5">
                    {pathname !== "/" && (
                        <Link href={"/"} className="text-indigo-800 font-bold visited:text-indigo-500 hover:underline">
                            Home
                        </Link>
                    )}
                    {pathname !== "/v1/about" && (
                        <Link href={"/v1/about"} className="text-indigo-800 font-bold visited:text-indigo-500 hover:underline">
                            About Us
                        </Link>
                    )}
                    {pathname !== "/v1/contact" && (
                        <Link href={"/v1/contact"} className="text-indigo-800 font-bold visited:text-indigo-500 hover:underline">
                            Contact Us
                        </Link>
                    )}
                    {pathname !== "/v1/sign-in" && (
                        <Link href={"/v1/sign-in"} className="p-2 rounded-md bg-indigo-800 text-white visited:bg-indigo-500 hover:bg-blue-500 active:bg-indigo-400">
                            Sign In
                        </Link>
                    )}
                </nav>
                <span className="sm:flex md:hidden lg:hidden xl:hidden 2xl:hidden">
                    <HandBurger />
                </span>
            </header>
        </div>
    )
}

export default Header