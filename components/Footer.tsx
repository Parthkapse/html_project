'use client';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className="w-full bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Left */}
        <div className="space-y-6 md:w-1/3">
          <h1 className="text-white font-extrabold text-3xl">FASHION</h1>
          <p className="text-white leading-relaxed">
            Complete your style with awesome <br /> clothes from us.
          </p>
          <Image
            src="/Frame 18.png"
            alt="Download App"
            height={150}
            width={200}
            className="mt-4"
          />
        </div>

        {/* Right */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left w-full md:w-2/3">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>About</li>
              <li>Contact Us</li>
              <li>Support</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Link</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Share Location</li>
              <li>Orders Tracking</li>
              <li>Size Guide</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
