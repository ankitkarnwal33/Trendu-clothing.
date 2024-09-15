"use client";
import { usePathname } from "next/navigation";
import styles from "@/app/page.module.scss";
function NotFound() {
  const path = usePathname();
  return (
    <div className={styles.NotFound}>
      <h1>
        This page is under development: <code>{path} </code> Closest
      </h1>
    </div>
  );
}

export default NotFound;
