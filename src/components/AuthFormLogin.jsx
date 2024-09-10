"use client";
import { FaLock } from "react-icons/fa";
import styles from "./AuthForm.module.scss";
import Link from "next/link";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { login } from "@/actions/auth-actions";
import { useRouter } from "next/navigation";
import { BsGearFill } from "react-icons/bs";
export default function AuthFormLogin() {
  const [showPassword, setShowPassword] = useState(false);
  //   const [loginState, loginAction] = useFormState(login, {});
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
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
  console.log(errors);

  function handleEyeClick() {
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
