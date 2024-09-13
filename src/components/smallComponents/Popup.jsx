import styles from "./Popup.module.scss";
function Popup({ type = "failed", name = "", error = "" }) {
  return (
    <>
      <p
        className={`${styles.show} ${
          type === "success" || type === "signup"
            ? styles.success
            : styles.error
        }`}
      >
        {type === "success" ? (
          <span>Welcome Back {name.split(" ")[0]}</span>
        ) : type === "signup" ? (
          <span>Congratulations {name.split(" ")[0]} you have signed up</span>
        ) : (
          <span>{error}</span>
        )}
      </p>
    </>
  );
}

export default Popup;
