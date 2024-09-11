"use client";
import { FaLock } from "react-icons/fa";
import styles from "./AuthForm.module.scss";
import Link from "next/link";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { signUp } from "@/actions/auth-actions";
import { useRouter } from "next/navigation";
import { BsGearFill } from "react-icons/bs";
export default function AuthForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.currentTarget);
    const result = await signUp(formData);
    if (result?.errors) {
      setErrors(result.errors);
    } else {
      router.push("/login");
      setErrors(null);
    }
    setLoading(false);
  }
  function handleEyeClick() {
    setShowPassword(!showPassword);
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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
        <label htmlFor="number" className={styles.form__fields__label}>
          Mobile
        </label>
        <input
          type="number"
          name="number"
          id="number"
          placeholder="+91 1234567890"
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
          placeholder="Password"
          className={styles.form__fields__input}
        />
        {showPassword ? (
          <FaEyeSlash onClick={handleEyeClick} />
        ) : (
          <FaRegEye onClick={handleEyeClick} />
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
        {loading ? <BsGearFill /> : "Create Account"}
      </button>
      <Link href={"/login"} className={styles.form__link}>
        <p>Login with existing account.</p>
      </Link>
    </form>
  );
}
