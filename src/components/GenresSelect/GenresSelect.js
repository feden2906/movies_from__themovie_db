import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import queryString from "query-string";

import styles from "./GenresSelect.module.css";
import { useEffect, useState } from "react";

export const GenresSelect = () => {
  const { search } = useLocation();
  const history = useHistory();
  const { theme, genres } = useSelector(({ theme: { theme }, genres: { genres } }) => ({ theme, genres }));

  const [chosenGenre, setChosenGenre] = useState(null);

  useEffect(() => {
    const { with_genres } = queryString.parse(search) || {};

    setChosenGenre(with_genres);
  }, [search]);

  const chooseGenre = ({ target: { value } }) => {
    const query = queryString.parse(search);
    query.with_genres = value;

    if (value === 'Show all genres') {
      delete query.with_genres;
    }

    history.push('/movies?' + queryString.stringify(query));
  };

  return (
      <select className={`${styles.input} ${theme ? styles.dark : styles.white}`} onChange={chooseGenre}>
        <option selected={!!chosenGenre}>Show all genres</option>
        {
          genres && genres.map(value => <option key={value.id} selected={value.id === +chosenGenre} value={value.id}>{value.name}</option>)
        }
      </select>
  );
}
