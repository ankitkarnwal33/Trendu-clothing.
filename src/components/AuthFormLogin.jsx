"use client";
import { FaLock } from "react-icons/fa";
import styles from "./AuthForm.module.scss";
import Link from "next/link";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useFormState } from "react-dom";
import { login } from "@/actions/auth-actions";
export default function AuthFormLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginState, loginAction] = useFormState(login, {});
  function handleEyeClick() {
    setShowPassword(!showPassword);
  }
  return (
    <form className={styles.form} action={loginAction}>
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
          placeholder="Email address"
          className={styles.form__fields__input}
          required
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
          placeholder="Password"
          required
          className={styles.form__fields__input}
        />
        {showPassword ? (
          <FaEyeSlash onClick={handleEyeClick} />
        ) : (
          <FaRegEye onClick={handleEyeClick} />
        )}
      </p>
      {loginState.errors && (
        <ul>
          {Object.keys(loginState.errors).map((error) => (
            <li key={error}>{loginState.errors[error]}</li>
          ))}
        </ul>
      )}
      <button type="submit">Login</button>
      <Link href={"/signup"} className={styles.form__link}>
        <p>Create Account</p>
      </Link>
    </form>
  );
}
