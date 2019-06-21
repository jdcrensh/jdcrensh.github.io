import styled from 'styled-components';
import logo from './logo.svg';

export const App = styled.div`
  text-align: center;
`;

export const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const Logo = styled.img.attrs({ src: logo, alt: 'logo' })`
  animation: logo-spin infinite 20s linear;
  height: 40vmin;
  pointer-events: none;

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const LearnReact = styled.a`
  color: #61dafb;
`;
