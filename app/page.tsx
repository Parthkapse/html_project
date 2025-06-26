import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrandsSection from "@/components/BrandsSection";
import NewArrivals from "@/components/NewArrivals";
import PaydaySale from "@/components/PaydaySale";
import YoungsFavourite from "@/components/YoungsFavourite";
import DownloadApp from "@/components/DownloadApp";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <HeroSection />
      <BrandsSection />
      <NewArrivals />
      <PaydaySale />
      <YoungsFavourite />
      <DownloadApp />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
