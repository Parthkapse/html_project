"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-12 py-4 bg-white text-black font-poppins">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Logo"
          width={120}
          height={40}
          className="object-contain"
        />
      </Link>
      <div className="flex space-x-6 text-gray-600">
        <Link href="#" className="hover:text-black">
          CATALOGUE
        </Link>
        <Link href="#" className="hover:text-black">
          FAVOURITE
        </Link>
        <Link href="#" className="hover:text-black">
          LIFESTYLE
        </Link>
        <Link
          href="/signup"
          className="text-white bg-black px-4 py-1 rounded-md font-semibold"
        >
          SIGN UP
        </Link>
      </div>
    </nav>
  );
}
