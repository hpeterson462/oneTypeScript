import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  id: string,
  name: string
}

const CharacterItem: React.FC<Props> = ({ id, name }) => {
  return (
    <Link to={`/detail/${id}`}>
      <h3>{name}</h3>
    </Link>
  );
};

export default CharacterItem;
