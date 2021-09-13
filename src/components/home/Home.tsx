import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import './Home.css';

interface Props extends RouteComponentProps { }

export const Home: React.FC<Props> = () => {
  return (
    <main className="home-main">
      <h1 className="home-title">
        One
      </h1>
    </main>
  );
}
