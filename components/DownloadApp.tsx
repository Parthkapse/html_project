'use client';
import Image from 'next/image';

export default function DownloadApp() {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-left text-black">
          <span>Download App &</span> <br />
          Get the Voucher
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="text-center lg:text-left space-y-6 max-w-lg">
            <p className="text-xl text-gray-800 font-medium">
              Get <span className="font-bold text-yellow-500">30% off</span> for first transaction using <br />
              <span className="text-black font-bold">Rondovision mobile app</span> for now.
            </p>

            <div className="flex justify-center lg:justify-start gap-4">
              <Image src="/Rectangle 55.png" alt="App Store" width={150} height={50} />
              <Image src="/Rectangle 18.png" alt="Google Play" width={150} height={50} />
            </div>
          </div>

          <div className="w-full max-w-xl">
            <Image
              src="/Mobile app.png"
              alt="Voucher Mobile App Preview"
              width={700}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
