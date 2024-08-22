"use client";
import styles from "./Newslater.module.scss";

function Newslater() {
  function onSubmit(event) {
    //Prevent not working here i'll check that later.
    event.preventDefaut();
  }
  return (
    <section className={styles.newslater}>
      <div className={styles.container}>
        <h1>stay upto date about our latest offers</h1>
        <form className={styles.container__input}>
          <input type="text" required placeholder="Enter your email address" />
          <button type="submit" onSubmit={onSubmit}>
            Subscribe to newslater
          </button>
        </form>
      </div>
    </section>
  );
}

export default Newslater;
