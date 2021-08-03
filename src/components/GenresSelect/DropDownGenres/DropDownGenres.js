import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import Checkbox from '@material-ui/core/Checkbox';
import queryString from "query-string";

import styles from './DropDownGenres.module.css';

export const DropDownGenres = ({ genres, chosenGenres }) => {    // TODO controlled form
  const location = useLocation();
  const history = useHistory();

  const { theme } = useSelector(({ theme }) => theme);

  const onChange = (id) => {
    const query = queryString.parse(location.search);

    if (query.with_genres) {
      let arr = query.with_genres.split(',');

      if (arr.includes(id)) {
        arr = arr.filter(value => value !== id);
      } else {
        arr.push(id);
      }

      query.with_genres = arr.join(',');
    } else {
      query.with_genres = id;
    }

    if (!query.with_genres.length) delete query.with_genres;
    history.push('/movies?' + queryString.stringify(query));
  }

  return (
      <form className={`${styles.dropDownPanel} ${theme ? styles.dark : styles.white}`}>
        {
          genres.map(item => {
            return (
                <div key={item.id}>
                  <Checkbox
                      onChange={() => onChange(item.id.toString())}
                      checked={chosenGenres?.includes(item.id.toString())}
                      color="primary"
                      inputProps={{ 'aria-label': 'secondary checkbox' }}
                  />
                  {item.name}
                </div>
            )
          })
        }
      </form>
  );
}
