import { AXIOS } from "./axiosConfig";

const getGenres = async () => {
  const { data: {genres} } = await AXIOS.get('/genre/movie/list') || {};
  return genres;
}

export { getGenres };
