import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getQuery } from 'services/Api';
import {
  Button,
  Form,
  Input,
  MovieLink,
  MoviePoster,
  MoviesItem,
  MoviesList,
  MovieTitle,
  Wraper,
} from './Movies.styled';
import noPhoto from '../../images/no_image.jpg';
import NotFound from 'pages/NotFound/NotFound';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const location = useLocation();

  const handleSubmit = evt => {
    evt.preventDefault();

    setSearchParams({ query: movieName });

    if (!movieName) {
      return toast.info('Type something to find');
    }

    setMovieName('');
  };

  const onInputChange = evt => {
    const form = evt.currentTarget;
    const newQuery = form.value;

    setMovieName(newQuery);
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    getQuery(query).then(setMovies);
  }, [query]);

  return (
    <Form onSubmit={handleSubmit}>
      <Wraper>
        <Input
          type="text"
          value={movieName}
          autoComplete="off"
          autoFocus
          placeholder="Enter movie name..."
          onChange={onInputChange}
        />
        <ToastContainer />
        <Button type="submit">Search</Button>
      </Wraper>
      {movies.length ? (
        <MoviesList>
          {movies.map(movie => (
            <MoviesItem key={movie.id}>
              <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
                <MoviePoster
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                      : noPhoto
                  }
                  alt=""
                  width="320"
                />
                <MovieTitle>{movie.title}</MovieTitle>
              </MovieLink>
            </MoviesItem>
          ))}
        </MoviesList>
      ) : (
        query && <NotFound />
      )}
    </Form>
  );
};

export default Movies;
