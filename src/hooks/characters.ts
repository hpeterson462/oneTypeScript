import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getCharacters, getCharactersById } from '../services/character-apis';
import { Character, ListCharacter } from '../types/types';

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

export const useSingleCharacter = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [singleCharacter, setSingleCharacter] = useState<Character>();

  const { id } = useParams<{ id: string }>();
  console.log('params', id);


  useEffect(() => {
    getCharactersById(id)
      .then((fetchedSingleCharacter) => setSingleCharacter(fetchedSingleCharacter))
      .then(() => setLoading(false));
  }, [id]);

  return {
    loading,
    singleCharacter,
  };
};
