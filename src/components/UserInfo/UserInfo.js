import styles from './UserInfo.module.css';

export const UserInfo = () => {
  return (
      <div className={styles.wrapper}>
        <b><i>Person Personovich</i></b>
        <img src="./pngwing.png" alt="icon"/>
      </div>
  );
}
