"use client";
import { FaLock } from "react-icons/fa";
import styles from "./AuthForm.module.scss";
import Link from "next/link";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { FormEvent, useState } from "react";
import { Result, signUp } from "@/actions/auth-actions";
import { useRouter } from "next/navigation";
import { BsGearFill } from "react-icons/bs";
import Popup from "./smallComponents/Popup";
import SkeletonMain from "@/skeleton/SkeletonMain";
export default function AuthForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const response: Result = await signUp(formData);
    if (response?.status === "failed") {
      setError(response.message || "");
      setLoading(false);
      setTimeout(() => {
        setError("");
      }, 4000);
    } else if (response?.status === "success") {
      setName(response.data?.name || "");
      setError("");
      setLoading(false);
      setTimeout(() => {
        router.push("/login");
      }, 1500);
    } else {
      setError("Something Went Wrong 🥲");
    }
  }
  function handleEyeClick() {
    setShowPassword(!showPassword);
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {loading && <SkeletonMain height={30} radius={0.5} />}
      {!loading && error === "" && name !== "" && (
        <Popup type="signup" name={name} />
      )}
      {!loading && error !== "" && <Popup type="failed" error={error} />}
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
      <button type="submit" disabled={loading}>
        {loading ? <BsGearFill /> : "Create Account"}
      </button>
      <Link href={"/login"} className={styles.form__link}>
        <p>Login with existing account.</p>
      </Link>
    </form>
  );
}
