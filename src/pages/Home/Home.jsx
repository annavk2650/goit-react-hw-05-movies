import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrending } from 'services/Api';
import { LinkPoster, Main, MoviesItem, MoviesList, MovieTitle, Poster, Title } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrending().then(setMovies);
  }, []);

  return (
    <>
      <Main>
        <Title>Trending today</Title>
        <MoviesList>
          {movies.map(movie => (
            <MoviesItem key={movie.id}>
              <LinkPoster to={`movies/${movie.id}`} state={{ from: location }}>
                <Poster
                  src={
                    (movie.poster_path = `https://www.themoviedb.org/t/p/w500/${movie.poster_path}`)
                  }
                  alt={movie.title}
                />
                <MovieTitle>{movie.title}</MovieTitle>
              </LinkPoster>
            </MoviesItem>
          ))}
        </MoviesList>
      </Main>
    </>
  );
};
export default Home;
