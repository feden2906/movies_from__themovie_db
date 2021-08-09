import styles from './PetProjectsCV.module.css';
import { BlockTitle } from "../BlockTitle";

export const PetProjectsCV = () => {
  return (
      <div className={styles.wrapperBlock}>
        <BlockTitle title={'PET PROJECTS'}/>
        <div className={styles.wrapper}>
          <a target="_blank" href="https://feden2906.github.io">https://feden2906.github.io</a>
          <br/>
          <a target="_blank" href="#">Link 2</a>
          <br/>
          <a target="_blank" href="#">Link 3</a>
        </div>
      </div>
  );
}
