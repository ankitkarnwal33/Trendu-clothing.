import Cart from "@/components/Cart";
import styles from "./page.module.scss";
import Navbar from "@/components/Navbar";
import Newslater from "@/components/Newslater";
import Footer from "@/components/Footer";
import { getSessionDetails, initializeSession } from "@/actions/auth-actions";
import { User } from "../page";
export const metadata = {
  title: "cart",
};

async function page() {
  initializeSession();
  const user: User | null = (await getSessionDetails()) || null;
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
