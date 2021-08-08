import styles from './BodyCV.module.css';
import { ContactCV } from "../ContactCV";
import { EducationCV } from "../EducationCV";
import { LanguagesCV } from "../LanguagesCV";
import { PetProjectsCV } from "../PetProjectsCV";
import { TechnicalSkillsCV } from "../TechnicalSkillsCV";
import { WorkCV } from "../WorkCV";

export const BodyCV = () => {
  return (
      <div className={styles.body}>
        <div className={styles.column}>
          <ContactCV/>
          <TechnicalSkillsCV/>
          <LanguagesCV/>
        </div>
        <div className={styles.column}>
          <EducationCV/>
          <WorkCV/>
          <PetProjectsCV/>
        </div>
      </div>
  );
}
