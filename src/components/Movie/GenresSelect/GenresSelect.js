import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import queryString from "query-string";

import styles from "./GenresSelect.module.css";
import { DropDownGenres } from "./DropDownGenres";

export const GenresSelect = () => {
  const { search } = useLocation();
  const { theme, genres } = useSelector(({ theme: { theme }, genres: { genres } }) => ({ theme, genres }));

  const [chosenGenres, setChosenGenres] = useState([]);
  const [dropDownIsVisible, setDropDownIsVisible] = useState(false);

  useEffect(() => {
    const { with_genres } = queryString.parse(search) || {};
    const arr = with_genres?.split(',');

    setChosenGenres(arr);
  }, [search]);

  return (
      <div onMouseLeave={() => setDropDownIsVisible(false)}>
        <button
            onClick={() => setDropDownIsVisible(true)}
            className={`${styles.input} ${theme ? styles.dark : styles.white}`}>Choose genres
        </button>

        {
          dropDownIsVisible && !!genres?.length && <DropDownGenres genres={genres} chosenGenres={chosenGenres}/>
        }
      </div>
  );
}
