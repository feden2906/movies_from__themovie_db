import styles from './Header.module.css';
import { UserInfo } from "../UserInfo";
import { SearchPanel } from "../SearchPanel";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
      <div className={styles.header}>
        <Link to="/" className={styles.logo}><b><i>MoviesDB</i></b></Link>
        <SearchPanel/>
        <UserInfo/>
      </div>
  );
}
