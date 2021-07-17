import { Link } from "react-router-dom";

import styles from './MoviesListCard.module.css';
import { GenreBadge } from "../GenreBadge";

const imgBuilder = (posterPath, size = 200) => `https://image.tmdb.org/t/p/w${size}${posterPath}`;

export const MoviesListCard = ({ item }) => {
  const { original_title, release_date, vote_average, vote_count, poster_path, genre_ids } = item;
  let { overview } = item;

  if (overview.length > 200) {
    overview = `${overview.slice(0, 200)} ...`;
  }
  // <Link to={`/movies/${item.id}`} className={styles.link}
  return (
      <Link to={`/movies/${item.id}`} className={styles.wrapper}>
        <div
            style={{
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100%',
              backgroundPosition: 'center',
              height: 300,
              width: '100%',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              backgroundImage: `url(${imgBuilder(poster_path)})`
            }}>
        </div>
        <div>
          <h3>{original_title}</h3>

          <GenreBadge genre_ids={genre_ids}/>

          <span><b>Rating:</b> {vote_average} (total votes: {vote_count})</span>
          <p className={styles.overview}>{overview}</p>
          <span><b>Release date:</b> {release_date}</span>
        </div>
      </Link>
  );
}
