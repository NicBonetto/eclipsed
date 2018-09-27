import React from 'react';
import styled from 'styled-components';
import App from '../layouts/app';

const HeaderContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;

const Header = styled.div`
color: rgb(162, 167, 171);
font-family: 'Roboto', sans-serif;
font-weight: 300;
letter-spacing: 1;
`;

const SearchPage = () => {
  return (
    <App>
      <HeaderContainer>
        <Header>
          <h3>Hype</h3>
        </Header>
      </HeaderContainer>
      <HeaderContainer>
        <Header>
          <p>Discover artists through an infinite chain of suggestions</p>
        </Header>
      </HeaderContainer>
    </App>
  );
};

export default SearchPage;