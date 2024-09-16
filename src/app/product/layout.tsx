import { getSessionDetails, initializeSession } from "@/actions/auth-actions";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Newslater from "@/components/Newslater";

async function Layout({ children }) {
  initializeSession();
  const user = await getSessionDetails();
  return (
    <>
      <Navbar user={user} />
      {children}
      <div className="footer">
        <Newslater />
        <Footer />
      </div>
    </>
  );
}

export default Layout;
