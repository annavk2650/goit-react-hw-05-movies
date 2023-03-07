import axios from 'axios';

const API_KEY = '5f61bbc4be8c630bff5f11f3eb886ee5';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrending = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};

export const getDetails = async movieId => {
  const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
};

export const getCast = async movieId => {
  const response = await axios.get(`movie/${movieId}/credits?api_key=${API_KEY}`);
  return response.data.cast;
};

export const getReviews = async movieId => {
  const response = await axios.get(`movie/${movieId}/reviews?api_key=${API_KEY}`);
  return response.data.results;
};

export const getQuery = async query => {
  const response = await axios.get(`search/movie?api_key=${API_KEY}&query=${query}`);
  return response.data.results;
};
