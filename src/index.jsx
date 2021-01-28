import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

import './styles/index.css';

const rootElement = document.querySelector("#root");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement

);

 // Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
 // Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
 if (import.meta.hot) {
  import.meta.hot.accept();
}