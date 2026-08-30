'use client'

import React, { useState } from 'react'
import { Menu, X } from "lucide-react";
import Link from 'next/link';

const HandBurger = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className="relative">
            {/* Hamburger Button */}
            <button
                onClick={toggleMenu}
                className="text-white hover:opacity-80 transition-opacity duration-200 p-2"
                aria-label="Toggle menu"
            >
                {!isOpen ? (
                    <Menu className="w-6 h-6 text-black" />

                ) : (
                    <span></span>
                )}
            </button>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed top-10 right-0 w-fit h-fit p-10 bg-white text-indigo-800 shadow-xl rounded-lg flex flex-col items-end justify-center gap-y-8 z-50">
                    <X className="w-6 h-6 text-black" onClick={toggleMenu} />
                    <nav className="flex flex-col gap-y-6 text-center">
                        <Link
                            href="/about"
                            onClick={closeMenu}
                            className="text-xl hover:text-indigo-200 transition-colors duration-200"
                        >
                            About Us
                        </Link>
                        <Link
                            href="/contact"
                            onClick={closeMenu}
                            className="text-xl hover:text-indigo-200 transition-colors duration-200"
                        >
                            Contact Us
                        </Link>
                        <Link
                            href="/sign-in"
                            onClick={closeMenu}
                            className="text-xl hover:text-indigo-200 transition-colors duration-200"
                        >
                            Sign In
                        </Link>
                    </nav>
                </div>
            )}
        </div>
    )
}

export default HandBurger