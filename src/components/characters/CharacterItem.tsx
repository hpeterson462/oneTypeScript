import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  _id: string,
  name: string
}

const CharacterItem: React.FC<Props> = ({ _id, name }) => {
  return (
    <Link to={`/detail/${_id}`}>
      <h3>{name}</h3>
    </Link>
  );
};

export default CharacterItem;
