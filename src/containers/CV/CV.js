import styles from "./CV.module.css";
import { HeaderCV } from "../../components";

export const CV = () => {
  return (
      <div className={styles.wrapper}>
        <div className={styles.cv_wrapper}>
          <HeaderCV/>
        </div>
      </div>
  );
}
