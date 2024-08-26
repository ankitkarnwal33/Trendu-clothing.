import styles from "./../Footer.module.scss";
import Link from "next/link";

//Social svg imports

import Github from "./../../../../public/img/social/Github.svg";
import Instagram from "./../../../../public/img/social/Instagram.svg";
import Twitter from "./../../../../public/img/social/Twitter.svg";
import Facebook from "./Facebook";

function Social() {
  return (
    <div className={styles.social__container}>
      <Link href="/" target={"_blank"}>
        <div className={styles.social__container__box}>
          <Twitter className={styles.social__icons} />
        </div>
      </Link>
      <Facebook />
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
