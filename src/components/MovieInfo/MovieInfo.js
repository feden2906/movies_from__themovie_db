import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./MovieInfo.module.css";
import { Loading } from "../Loading";
import { getMovieDetailsById } from "../../services";
import { Pagination } from "../Pagination";

export const MovieInfo = () => {
  const { id } = useParams();

  const [filmDetails, setFilmDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const imgBuilder = (posterPath, size = 300) => `https://image.tmdb.org/t/p/w${size}${posterPath}`;

  const getMovieDetails = async () => {
    try {
      setIsLoading(true);
      const data = await getMovieDetailsById(id);
      setFilmDetails(data);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getMovieDetails();
  }, [id]);

  if (isLoading || !filmDetails || isLoading === null) {
    return <Loading/>
  }
  return (
      <div className={styles.wrapper}>

        <div className={styles.wrapperImg}>
          <img src={imgBuilder(filmDetails.poster_path)} alt={`${filmDetails.poster_path} poster`}/>

          <div className={styles.wrapperVote}>
            <div className={styles.vote}>
              <p className={styles.voteTitle}>MovieDB:</p>
              <hr/>
              <p className={styles.voteCount}>{filmDetails.vote_average}</p>
            </div>
            <div className={styles.vote}>
              <p className={styles.voteTitle}>Проголосувало:</p>
              <hr/>
              <p className={styles.voteCount}>{filmDetails.vote_count}</p>
            </div>
          </div>

        </div>
        <div className={styles.wrapperInfo}>
          <h1 className={styles.filmTitle}>{filmDetails.original_title}</h1>
          <p>
            <b>Жанр : </b>
            {filmDetails.genres.map(({ name }, i) => `${name}${i < filmDetails.genres.length - 1 ? ', ' : '.'}`)}
          </p>
          <p><b>Бюджет : </b>{filmDetails.budget}</p>
          <p><b>Дата релізу : </b>{filmDetails.release_date}</p>
          <p>
            <b>Країна : </b>
            {
              filmDetails.production_countries.map(({ name }, i) => `${name}${i < filmDetails.production_countries.length - 1 ? ', ' : '.'}`)
            }
          </p>
          <b>Опис :</b>
          <p>{filmDetails.overview}</p>
        </div>

      </div>
  )
}
