import styles from "./../Footer.module.scss";
import Link from "next/link";
//To be optimized later.
function FooterLink() {
  return (
    <div className={styles.footer__container__main__links}>
      <div className={styles.footer__container__main__links__text}>
        <h2>Company</h2>
        <div className={styles.link}>
          <Link href={"/dashboard"}>About</Link>
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
  );
}

export default FooterLink;
