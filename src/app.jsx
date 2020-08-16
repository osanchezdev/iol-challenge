import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.scss';
import GnomesProvider from './context/gnomesContext';

const App = () => {
  return <h1>Hello Wepack!</h1>;
};
ReactDOM.render(
  <React.StrictMode>
    <GnomesProvider>
      <App />
    </GnomesProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
