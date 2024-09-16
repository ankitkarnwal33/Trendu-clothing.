"use client";
import styles from "./../Footer.module.scss";
import Link from "next/link";

//Social svg imports to be modified later.

import Facebook from "./Facebook";

function Social() {
  return (
    <div className={styles.social__container}>
      <Link href="/" target={"_blank"}>
        <div className={styles.social__container__box}>
          {/* <Twitter className={styles.social__icons} /> */}
          <img src="/img/social/Twitter.svg" alt="Twitter" />
        </div>
      </Link>
      <Facebook />
      <Link
        href={"https://www.instagram.com/ankitkarnwal33/"}
        target={"_blank"}
        rel="noopener noreferrer"
      >
        <div className={styles.social__container__box}>
          {/* <Instagram className={styles.social__icons} /> */}
          <img src="/img/social/Instagram.svg" alt="Instagram" />
        </div>
      </Link>
      <Link
        href={"https://github.com/itsankitkarnwal"}
        target={"_blank"}
        rel="noopener noreferrer"
      >
        <div className={styles.social__container__box}>
          <img src="/img/social/Github.svg" alt="Github" />
        </div>
      </Link>
    </div>
  );
}

export default Social;
