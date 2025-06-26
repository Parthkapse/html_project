"use client";
import Image from "next/image";
import Link from "next/link";

export default function YoungsFavourite() {
  return (
    <section className="w-full px-4 md:px-16 py-10 bg-white">
      <h2 className="text-3xl md:text-3xl font-extrabold text-left mb-12">
        Young's Favourite
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Link href="/produtcs/New Arrivals" className="group">
          <div>
            <Image
              src="/Rectangle 50.png"
              alt="Fun Style"
              height={700}
              width={500}
              className="w-full h-auto object-cover"
            />
            <div className="px-6 py-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Trending on instagram
              </h3>
              <p className="text-gray-500 group-hover:text-black transition-colors">
                Explore Now! →
              </p>
            </div>
          </div>
        </Link>

        <Link href="/produtcs/Casual" className="group">
          <div>
            <Image
              src="/Rectangle 49.png"
              alt="Trendy Style"
              height={400}
              width={500}
              className="w-full h-auto object-cover"
            />
            <div className="px-6 py-4">
              <h3 className="text-xl font-semibold text-gray-800">
                All Under $40
              </h3>
              <p className="text-gray-500 group-hover:text-black transition-colors">
                Explore Now! →
              </p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
