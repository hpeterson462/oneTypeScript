import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Home } from '../pages/home/Home';
import { DetailPage } from '../pages/detailPage/DetailPage';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/detail:id' exact component={DetailPage} />
        <Route path='/' render={() => <div>404</div>} />
      </Switch>
    </Router>
  );
}
export default App;
