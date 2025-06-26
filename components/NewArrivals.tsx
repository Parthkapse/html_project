'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function NewArrivals() {
  return (
    <div className="w-full mt-16 max-w-7xl mx-auto px-4 py-12">
      <h2 className="font-serif text-4xl font-black text-black text-left mb-10 tracking-tight">
        New Arrivals
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Card 1: Hoodies & Sweatshirt */}
        <Link href="/products/hoodies" className="group">
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer mx-auto max-w-[350px]">
            <Image
              src="/Rectangle 20.png"
              alt="Hoodies & Sweatshirt"
              width={350}
              height={500}
              className="object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-black mb-2 group-hover:text-yellow-500 transition">
                Hoodies & Sweatshirt
              </h3>
              <p className="text-black font-medium">Explore Now!</p>
            </div>
          </div>
        </Link>

        {/* Card 2: Coats & Parkas */}
        <Link href="/products/coatsandparkas" className="group">
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer mx-auto max-w-[350px]">
            <Image
              src="/Rectangle 21.png"
              alt="Coats & Parkas"
              width={350}
              height={500}
              className="object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-black mb-2 group-hover:text-yellow-500 transition">
                Coats & Parkas
              </h3>
              <p className="text-black font-medium">Explore Now!</p>
            </div>
          </div>
        </Link>

        {/* Card 3: Tees & T-Shirt */}
        <Link href="/products/Tees&T-Shirt" className="group">
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer mx-auto max-w-[350px]">
            <Image
              src="/Rectangle 22.png"
              alt="Tees & T-Shirt"
              width={350}
              height={500}
              className="object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-black mb-2 group-hover:text-yellow-500 transition">
                Tees & T-Shirt
              </h3>
              <p className="text-black font-medium">Explore Now!</p>
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
}
