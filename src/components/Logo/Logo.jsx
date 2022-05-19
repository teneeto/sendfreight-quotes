import React from 'react';
import styled from 'styled-components';
import SendIcon from './SendIcon';

const Logo = () => {
  return (
    <Container>
      <SendIcon /> <span>Freight</span>
    </Container>
  );
};

export default Logo;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-left: 16px;
  font-size: 14px;
  color: ${({theme}) => theme.colors.primary};

  span:last-of-type {
    font-family: ${({theme}) => theme.fonts.gilroy_extrabold};
    text-transform: uppercase;
    margin-left: 2px;
  }
`;
