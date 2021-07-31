import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from './UserInfo.module.css';

export const UserInfo = () => {
  const { theme } = useSelector(({ theme }) => theme);

  return (
      <div className={styles.wrapper}>
        <Link className={theme ? styles.dark : styles.white} to="#"><b><i>Person Personovich</i></b></Link>
        {
          theme
              ? <img src="./user1.png" alt="icon"/>
              : <img src="./user2.png" alt="icon"/>
        }
      </div>
  );
}
