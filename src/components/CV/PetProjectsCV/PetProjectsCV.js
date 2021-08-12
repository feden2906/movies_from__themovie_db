import styles from './PetProjectsCV.module.css';
import { BlockTitle } from "../BlockTitle";

export const PetProjectsCV = () => {
  return (
      <div className={styles.wrapperBlock}>
        <BlockTitle title={'PET PROJECTS'}/>
        <div className={styles.wrapper}>
          <a target="_blank" href="https://alexandrkhom.github.io/">https://alexandrkhom.github.io/</a>
          <br/>

        </div>
      </div>
  );
}
