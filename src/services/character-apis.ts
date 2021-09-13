import { Character } from '../types/types';
const url = process.env.REACT_APP_API_URL as string;

export const getCharacters = async (): Promise<Character[]> => {
  const res = await fetch(url);
  const json = await res.json();

  if (!res.ok) throw new Error('Something went wrong');

  return json;
};
