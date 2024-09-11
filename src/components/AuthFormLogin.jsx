"use client";
import styles from "./AuthForm.module.scss";
import Link from "next/link";
import { useState } from "react";
import { login } from "@/actions/auth-actions";
import { useRouter } from "next/navigation";
import { FaLock, FaRegEye, FaEyeSlash } from "react-icons/fa";
import { BsGearFill } from "react-icons/bs";
export default function AuthFormLogin() {
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {
      setLoading(true);
      const result = await login(formData);
      if (result?.errors) {
        setErrors(result.errors);
      } else {
        router.push("/");
        setErrors(null);
      }
      setLoading(false);
    } catch {}
  }

  function handleClick() {
    setShowPassword(!showPassword);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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
      {errors !== null ? (
        <ul>
          {Object.keys(errors).map((error) => (
            <li key={error}>{errors[error]}</li>
          ))}
        </ul>
      ) : null}
      <button type="submit" disabled={loading}>
        {loading ? <BsGearFill /> : "Login"}
      </button>
      <Link href={"/signup"} className={styles.form__link}>
        <p>Create Account</p>
      </Link>
    </form>
  );
}
