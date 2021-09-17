import React from 'react';
import { useCharacters } from '../../hooks/characters';
import CharacterItem from './CharacterItem';

const CharacterList: React.FC = () => {

  const { characters, loading } = useCharacters();

  const characterItems = characters.map(character => (
    <li
      key={`${character.id}`}
    >
      <CharacterItem {...character} />
    </li>
  )
  )

  if (loading) return <h1>Loading...</h1>

  return (
    <div>
      <ul>
        {characterItems}
      </ul>
    </div>
  );
}

export default CharacterList;
