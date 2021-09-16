import { Character } from '../types/types';

const url: string = (process.env.ONE_APP_API_URL as string);

export const getCharacters = (): Promise<Character[]> => {
  return fetch('https://the-one-api.dev/v2/character', {
    headers: {
      'Authorization': `Bearer pvHkTVdmM4UBgOO_K0ag`
    }
  })
    .then(res => res.json())
    .then(json => json.docs);
};

export const getCharactersById = (id: string): Promise<Character> => {
  return fetch(`https://the-one-api.dev/v2/character/${id}`, {
    headers: {
      'Authorization': `Bearer pvHkTVdmM4UBgOO_K0ag`
    }
  })
    .then(res => res.json())
    .then(json => json.docs[0]);
};
