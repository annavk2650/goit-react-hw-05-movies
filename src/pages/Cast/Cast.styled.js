import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: -15px;
  text-align: center;
  min-height: 450px;
`;

export const CastItem = styled.li`
  width: 200px;
  height: 350px;
  margin: 15px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`;

export const CastImg = styled.img`
  height: 250px;
  width: 100%;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.08);
    cursor: zoom-in;
  }
`;
export const CastName = styled.h4`
  margin-bottom: 0px;
  font-size: 17px;
  font-weight: 600;
  color: black;
`;

export const CastCharacter = styled.p`
  font-size: 15px;
  color: black;
`;
