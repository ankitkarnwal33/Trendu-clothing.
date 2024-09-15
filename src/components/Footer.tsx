import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";
import logo from "@/../../public/img/Logo.png";
import Social from "@/components/smallComponents/Social";
import PaymentsIcons from "./smallComponents/PaymentsIcons";
import FooterLink from "./smallComponents/FooterLink";

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
