import styles from './EducationCV.module.css';
import { BlockTitle } from "../BlockTitle";

export const EducationCV = () => {
  return (
      <div className={styles.wrapperBlock}>
        <BlockTitle title={'EDUCATION'}/>
        <div className={styles.wrapper}>
          <div>
            <b>JavaScript Complex Course</b>
            <p>Sep 2020 - Present</p>
            <p>OktenWeb University</p>
          </div>
          <div>
            <b>Medical Psychology</b>
            <p>Sep 2003 – May 2010</p>
            <p>BOGOMOLETS NATIONAL MEDICAL UNIVERSITY</p>
          </div>
        </div>
      </div>
  );
}
