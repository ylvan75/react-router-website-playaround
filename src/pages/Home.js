import React from 'react';
import styled from 'styled-components/macro';

const Home = () => {
  return (
    <Wrapper>
      <h1>Home</h1>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;
