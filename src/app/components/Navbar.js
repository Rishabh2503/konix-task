// components/Navbar.js
"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '/crypto-taxes', label: 'Crypto Taxes' },
        { href: '/free-tools', label: 'Free Tools' },
        { href: '/resource-center', label: 'Resource Center' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-6">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <span className="text-[32px] font-bold">
                                <span className="text-blue-600">Koin</span>
                                <span className="text-yellow-500">X</span>
                            </span>
                            <sup className="text-xs font-medium mt-1">TM</sup>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-700 hover:text-gray-900 px-1 py-2 text-sm font-medium"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/get-started"
                            className="ml-4 px-6 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            <div className="space-y-1.5 w-6">
                                <span className={`block h-0.5 bg-gray-900 transform transition duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                                <span className={`block h-0.5 bg-gray-900 transition duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                                <span className={`block h-0.5 bg-gray-900 transform transition duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                <div className="px-4 pt-2 pb-3 space-y-1 bg-white shadow-lg">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/get-started"
                        className="block px-3 py-2 text-base font-medium text-blue-600 hover:text-blue-700"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;