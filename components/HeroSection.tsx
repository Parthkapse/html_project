"use client";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="flex flex-1 w-full max-w-6xl bg-gray-100 rounded-3xl shadow-lg overflow-hidden mx-auto mt-8">
      <div className="max-w-lg space-y-6 p-8">
        <h1 className="text-7xl font-black leading-tight text-gray-900 tracking-tight">
          <span className="bg-white px-4 py-2 rounded-md shadow-md inline-block">
            LET'S SEE
          </span>
          <br />
          EXPLORE
          <br />
          <span className="bg-yellow-300 px-4 py-2 rounded-md shadow-md inline-block">
            UNIQUE
          </span>
          <br />
          CLOTHES.
        </h1>
        <p className="text-gray-800 text-xl font-semibold tracking-wide">
          Live for Influential and Innovative fashion!
        </p>
        <Link href="/shop">
          <span className="inline-block bg-black text-white px-4 py-3 rounded-md hover:bg-gray-800 transition duration-300 cursor-pointer shadow-lg font-bold text-md tracking-wider">
            Shop Now
          </span>
        </Link>
      </div>
      <div className="relative w-1/2 flex justify-center items-center">
        <Image
          src="/women.png"
          alt="Fashion Model"
          width={700}
          height={500}
          className="object-cover rounded-r-3xl"
        />
      </div>
    </div>
  );
}
