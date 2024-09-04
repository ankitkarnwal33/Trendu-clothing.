import "./globals.scss";
import Footer from "@/components/Footer";
import Newslater from "@/components/Newslater";
import Navbar from "@/components/Navbar";
import ContextWrapper from "@/context/context";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/satoshi?styles=135009,135004,135005,135006,135007,135008,135002,135003,135000,135001"
          rel="stylesheet"
        ></link>
      </head>
      <body className="light_mode container">
        <ContextWrapper>
          <Navbar />
          {children}
          <div className="footer">
            <Newslater />
            <Footer />
          </div>
        </ContextWrapper>
      </body>
    </html>
  );
}
