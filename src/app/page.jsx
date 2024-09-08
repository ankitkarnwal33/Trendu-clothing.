import Arrivals from "@/components/Arrivals";
import Brands from "@/components/Brands";
import Browse from "@/components/Browse";
import Header from "@/components/Header";
import HeaderImg from "@/components/HeaderImg";
import Testimonials from "@/components/Testimonials";
import TopSelling from "@/components/TopSelling";
export const metadata = {
  title: "TrendU",
  description:
    "Discover the latest fashion trends at Trendu. Shop stylish and affordable clothing for men, women, and kids. From chic outfits to everyday essentials, find your perfect look with free shipping on orders over $50. Stay trendy with Trendu!",
};
export default function Home() {
  return (
    <>
      <Header />
      <HeaderImg />
      <Brands />
      <Arrivals />
      <TopSelling />
      <Browse />
      <Testimonials />
    </>
  );
}
