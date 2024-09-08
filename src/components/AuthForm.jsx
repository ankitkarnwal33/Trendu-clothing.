"use client";
import { FaLock } from "react-icons/fa";
import styles from "./AuthForm.module.scss";
import Link from "next/link";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { FaEarDeaf } from "react-icons/fa6";

export default function AuthForm() {
  const [showPassword, setShowPassword] = useState(false);
  function handleEyeClick() {
    setShowPassword(!showPassword);
  }
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
        <span>Password should be 8 characters long.</span>
      </p>
      <button type="submit">Create Account</button>
      <Link href={"#"} className={styles.form__link}>
        <p>Login with existing account.</p>
      </Link>
    </form>
  );
}
