import styles from './LanguagesCV.module.css';
import { BlockTitle } from "../BlockTitle";

export const LanguagesCV = () => {

  return (
      <div className={styles.wrapperBlock}>
        <BlockTitle title={'LANGUAGES'}/>
        <div className={styles.wrapper}>
          <div className={styles.skill}>
            <span>Ukrainian</span>
            <span>⭐ ⭐ ⭐ ⭐ ⭐</span>
          </div>
          <div className={styles.skill}>
            <span>English</span>
            <span>⭐ ⭐ ⭐ ⭐ ⭐</span>
          </div>
          <div className={styles.skill}>
            <span>Russian</span>
            <span>⭐ ⭐ ⭐ ⭐ ⭐</span>
          </div>
        </div>
      </div>
  );
}
