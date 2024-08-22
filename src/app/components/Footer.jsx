"use client";
import Image from "next/image";
import styles from "./Footer.module.scss";
import logo from "./../../../public/img/Logo.png";
import Link from "next/link";

//Social svg imports
import Github from "./../../../public/img/social/Github.svg";
import Facebook from "./../../../public/img/social/Facebook.svg";
import Instagram from "./../../../public/img/social/Instagram.svg";
import Twitter from "./../../../public/img/social/Twitter.svg";

// Payments svg imports

import ApplePay from "./../../../public/img/Payments/ApplePay.svg";

import GPay from "./../../../public/img/Payments/GPay.svg";

import Mastercard from "./../../../public/img/Payments/Mastercard.svg";

import Paypal from "./../../../public/img/Payments/Paypal.svg";

import Visa from "./../../../public/img/Payments/Visa.svg";
import { useEffect, useRef } from "react";
function Footer() {
  // Have to handle it in css module later .

  const facebookRef = useRef(null);
  useEffect(() => {
    if (facebookRef.current) {
      facebookRef.current.style.backgroundColor = "#000";
    } else console.log("None");
  }, []);
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
            <div className={styles.social__container}>
              {/*Some links here */}
              <div className={styles.social__container__box}>
                <Twitter className={`${styles.social__icons} twitter`} />
              </div>
              <div
                className={styles.social__container__box}
                id="facebook"
                ref={facebookRef}
              >
                <Facebook className={`${styles.social__icons} `} />
              </div>
              <div className={styles.social__container__box}>
                <Instagram className={`${styles.social__icons} instagram`} />
              </div>
              <div className={styles.social__container__box}>
                <Github className={`${styles.social__icons} github`} />
              </div>
            </div>
          </div>
          <div className={styles.footer__container__main__links}>
            <div className={styles.footer__container__main__links__text}>
              <h2>Company</h2>
              <div className={styles.link}>
                <Link href={"/About"}>About</Link>
                <Link href={"/features"}>Features</Link>
                <Link href={"/works"}>Works</Link>
                <Link href={"/career"}>Career</Link>
              </div>
            </div>
            <div className={styles.footer__container__main__links__text}>
              <h2>Help</h2>
              <div className={styles.link}>
                <Link href={"/support"}>Customer Support</Link>
                <Link href={"/delivery"}>Delivery details</Link>
                <Link href={"/terms"}>Terms And Conditions</Link>
                <Link href={"/policy"}>Privacy Policy</Link>
              </div>
            </div>
            <div className={styles.footer__container__main__links__text}>
              <h2>Faq</h2>
              <div className={styles.link}>
                <Link href={"/account"}>Account</Link>
                <Link href={"/manage_deliveries"}>Manage Deliveries</Link>
                <Link href={"/orders"}>Orders</Link>
                <Link href={"/payments"}>Payments</Link>
              </div>
            </div>
            <div className={styles.footer__container__main__links__text}>
              <h2>Resources</h2>
              <div className={styles.link}>
                <Link href={"/free_e_books"}>Free e-Books</Link>
                <Link href={"/dev_tutorials"}>Development Tutorial</Link>
                <Link href={"/howtoblog"}>How to - Blog</Link>
                <Link href={"/ytplalist"}>Youtube Playlist</Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer__container__sub}>
          <p className={styles.footer__container__sub__copyright}>
            TrendU.co &copy; 2000-2024, All Right Reserved
          </p>
          <div className={styles.footer__container__sub__payments}>
            <div className={styles.footer__container__sub__payments__box}>
              <ApplePay />
            </div>
            <div className={styles.footer__container__sub__payments__box}>
              <GPay />
            </div>
            <div className={styles.footer__container__sub__payments__box}>
              <Mastercard />
            </div>
            <div className={styles.footer__container__sub__payments__box}>
              <Paypal />
            </div>
            <div className={styles.footer__container__sub__payments__box}>
              <Visa />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
