"use client";
import { FaLock } from "react-icons/fa";
import styles from "./AuthForm.module.scss";
import Link from "next/link";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useFormState } from "react-dom";
import { signUp } from "@/actions/auth-actions";
export default function AuthForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [signupState, signupAction] = useFormState(signUp, {});
  function handleEyeClick() {
    setShowPassword(!showPassword);
  }
  return (
    <form className={styles.form} action={signupAction}>
      <div className={styles.form__icon}>
        <FaLock />
      </div>
      <p className={styles.form__fields}>
        <label htmlFor="name" className={styles.form__fields__label}>
          Full Name
        </label>
        <input
          type="name"
          name="name"
          id="name"
          placeholder="John Snow"
          className={styles.form__fields__input}
        />
      </p>
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
      <p className={`${styles.form__fields} ${styles.form__fieldRel} `}>
        <label htmlFor="password" className={styles.form__fields__label}>
          Password
        </label>
        <input
          type={`${showPassword ? "text" : "password"}`}
          name="password"
          id="password"
          placeholder="Example@123"
          className={styles.form__fields__input}
        />
        {showPassword ? (
          <FaEyeSlash onClick={handleEyeClick} />
        ) : (
          <FaRegEye onClick={handleEyeClick} />
        )}
      </p>
      {signupState.errors && (
        <ul>
          {Object.keys(signupState.errors).map((error) => (
            <li key={error}>{signupState.errors[error]}</li>
          ))}
        </ul>
      )}
      <button type="submit">Create Account</button>
      <Link href={"#"} className={styles.form__link}>
        <p>Login with existing account.</p>
      </Link>
    </form>
  );
}
