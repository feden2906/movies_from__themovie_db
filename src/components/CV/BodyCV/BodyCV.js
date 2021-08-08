import styles from './BodyCV.module.css';
import { ContactCV } from "../ContactCV";
import { TechnicalSkillsCV } from "../TechnicalSkillsCV";
import { LanguagesCV } from "../LanguagesCV/LanguagesCV";


export const BodyCV = () => {
  return (
      <div className={styles.body}>
        <div className={styles.column}>
          <ContactCV/>
          <TechnicalSkillsCV/>
          <LanguagesCV/>
        </div>
        <div className={styles.column}>

        </div>
      </div>
  );
}
