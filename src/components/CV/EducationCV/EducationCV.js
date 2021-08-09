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
            <b>JavaScript Complex Course</b>
            <p>Sep 2020 - Present</p>
            <p>OktenWeb University</p>
          </div>
          <div>
            <b>Master of Oil and Gas Engineering</b>
            <p>Sep 2015 – Feb 2019</p>
            <p>Ivano-Frankivsk Technical National University of Oil and Gas</p>
          </div>
        </div>
      </div>
  );
}
