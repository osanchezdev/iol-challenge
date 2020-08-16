import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.scss';
import GnomesProvider from './context/gnomesContext';

import Home from './components/Home';

const App = () => {
  return <Home />;
};
ReactDOM.render(
  <React.StrictMode>
    <GnomesProvider>
      <App />
    </GnomesProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
