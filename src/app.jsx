import * as React from 'react';
import {render} from 'react-dom';
import GnomesProvider from './context/gnomesContext';
import {Routes} from './router';
import './styles/index.scss';

const App = () => {
  return <Routes />;
};
render(
  <GnomesProvider>
    <App />
  </GnomesProvider>,
  document.getElementById('root'),
);
