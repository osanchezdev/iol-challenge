import React, {useEffect, useContext} from 'react';
import ReactDOM from 'react-dom';

import './styles/index.scss';
import GnomesProvider from './context/gnomesContext';

import {GnomesContext} from './context/gnomesContext';

const App = () => {
  const {brastlewarkGnomes, loadGnomesData} = useContext(GnomesContext);
  useEffect(() => {
    loadGnomesData();
  }, []);
  return (
    <div>
      <h1>Hello gnomes!</h1>
      {brastlewarkGnomes ? JSON.stringify(brastlewarkGnomes) : 'LOADING...'}
    </div>
  );
};
ReactDOM.render(
  <React.StrictMode>
    <GnomesProvider>
      <App />
    </GnomesProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
