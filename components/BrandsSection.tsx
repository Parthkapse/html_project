'use client';
import Image from 'next/image';

export default function BrandsSection() {
  return (
    <div className="w-full mt-8 relative flex justify-center items-center">
      <Image
        src="/Rectangle 87.png"
        alt="Yellow Background"
        width={1920}
        height={170}
        className="w-full h-auto object-cover"
      />
      <div className="absolute inset-0 flex justify-center items-center">
        <Image
          src="/Frame_8.png"
          alt="Brand Logos"
          width={1578}
          height={40}
          className="object-contain"
         />
      </div>
    </div>
  );
}
