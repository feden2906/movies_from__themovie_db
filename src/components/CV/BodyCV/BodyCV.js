import styles from './BodyCV.module.css';
import { ContactCV } from "../ContactCV";
import { TechnicalSkillsCV } from "../TechnicalSkillsCV";
import { LanguagesCV } from "../LanguagesCV";
import { PetProjectsCV } from "../PetProjectsCV";

export const BodyCV = () => {
  return (
      <div className={styles.body}>
        <div className={styles.column}>
          <ContactCV/>
          <TechnicalSkillsCV/>
          <LanguagesCV/>
        </div>
        <div className={styles.column}>
          <PetProjectsCV/>
        </div>
      </div>
  );
}
