import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import queryString from "query-string";

import styles from './DropDownGenres.module.css';

export const DropDownGenres = ({ genres, chosenGenres }) => {
  const location = useLocation();
  const history = useHistory();
  const { theme } = useSelector(({ theme }) => theme);
  const [generes, setGeneres] = useState(genres);

  useEffect(() => {
    const arr = []
    genres.map(value => chosenGenres?.includes(value.id.toString()) ? arr[value.id] = true : arr[value.id] = false);
    setGeneres(arr);
  }, [chosenGenres, genres]);

  const onChange = ({ target }) => {
    const { checked, name } = target;
    setGeneres([
      ...generes,
      generes[+name] = checked
    ]);

    const query = queryString.parse(location.search);

    if (query.with_genres) {
      chosenGenres.includes(name)
        ? chosenGenres = chosenGenres.filter(value => value !== name)
        : chosenGenres.push(name);

      query.with_genres = chosenGenres.join(',');
    } else {
      query.with_genres = name;
    }

    if (!query.with_genres?.length) delete query.with_genres;
    history.push('/movies?' + queryString.stringify(query));
  }

  const Checkbox2 = withStyles({
    root: {
      color: theme ? blue[400] : '',
      '&$checked': {
        color: theme ? blue[600] : '',
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  return (
      <form className={`${styles.dropDownPanel} ${theme ? styles.dark : styles.white}`}>
        {
          genres.map(item => {
            return (
                <div key={item.id}>
                  <Checkbox2
                      name={item.id.toString()}
                      onChange={onChange}
                      checked={chosenGenres?.includes(item.id.toString())}
                  />
                  {item.name}
                </div>
            )
          })
        }
      </form>
  );
}
