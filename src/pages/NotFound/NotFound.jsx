import React from 'react';
import not_found from '../../images/no_found.png';
import { ImageNotFound } from './NotFound.style';

export const NotFound = () => {
  return (
    <ImageNotFound>
      <img src={not_found} width="450" alt="error" />
    </ImageNotFound>
  );
};
export default NotFound;
