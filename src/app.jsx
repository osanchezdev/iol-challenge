import React from 'react';
import ReactDOM from 'react-dom';
import GnomesProvider from './context/gnomesContext';
import {Routes} from './router';
import './styles/index.scss';

const App = () => {
  return <Routes />;
};
ReactDOM.render(
  <GnomesProvider>
    <App />
  </GnomesProvider>,
  document.getElementById('root'),
);
