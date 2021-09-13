import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from '../src/components/app/App';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
