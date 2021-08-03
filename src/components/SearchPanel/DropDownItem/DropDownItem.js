import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from './DropDownItem.module.css';

export const DropDownItem = ({ item, setSearchValue }) => {
  const { theme } = useSelector(({theme}) => theme);

  return (
      <Link to={`/movies/${item.id}`} className={styles.link} onClick={() => setSearchValue('')}>
        <div className={`${styles.searchItem} ${theme ? styles.dark : ""}`}>{item.title}</div>
      </Link>
  );
}
