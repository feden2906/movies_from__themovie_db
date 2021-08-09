import styles from './WorkCV.module.css';
import { BlockTitle } from "../BlockTitle";

export const WorkCV = () => {
  return (
      <div className={styles.wrapperBlock}>
        <BlockTitle title={'WORK EXPERIENCE'}/>
        <div className={styles.wrapper}>
          <div>
            <b>Lab Engineer</b>
            <p>Feb 2019 - Sep 2020</p>
            <p>PJSC“TRAKTOROSAPCHASTYNA"</p>
          </div>

          <div>
            <b>Lab Engineer</b>
            <p>Feb 2019 - Sep 2020</p>
            <p>PJSC“TRAKTOROSAPCHASTYNA"</p>
          </div>
        </div>
      </div>
  );
}
