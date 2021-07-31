import { AXIOS } from "./axiosConfig";

const getMovies = async (params) => {
  const { data } = await AXIOS.get('/discover/movie', { params }) || {};
  return data;
}

const getMoviesBySearchValue = async (params) => {
  const { data } = await AXIOS.get(`/search/movie${params}`) || {};
  return data;
}

const getMovieDetailsById = async (movieId) => {
  const { data } = await AXIOS.get(`/movie/${movieId}`) || {};
  return data;
}

export { getMovies, getMoviesBySearchValue, getMovieDetailsById };


