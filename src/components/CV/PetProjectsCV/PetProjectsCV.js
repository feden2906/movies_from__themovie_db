import styles from './PetProjectsCV.module.css';
import { BlockTitle } from "../BlockTitle";

export const PetProjectsCV = () => {
  return (
      <div className={styles.wrapperBlock}>
        <BlockTitle title={'PET PROJECTS'}/>
        <div className={styles.wrapper}>
          <a href="#">Link 1</a>
          <br/>
          <a href="#">Link 2</a>
          <br/>
          <a href="#">Link 3</a>
        </div>
      </div>
  );
}
