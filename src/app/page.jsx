import Arrivals from "@/components/Arrivals";
import Brands from "@/components/Brands";
import Browse from "@/components/Browse";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeaderImg from "@/components/HeaderImg";
import Navbar from "@/components/Navbar";
import Newslater from "@/components/Newslater";
import Testimonials from "@/components/Testimonials";
import TopSelling from "@/components/TopSelling";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <HeaderImg />
      <Brands />
      <Arrivals />
      <TopSelling />
      <Browse />
      <Testimonials />
      <div className="footer">
        <Newslater />
        <Footer />
      </div>
    </>
  );
}
