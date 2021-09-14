import { useEffect, useState } from 'react';
import { getCharacters } from '../services/character-apis';
import { ListCharacter } from '../types/types';

export const useCharacters = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [characters, setCharacters] = useState<ListCharacter[]>([]);

  useEffect(() => {
    getCharacters()
      .then((fetchedCharacters) => setCharacters(fetchedCharacters))
      .then(() => setLoading(false));
  }, []);

  return {
    loading,
    characters
  };
};
