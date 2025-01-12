"use client"
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-blue-600 text-2xl font-bold">
          KoinX
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/crypto-taxes" className="text-gray-700">Crypto Taxes</Link>
          <Link href="/free-tools" className="text-gray-700">Free Tools</Link>
          <Link href="/resource-center" className="text-gray-700">Resource Center</Link>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">
            Get Started
          </button>
        </div>
        <button className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </nav>
    </header>
  );
}