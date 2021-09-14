import * as React from 'react';
import Navbar from '../../nav/Navbar';
import CharacterList from '../characters/CharacterList';
import './Home.css';

export const Home: React.FC = () => {

  return (
    <>
      <Navbar />
      <main className="home-main">
        <h1 className="home-title">
          One
        </h1>
        <CharacterList />
      </main>
    </>
  );
}
