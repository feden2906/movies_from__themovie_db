import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import queryString from "query-string";

import styles from "./SearchPanel.module.css";
import { DropDown } from "./DropDown";
import { getMoviesBySearchValue } from "../../services";

export const SearchPanel = () => {
  const location = useLocation();
  const history = useHistory();
  const { theme } = useSelector(({theme}) => theme);

  const [searchValue, setSearchValue] = useState('');
  const [searchItems, setSearchItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const typeSearchValue = async ({ currentTarget: { value } }) => {
    setSearchValue(value);

    if (value) {
      try {
        setLoading(true);
        setSearchItems([]);
        const { results } = await getMoviesBySearchValue(`?query=${value}`) || {};
        setSearchItems(results);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false)
      }
    }
  };

  const getMoviesFromDB = async (e) => {
    e.preventDefault();

    const query = queryString.parse(location.search);
    query.query = searchValue;
    query.page = '1';

    if(!searchValue) {
      delete query.query;
    }

    history.push('/movies?' + queryString.stringify(query));
    setSearchValue('');
  };

  return (
      <div>
        <form onSubmit={getMoviesFromDB}>
          <input onInput={typeSearchValue}
                 value={searchValue}
                 className={`${styles.searchInput} ${theme ? styles.dark : styles.white}`}/>
        </form>

        {
          searchValue && <DropDown searchItems={searchItems} loading={loading} setSearchValue={setSearchValue}/> // TODO вимикати коли інпут неактивний
        }
      </div>
  );
}
