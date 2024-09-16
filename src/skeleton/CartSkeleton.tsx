import styles from "./CartSkeleton.module.scss";
const state = [1, 2, 3];
function CartSkeleton() {
  return (
    <div className={styles.container}>
      <div className={styles.heading}></div>
      <div className={styles.container__full}>
        <div className={styles.main}>
          {state.map((_, index) => (
            <div className={styles.main__1} key={index}>
              <div className={styles.main__1_2}>
                <div className={styles.image}></div>
                <div className={styles.details}>
                  <div className={styles.details_1}>
                    <div className={styles.details_1_item}></div>
                    <div className={styles.details_1_circle}></div>
                  </div>
                  <div className={styles.details_2}>
                    <div className={styles.small}></div>
                    <div className={styles.small}></div>
                  </div>
                  <div className={styles.details_1}>
                    <div className={styles.details_data}></div>
                    <div className={styles.details_button}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.main__2}>
          <div className={styles.head}></div>
          <div className={styles.mid}>
            <div className={styles.mid_item}>
              <div className={styles.mid_item_1}></div>
              <div className={styles.mid_item_2}></div>
            </div>
            <div className={styles.mid_item}>
              <div className={styles.mid_item_1}></div>
              <div className={styles.mid_item_2}></div>
            </div>
            <div className={styles.mid_item}>
              <div className={styles.mid_item_1}></div>
              <div className={styles.mid_item_2}></div>
            </div>
          </div>
          <div className={styles.end}>
            <div className={styles.end_item}>
              <div className={styles.end_item_1}></div>
              <div className={styles.end_item_2}></div>
            </div>
            <div className={styles.item}>
              <div className={styles.item_input}></div>
              <div className={styles.item_btn}></div>
            </div>
            <div className={styles.item}>
              <div className={styles.item_button}></div>
            </div>
            <div className={styles.end_item}>
              <div className={styles.end_item_button}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartSkeleton;
