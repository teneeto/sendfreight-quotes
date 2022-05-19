import React from 'react';
import styled from 'styled-components';

const Appbar = ({children}) => {
  return (
    <Container>
      <TileContainer>
        <Title>Quotes</Title>
        <Button>Create New</Button>
      </TileContainer>
      {children}
    </Container>
  );
};

export default Appbar;

const Container = styled.div`
  max-width: 100%;
  padding: 0 ${2 * 16}px 0 ${2 * 16}px;
  border-bottom: 1px solid ${({theme}) => theme.colors.border_color};
`;
const TileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${16}px;
`;

const Title = styled.h1`
  font-weight: 600;
  font-size: 24px;
  color: ${({theme}) => theme.colors.dark};
`;

const Button = styled.button`
  color: ${({theme}) => theme.colors.white};
  background-color: ${({theme}) => theme.colors.primary};
  font-family: ${({theme}) => theme.fonts.inter_semibold};
  font-size: ${16}px;
  outline: none;
  border: none;
  padding: 0 ${16 / 2}px 0 ${16 / 2}px;
  height: ${2.5 * 16}px;
  border-radius: 4px;
  cursor: pointer;
`;
