import { FaLock } from "react-icons/fa";
import styles from "./AuthForm.module.scss";
import Link from "next/link";
export default function AuthForm() {
  return (
    <form className={styles.form}>
      <div className={styles.form__icon}>
        <FaLock />
      </div>
      <p className={styles.form__fields}>
        <label htmlFor="email" className={styles.form__fields__label}>
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@test.com"
          className={styles.form__fields__input}
        />
      </p>
      <p className={styles.form__fields}>
        <label htmlFor="password" className={styles.form__fields__label}>
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Example@123"
          className={styles.form__fields__input}
        />
        <span>Password should be 8 characters long.</span>
      </p>
      <button type="submit">Create Account</button>
      <Link href={"#"} className={styles.form__link}>
        <p>Login with existing account.</p>
      </Link>
    </form>
  );
}
