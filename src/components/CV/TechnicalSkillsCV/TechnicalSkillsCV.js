import styles from './TechnicalSkillsCV.module.css';
import { BlockTitle } from "../BlockTitle";

export const TechnicalSkillsCV = () => {

  return (
      <div className={styles.wrapperBlock}>
        <BlockTitle title={'TECHNICAL SKILLS'}/>
        <div className={styles.wrapper}>
          <div className={styles.skill}>
            <span>JavaScript</span>
            <span>⚫⚫⚫⚫⚪</span>
          </div>
          <div className={styles.skill}>
            <span>React (Redux, thunk)</span>
            <span>⚫⚫⚫⚫⚪</span>
          </div>
          <div className={styles.skill}>
            <span>MySQL/MongoDB</span>
            <span>⚫⚫⚪⚪⚪</span>
          </div>
          <div className={styles.skill}>
            <span>Angular/TypeScript</span>
            <span>⚫⚪⚪⚪⚪</span>
          </div>
          <div className={styles.skill}>
            <span>Node.js</span>
            <span>⚫⚪⚪⚪⚪</span>
          </div>
          <div>
            <span>GIT, Webpack, Bootstrap, CSS3, HTML5, Figma</span>
          </div>
        </div>
      </div>
  );
}
