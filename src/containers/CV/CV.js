import styles from "./CV.module.css";
import { BodyCV, HeaderCV } from "../../components";

export const CV = () => {
  return (
      <div className={styles.wrapper}>
        <div className={styles.cv_wrapper}>
          <HeaderCV/>
          <BodyCV/>
        </div>
      </div>
  );
}
