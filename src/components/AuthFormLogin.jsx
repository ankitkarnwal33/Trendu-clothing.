"use client";
import styles from "./AuthForm.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import { login } from "@/actions/auth-actions";
import { redirect, useRouter } from "next/navigation";
import { FaLock, FaRegEye, FaEyeSlash } from "react-icons/fa";
import { BsGearFill } from "react-icons/bs";
export default function AuthFormLogin() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {
      setLoading(true);
      const response = await login(formData);
      if (response?.status === "failed") {
        setError(response.message);
      } else if (response?.status === "success") {
        setName(response.data.name);
        setLoggedIn(true);
        setError(null);
        setTimeout(() => {
          return router.push("/");
        }, 2000);
      }
      setLoading(false);
    } catch {}
  }

  function handleClick() {
    setShowPassword(!showPassword);
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {loggedIn && (
        <p className={`${styles.show} ${styles.success}`}>
          Welcome Back {name.split(" ")[0]}
        </p>
      )}
      {!loggedIn && error !== null && (
        <p className={`${styles.show} ${styles.error}`}>
          <span>{error}</span>
        </p>
      )}
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
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
          placeholder="Password"
          required
          className={styles.form__fields__input}
        />
        {showPassword ? (
          <FaRegEye onClick={handleClick} />
        ) : (
          <FaEyeSlash onClick={handleClick} />
        )}
      </p>

      <button type="submit" disabled={loading}>
        {loading ? <BsGearFill /> : "Login"}
      </button>
      <Link href={"/signup"} className={styles.form__link}>
        <p>Create Account</p>
      </Link>
    </form>
  );
}
