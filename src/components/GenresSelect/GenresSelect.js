import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";

import styles from "./GenresSelect.module.css";
import { useSelector } from "react-redux";

export const GenresSelect = () => {
  const location = useLocation();
  const history = useHistory();

  const { genres } = useSelector(({ genres }) => genres);

  const chooseGenre = ({ target }) => {
    const query = queryString.parse(location.search);
    query.with_genres = target.value;

    history.push('/movies?' + queryString.stringify(query));
  };

  return (
      <select className={styles.input} onChange={chooseGenre}>
        <option>Show all genres</option>
        {
          genres && genres.map(value => <option key={value.id} selected={value.id === '99'} value={value.id}>{value.name}</option>)
        }
      </select>
  );
}
