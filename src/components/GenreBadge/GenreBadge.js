import { useSelector } from "react-redux";

export const GenreBadge = ({genre_ids}) => {
  const genres = useSelector(({ genres: { genres } }) => genres);
  const genresForOneMovie = genre_ids.map(value => genres.find(genre => genre.id === value));

  return (
      <h5>
        {
          genresForOneMovie.map(({ name, id }) => (<span key={id}>-{name}- </span>))
        }
      </h5>
  );
}
