import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.scss';

const App = () => {
  return <h1>Hello Wepack!</h1>;
};
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
