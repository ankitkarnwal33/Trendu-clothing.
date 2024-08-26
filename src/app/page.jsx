import Arrivals from "./components/Arrivals";
import Brands from "./components/Brands";
import Browse from "./components/Browse";
import Header from "./components/Header";
import HeaderImg from "./components/HeaderImg";
import Newslater from "./components/Newslater";
import Testimonials from "./components/Testimonials";
import TopSelling from "./components/TopSelling";

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
