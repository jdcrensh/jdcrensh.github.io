import React from 'react';
import * as S from './styles';

const App = () => (
  <>
    <S.App>
      <S.Header>
        <S.Logo />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <S.LearnReact
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </S.LearnReact>
      </S.Header>
    </S.App>
  </>
);

export default App;
