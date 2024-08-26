"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import FacebookIcon from "./../../../../public/img/social/Facebook.svg";

import styles from "./../Footer.module.scss";

function Facebook() {
  const facebookRef = useRef(null);

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
        <FacebookIcon className={styles.social__icons} />
      </div>
    </Link>
  );
}

export default Facebook;
