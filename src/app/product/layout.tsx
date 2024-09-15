import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Newslater from "@/components/Newslater";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <div className="footer">
        <Newslater />
        <Footer />
      </div>
    </>
  );
}

export default Layout;
