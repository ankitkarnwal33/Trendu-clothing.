/* eslint-disable @next/next/no-img-element */
import styles from "./../Footer.module.scss";
import Link from "next/link";

function PaymentsIcons() {
  return (
    <div className={styles.footer__container__sub__payments}>
      <Link href={"https://www.apple.com/apple-pay/"} target="_blank">
        <div className={styles.footer__container__sub__payments__box}>
          <img src="/img/Payments/ApplePay.svg" alt="ApplePay" />
        </div>
      </Link>
      <Link
        href={
          "https://play.google.com/store/apps/details?id=com.google.android.apps.nbu.paisa.user&hl=en_IN&pli=1"
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.footer__container__sub__payments__box}>
          <img src="/img/Payments/GPay.svg" alt="Gpay" />
        </div>
      </Link>
      <Link
        href={"https://www.mastercard.co.in/en-in.html"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.footer__container__sub__payments__box}>
          <img src="/img/Payments/Mastercard.svg" alt="Mastercard" />
        </div>
      </Link>
      <Link
        href={"https://www.paypal.com/in/home"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.footer__container__sub__payments__box}>
          <img src="/img/Payments/Paypal.svg" alt="Paypal" />
        </div>
      </Link>
      <Link
        href={"https://www.visa.co.in/"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.footer__container__sub__payments__box}>
          <img src="/img/Payments/Visa.svg" alt="Visa" />
        </div>
      </Link>
    </div>
  );
}

export default PaymentsIcons;
