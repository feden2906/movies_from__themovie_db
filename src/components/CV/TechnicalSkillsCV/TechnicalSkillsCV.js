import styles from './TechnicalSkillsCV.module.css';
import { BlockTitle } from "../BlockTitle";

export const TechnicalSkillsCV = () => {

  return (
      <div className={styles.wrapperBlock}>
        <BlockTitle title={'TECHNICAL SKILLS'}/>
        <div className={styles.wrapper}>
          <div className={styles.skill}>
            <span>JavaScript</span>
            <span>⭐ ⭐ ⭐ ⭐ ⭐</span>
          </div>
          <div className={styles.skill}>
            <span>TypeScript</span>
            <span>⭐ ⭐ ⭐ ⭐ ⭐</span>
          </div>
          <div className={styles.skill}>
            <span>React</span>
            <span>⭐ ⭐ ⭐ ⭐ ⭐</span>
          </div>
          <div className={styles.skill}>
            <span>Angular</span>
            <span>⭐ ⭐ ⭐ ⭐ ⭐</span>
          </div>
          <div className={styles.skill}>
            <span>Node.js</span>
            <span>⭐ ⭐ ⭐ ⭐ ⭐</span>
          </div>
          <div>
            <span>Git, Redux, MongoDB, MySQL</span>
          </div>
        </div>
      </div>
  );
}
