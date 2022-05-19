import React from 'react';
import styled from 'styled-components';

const Logo = () => {
  return (
    <Container>
      Send <span>Freight</span>
    </Container>
  );
};

export default Logo;

const Container = styled.div`
  padding-left: 16px;
  font-size: 20px;
  color: ${({theme}) => theme.colors.primary};

  span:last-of-type {
    font-family: ${({theme}) => theme.fonts.gilroy_extrabold};
    text-transform: uppercase;
  }
`;
