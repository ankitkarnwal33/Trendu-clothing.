import { getSessionDetails, initializeSession } from "@/actions/auth-actions";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Newslater from "@/components/Newslater";
import { ReactNode } from "react";

async function Layout({ children }: { children: ReactNode }) {
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
