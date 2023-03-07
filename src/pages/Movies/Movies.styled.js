import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Form = styled.form`
  margin: 30px auto 20px;
  text-align: center;
`;

export const Wraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
`;

export const Input = styled.input`
  padding: 8px 20px;
  border-radius: 8px;
  outline: #527c82;
  border-color: transparent;
`;

export const Button = styled.button`
  margin: 0px 10px 10px;
  padding: 10px 20px 10px;
  background-color: transparent;
  border: 2px solid #e74c3c;
  cursor: pointer;
  font-size: 0.95em;
  font-weight: 600;
  line-height: 1;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  background-color: #527c82;
  border-color: #527c82;
  border-radius: 8px;
  color: #fff;
  box-shadow: inset rgba(0, 0, 0, 0.541) -3px -3px 8px, inset rgba(255, 253, 253, 0.9) 3px 3px 8px,
    rgba(0, 0, 0, 0.8) 3px 3px 8px -3px;
  transition: all 150ms ease-in-out;
  &:hover {
    background-color: rgba(0, 0, 0, 0.356);
    color: #fff;
    box-shadow: 0 0 10px 0 #527c82 inset, 0 0 10px 4px #527c82;
    outline: 0;
  }
  &:focus {
    outline: 0;
  }
`;

export const MoviesList = styled.ul`
  display: grid;
  max-width: calc(100vw - 35px);
  margin: 10px auto 0px;
  padding: 0px 30px 0px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 16px;
  list-style: none;
`;

export const MoviesItem = styled.li`
  border-radius: 5px;
  box-shadow: inset rgba(0, 0, 0, 0.5) -3px -3px 8px, inset rgba(255, 255, 255, 0.9) 3px 3px 8px,
    rgba(90, 87, 87, 0.8) 3px 3px 8px -3px;
  overflow: hidden;
`;

export const MovieTitle = styled.p`
  text-align: center;
  font-style: italic;
  color: black;
`;

export const MoviePoster = styled.img`
  width: 100%;
  min-height: 410px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

export const MovieLink = styled(NavLink)`
  text-decoration: none;
`;
