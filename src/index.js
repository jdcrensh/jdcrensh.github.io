import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './GlobalStyles';

const Root = () => (
  <>
    <GlobalStyles />
    <App />
  </>
);

ReactDOM.render(<Root />, document.getElementById('root'));
