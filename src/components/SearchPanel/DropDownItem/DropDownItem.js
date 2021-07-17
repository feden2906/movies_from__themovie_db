import { Link } from "react-router-dom";
import styles from './DropDownItem.module.css';

export const DropDownItem = ({ item, setSearchValue }) => {
  return (
      <Link to={`/movies/${item.id}`} className={styles.link} onClick={() => setSearchValue('')}>
        <div className={styles.searchItem}>{item.title}</div>
      </Link>
  );
}
