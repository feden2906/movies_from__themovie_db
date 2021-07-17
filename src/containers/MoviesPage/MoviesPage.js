import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useLocation } from "react-router-dom";
import queryString from "query-string";

import styles from "./MoviesPage.module.css";
import { MovieInfo, MoviesList } from "../../components";
import { SET_GENRES, SET_LOADING, SET_MOVIES_DATA } from "../../redux/action-types";
import { getGenres, getMovies, getMoviesBySearchValue } from "../../services";

export const MoviesPage = () => {
  const dispatch = useDispatch();
  const {search} = useLocation();

  const { genres } = useSelector(({ genres }) => genres);

  useEffect(() => {
    (async function() {
      try {
        dispatch({ type: SET_LOADING, payload: true });

        const parsed = queryString.parse(search);
        let movies = [];

        if (parsed.find) {
          movies = await getMoviesBySearchValue({ query: parsed.find }) || {};
        } else {
          movies = await getMovies();
        }
        dispatch({ type: SET_MOVIES_DATA, payload: movies });

        if (!genres) {
          const genres = await getGenres();
          dispatch({ type: SET_GENRES, payload: genres })
        }
      } catch (e) {
        console.error(e);
      } finally {
        dispatch({ type: SET_LOADING, payload: false })
      }
    })();
  }, [dispatch, genres, search]);

  return (
      <div className={styles.movies_page}>
        <Switch>
          <Route exact path="/movies/:id" component={MovieInfo}/>
          <Route path="/movies" component={MoviesList}/>
        </Switch>
      </div>
  );
}
