import styles from './DropDown.module.css';
import { DropDownItem } from "../DropDownItem";
import { Loading } from "../../Loading";

export const DropDown = ({ searchItems, loading, ...rest }) => {

  if (!searchItems.length && loading) {
    return (
        <div className={styles.dropDownPanel}>
          <Loading/>
        </div>
    )
  }

  return (
      <div className={styles.dropDownPanel}>
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
