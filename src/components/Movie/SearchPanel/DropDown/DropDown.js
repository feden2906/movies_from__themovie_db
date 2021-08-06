import { useSelector } from "react-redux";

import styles from './DropDown.module.css';
import { DropDownItem } from "../DropDownItem";
import { Loading } from "../../Loading";

export const DropDown = ({ searchItems, loading, ...rest }) => {
  const { theme } = useSelector(({theme}) => theme);

  if (!searchItems.length && loading) {
    return (
        <div className={`${styles.dropDownPanel} ${theme ? styles.dark : styles.white}`}>
          <Loading/>
        </div>
    )
  }

  return (
      <div className={`${styles.dropDownPanel} ${theme ? styles.dark : styles.white}`}>
        {
          !searchItems.length && loading && <Loading/>
        }
        {
          searchItems.length
              ? searchItems.map(item => <DropDownItem key={item.id} item={item} {...rest}/>)
              : <h3 className={styles.notFound}>Sorry... Film not found 🥺</h3>
        }
      </div>
  );
}
