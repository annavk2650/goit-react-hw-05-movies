// import { Loader } from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/Api';
import { Author, Content, Item, Review } from './Reviews.styled';
import ShowMoreText from 'react-show-more-text';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <>
      {reviews.length ? (
        <Review>
          {reviews.map(review => (
            <Item key={review.id}>
              <Author>{review.author}:</Author>
              <Content>
                <ShowMoreText
                  charLimit={30}
                  readMoreText={'Read more ▼'}
                  readLessText={'Read less ▲'}
                >
                  "{review.content}"
                </ShowMoreText>
              </Content>
            </Item>
          ))}
        </Review>
      ) : (
        <Content>We don't have any reviews for this movie.</Content>
      )}
    </>
  );
};
export default Reviews;
