import styles from './HeaderCV.module.css';

export const HeaderCV = () => {

  return (
      <div className={styles.header}>
        <img className={styles.img} src="photo.jpg" alt="myPhoto"/>
        <div className={styles.info}>
          <h1>Alexandr Khomenko</h1>
          <p>Frontend Developer</p>
        </div>
      </div>
  );
}
