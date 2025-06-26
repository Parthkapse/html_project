"use client";
import Image from "next/image";
import Link from "next/link";

export default function PaydaySale() {
  return (
    <section className="w-full bg-yellow-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-45">
        {/* Left Side - Image */}
        <aside className="w-full md:w-1/2 flex justify-center md:justify-end ">
          <Image
            src="/image_12.png"
            alt="Pay Day Sale"
            height={600}
            width={500}
            className="object-contain  md:w-auto"
          />
        </aside>

        {/* Right Side - Content */}
        <aside className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="space-y-4 text-center md:text-left max-w-md">
            <h2 className="text-5xl md:text-7xl font-extrabold leading-tight">
              <span className="bg-white px-2">PAYDAY</span>
              <br />
              SALE NOW
            </h2>
            <p className="text-lg text-black">
              Spend minimal $100 get 30% off voucher code for your next purchase
            </p>
            <p className="font-semibold">1 June - 10 June 2021</p>
            <p className="text-sm text-black">*Terms & Conditions apply</p>
            <Link href="/shop">
              <span className="inline-block bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 cursor-pointer">
                Shop Now
              </span>
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
