// import { FormEvent, ReactNode, useEffect, useRef } from "react";
// import styles from "./SearchSmall.module.scss";
// interface SearchSmall {
//   onSubmit: FormEvent;
//   active: string;
// }
// function SearchSmall({ active }: SearchSmall) {
//   const searchRef = useRef<HTMLInputElement>(null);
//   useEffect(() => {
//     if (active && searchRef.current) {
//       searchRef.current.focus();
//     }
//   }, [active]);

//   return (
//     <form onSubmit={onSubmit} className={styles.formSmall}>
//       <input type="text" placeholder="Search" ref={searchRef} />
//     </form>
//   );
// }

// export default SearchSmall;
