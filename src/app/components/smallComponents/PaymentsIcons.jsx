import styles from "./../Footer.module.scss";
import Link from "next/link";

import ApplePay from "./../../../../public/img/Payments/ApplePay.svg";

import GPay from "./../../../../public/img/Payments/GPay.svg";

import Mastercard from "./../../../../public/img/Payments/Mastercard.svg";

import Paypal from "./../../../../public/img/Payments/Paypal.svg";

import Visa from "./../../../../public/img/Payments/Visa.svg";

function PaymentsIcons() {
  return (
    <div className={styles.footer__container__sub__payments}>
      <Link href={"https://www.apple.com/apple-pay/"} target="_blank">
        <div className={styles.footer__container__sub__payments__box}>
          <ApplePay />
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
          <GPay />
        </div>
      </Link>
      <Link
        href={"https://www.mastercard.co.in/en-in.html"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.footer__container__sub__payments__box}>
          <Mastercard />
        </div>
      </Link>
      <Link
        href={"https://www.paypal.com/in/home"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.footer__container__sub__payments__box}>
          <Paypal />
        </div>
      </Link>
      <Link
        href={"https://www.visa.co.in/"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.footer__container__sub__payments__box}>
          <Visa />
        </div>
      </Link>
    </div>
  );
}

export default PaymentsIcons;
