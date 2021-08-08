import styles from './BodyCV.module.css';
import { ContactCV } from "../ContactCV/ContactCV";

export const BodyCV = () => {
  return (
      <div className={styles.body}>
        <div className={styles.column}>
          <ContactCV/>

        </div>
        <div className={styles.column}>

        </div>
      </div>
  );
}
