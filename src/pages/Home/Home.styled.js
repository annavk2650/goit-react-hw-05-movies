import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Main = styled.div`
  padding: 10px;
`;

export const Title = styled.h2`
  text-align: center;
  color: white;
`;

export const MoviesList = styled.ul`
  display: grid;
  max-width: calc(100vw - 35px);
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 16px;
  margin: 10px auto 0px;
  padding: 0px 0px 30px;
  list-style: none;
`;

export const MoviesItem = styled.li`
  border-radius: 5px;
  box-shadow: inset rgba(0, 0, 0, 0.5) -3px -3px 8px, inset rgba(255, 255, 255, 0.9) 3px 3px 8px,
    rgba(0, 0, 0, 0.8) 3px 3px 8px -3px;
  overflow: hidden;
`;

export const LinkPoster = styled(Link)`
  text-decoration: none;
`;

export const Poster = styled.img`
  display: inline-block;
  max-width: 100%;
  height: auto;
  width: 100%;
  min-height: 410px;

  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

export const MovieTitle = styled.p`
  display: flex;
  justify-content: center;
  padding-top: 18px;
  padding-bottom: 22px;
  align-items: center;
  text-align: center;
  font-style: italic;
  color: white;
  color: black;
`;
