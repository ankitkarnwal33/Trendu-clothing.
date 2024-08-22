import Image from "next/image";
import styles from "./Footer.module.scss";
import logo from "./../../../public/img/Logo.png";
import Link from "next/link";
import Social from "./../components/smallComponents/Social.jsx";
import FooterLink from "./../components/smallComponents/FooterLink.jsx";
import PaymentsIcons from "./../components/smallComponents/PaymentsIcons.jsx";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__container__main}>
          <div className={styles.footer__container__main__content}>
            <div>
              <Link href={"/"}>
                <Image src={logo} alt="TrendU" className={styles.logo} />
              </Link>
            </div>
            <p>
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <Social />
          </div>
          {/* Links */}
          <FooterLink />
        </div>
        <div className={styles.footer__container__sub}>
          <p className={styles.footer__container__sub__copyright}>
            TrendU.co &copy; 2000-2024, All Right Reserved
          </p>
          <PaymentsIcons />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
