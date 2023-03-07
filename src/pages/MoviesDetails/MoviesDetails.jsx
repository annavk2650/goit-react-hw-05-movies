import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getDetails } from 'services/Api';
import {
  About,
  Button,
  Description,
  Genre,
  Img,
  Info,
  InfoLink,
  MainTitle,
  Movies,
  Nav,
  Score,
  Title,
} from './MoviesDetails.styled';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backPage = useRef(location.state?.from || '/');

  useEffect(() => {
    getDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Link to={backPage.current}>
        <Button type="button"> &#60;&ensp; Go back</Button>
      </Link>

      <Movies>
        <Img
          src={(movie.poster_path = `https://www.themoviedb.org/t/p/w500/${movie.poster_path}`)}
          alt={movie.title}
          width="250"
        />
        <About>
          <MainTitle>
            {movie.title} ({new Date(movie.release_date).getFullYear()})
          </MainTitle>
          <Score>User Score: {Math.floor(movie.vote_average * 10)}%</Score>
          <Title>
            Overview
            <Description>{movie.overview}</Description>
          </Title>
          {movie.genres && (
            <>
              <Title>Genres</Title>
              <Genre>
                {movie.genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </Genre>
            </>
          )}
        </About>
      </Movies>

      <Nav>
        <Info>Additional information</Info>

        <InfoLink to={'cast'}>Cast</InfoLink>

        <InfoLink to={'reviews'}>Reviews</InfoLink>
      </Nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MoviesDetails;
