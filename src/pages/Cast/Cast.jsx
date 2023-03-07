import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/Api';
import { CastList, CastItem, CastImg, CastName, CastCharacter } from './Cast.styled';
import noPhoto from '../../images/no_image.jpg';

const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    getCast(movieId).then(setCredits);
  }, [movieId]);

  return (
    <>
      {credits.length ? (
        <CastList>
          {credits.map(credit => (
            <CastItem key={credit.id}>
              <CastImg
                src={
                  credit.profile_path
                    ? `https://www.themoviedb.org/t/p/w500/${credit.profile_path}`
                    : noPhoto
                }
                alt={credit.original_name}
              />
              <CastName>{credit.original_name}</CastName>
              <CastCharacter>{credit.character}</CastCharacter>
            </CastItem>
          ))}
        </CastList>
      ) : (
        <div> We don't have any cast for this movie.</div>
      )}
    </>
  );
};
export default Cast;
