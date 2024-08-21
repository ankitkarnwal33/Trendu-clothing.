import { useEffect, useRef } from "react";
import styles from "./SearchSmall.module.scss";
function SearchSmall({ onSubmit, active }) {
  const searchRef = useRef(null);
  useEffect(() => {
    if (active && searchRef.current) {
      searchRef.current.focus();
    }
  }, [active]);

  return (
    <form onSubmit={onSubmit} className={styles.formSmall}>
      <input type="text" placeholder="Search" ref={searchRef} />
    </form>
  );
}

export default SearchSmall;
