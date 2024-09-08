"use client";
import { usePathname } from "next/navigation";
import styles from "./page.module.scss";
function NotFound() {
  const path = usePathname();
  return (
    <div className={styles.NotFound}>
      <h1>
        This page is under development: <code>{path}</code>
      </h1>
    </div>
  );
}

export default NotFound;
