"use client";
import { useEffect, useRef } from "react";
import styles from "./../Footer.module.scss";
import Link from "next/link";

//Social svg imports

import Github from "./../../../../public/img/social/Github.svg";
import Facebook from "./../../../../public/img/social/Facebook.svg";
import Instagram from "./../../../../public/img/social/Instagram.svg";
import Twitter from "./../../../../public/img/social/Twitter.svg";

function Social() {
  // Have to handle it in css module later .
  const facebookRef = useRef(null);

  useEffect(() => {
    if (facebookRef.current) {
      facebookRef.current.style.backgroundColor = "#000";
    } else console.log("None");
  }, []);
  return (
    <div className={styles.social__container}>
      <Link href="/" target={"_blank"}>
        <div className={styles.social__container__box}>
          <Twitter className={styles.social__icons} />
        </div>
      </Link>
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
          <Facebook className={styles.social__icons} />
        </div>
      </Link>
      <Link
        href={"https://www.instagram.com/ankitkarnwal33/"}
        target={"_blank"}
        rel="noopener noreferrer"
      >
        <div className={styles.social__container__box}>
          <Instagram className={styles.social__icons} />
        </div>
      </Link>
      <Link
        href={"https://github.com/itsankitkarnwal"}
        target={"_blank"}
        rel="noopener noreferrer"
      >
        <div className={styles.social__container__box}>
          <Github className={styles.social__icons} />
        </div>
      </Link>
    </div>
  );
}

export default Social;
