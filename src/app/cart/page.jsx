import Cart from "@/components/Cart";
import styles from "./page.module.scss";
import Navbar from "@/components/Navbar";
import Newslater from "@/components/Newslater";
import Footer from "@/components/Footer";
export const metadata = {
  title: "cart",
};
function page() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Cart />
      </div>
      <div className="footer">
        <Newslater />
        <Footer />
      </div>
    </>
  );
}

export default page;
