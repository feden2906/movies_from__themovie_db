import styles from './UserInfo.module.css';
import { useSelector } from "react-redux";

export const UserInfo = () => {
  const { theme } = useSelector(({ theme }) => theme);

  return (
      <div className={`${styles.wrapper} ${theme && styles.dark}`}>
        <b><i>Person Personovich</i></b>
        {
          theme
              ? <img src="./user1.png" alt="icon"/>
              : <img src="./user2.png" alt="icon"/>
        }
      </div>
  );
}
