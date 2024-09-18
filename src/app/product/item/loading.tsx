import styles from "./page.module.scss";

export default async function Loading() {
  return (
    <section className={styles.container}>
      <h1>This is the loading page of this compont!</h1>
    </section>
  );
}
