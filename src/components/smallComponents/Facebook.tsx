import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./../Footer.module.scss";

function Facebook() {
  const facebookRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (facebookRef.current) {
      facebookRef.current.style.backgroundColor = "#000";
    }
  }, []);
  return (
    <Link
      href={"https://www.facebook.com/itsankitkarnwal1/"}
      target={"_blank"}
      rel="noopener noreferrer"
    >
      <div
        className={styles.social__container__box}
        id="facebook"
        ref={facebookRef}
      >
        <img src="/img/social/Facebook.svg" alt="Facebook" />
      </div>
    </Link>
  );
}

export default Facebook;
