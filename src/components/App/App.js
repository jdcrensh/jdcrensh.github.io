import React from 'react';
import styled, { keyframes } from 'styled-components/macro';
import logo from './logo.svg';

const App = () => (
  <Wrapper>
    <Header>
      <Logo />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <LearnReact
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </LearnReact>
    </Header>
  </Wrapper>
);

const Wrapper = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled.img.attrs({ src: logo, alt: 'logo' })`
  animation: ${rotate} infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`;

const LearnReact = styled.a`
  color: #61dafb;
`;

export default App;
