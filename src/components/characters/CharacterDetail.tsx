import React from 'react';
import { useHistory } from 'react-router';
import { useSingleCharacter } from '../../hooks/characters';

const CharacterDetail: React.FC = () => {
  const { loading, singleCharacter } = useSingleCharacter();
  const history = useHistory();

  if (loading || !singleCharacter) return <h1>Loading character...</h1>;

  const { name, race, gender, spouse, wikiUrl } = singleCharacter;

  return (
    <section>
      <button onClick={() => history.push('/')}>Home</button>
      <h1>{`name: ${name}`}</h1>
      <h2>{`race: ${race}`}</h2>
      <h2>{`gender: ${gender}`}</h2>
      <h2>{`spouse: ${spouse}`}</h2>
      <h3>{`wikiUrl: ${wikiUrl}`}</h3>
    </section>
  );
};

export default CharacterDetail;
