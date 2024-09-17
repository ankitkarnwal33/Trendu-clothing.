"use client";
import styles from "./AuthForm.module.scss";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { login, Result } from "@/actions/auth-actions";
import { useRouter } from "next/navigation";
import { FaLock, FaRegEye, FaEyeSlash } from "react-icons/fa";
import { BsGearFill } from "react-icons/bs";
import SkeletonMain from "@/skeleton/SkeletonMain";
import Popup from "./smallComponents/Popup";
export default function AuthFormLogin() {
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const router = useRouter();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    try {
      setLoading(true);
      const response: Result = await login(formData);
      if (response?.status === "failed") {
        setError(response.message || "");
        setLoading(false);
        setTimeout(() => {
          setError("");
        }, 5000);
      } else if (response?.status === "success") {
        setName(response.data?.name || "");
        setLoggedIn(true);
        setError("");
        setLoading(false);
        setTimeout(() => {
          return router.push("/");
        }, 1500);
      }
    } catch {}
  }

  function handleClick() {
    setShowPassword(!showPassword);
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {loading && <SkeletonMain height={40} radius={0.5} />}
      {!loading && loggedIn && <Popup type={"success"} name={name} />}
      {!loading && !loggedIn && error !== "" && <Popup error={error} />}
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
