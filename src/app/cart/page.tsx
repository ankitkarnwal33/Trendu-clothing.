import Cart from "@/components/Cart";
import styles from "./page.module.scss";
import Navbar from "@/components/Navbar";
import Newslater from "@/components/Newslater";
import Footer from "@/components/Footer";
import { getSessionDetails, initializeSession } from "@/actions/auth-actions";
export const metadata = {
  title: "cart",
};
function page() {
  initializeSession();
  const user = getSessionDetails();
  return (
    <>
      <Navbar user={user} />
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
