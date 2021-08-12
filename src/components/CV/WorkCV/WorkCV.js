import styles from './WorkCV.module.css';
import { BlockTitle } from "../BlockTitle";

export const WorkCV = () => {
  return (
      <div className={styles.wrapperBlock}>
        <BlockTitle title={'WORK EXPERIENCE'}/>
        <div className={styles.wrapper}>
          <div>
            <b>head of development department</b>
            <p>May 2018 - September 2021</p>
            <p>"Alfa Global"</p>
          </div>


        </div>
      </div>
  );
}
