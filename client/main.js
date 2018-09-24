import React from 'react';
import { render } from 'react-dom';
import Routes from './components/routes';

fetch('/auth/spotify');

render(
  <Routes/>,
  document.querySelector('#root')
);