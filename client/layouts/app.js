import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/navbar';

const Wrapper = styled.div`
  height: 100vh;
  background-image: linear-gradient(
    to right,
    #272c30,
    #1d2224
  );
`;

const App = ({ children }) => {
  return (
    <Wrapper>
      <Navbar/>
      { children }
    </Wrapper>
  );
};

export default App;