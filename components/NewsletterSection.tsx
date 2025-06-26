"use client";

export default function NewsletterSection() {
  return (
    <div className="w-full bg-[#E5C643] py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
          JOIN SHOPPING COMMUNITY TO <br /> GET MONTHLY PROMO
        </h1>
        <h3 className="text-white text-base sm:text-lg">
          Type your email down below and be young wild generation
        </h3>
        <div className="relative w-full max-w-md mx-auto mt-4">
          <input
            type="email"
            placeholder="Add your email here"
            className="w-full py-4 pr-24 pl-6 rounded-md text-base text-gray-800 placeholder-gray-500 bg-white"
          />
          <button className="absolute top-1/2 -translate-y-1/2 right-1 bg-black text-white px-5 py-3 rounded-md hover:bg-gray-800 transition text-sm font-semibold">
            SEND
          </button>
        </div>
      </div>
    </div>
  );
}
