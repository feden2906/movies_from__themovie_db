import styles from './HeaderCV.module.css';

export const HeaderCV = () => {

  return (
      <div className={styles.header}>
        <img className={styles.img} src="./myPhoto.png" alt="myPhoto"/>
        <div className={styles.info}>
          <h1>MAKSYM FEDENKO</h1>
          <p>DEVELOPER</p>
        </div>
      </div>
  );
}
