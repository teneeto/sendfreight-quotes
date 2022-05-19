import React from 'react';
import styled from 'styled-components';

const Pagination = () => {
  return (
    <Container>
      <p>Showing 1 to 6 of 75 results</p>
      <p>
        <span>1</span> 2 3 ... 10
      </p>
      <input type="number" id="fname" name="fname" value={6} autoFocus></input>
    </Container>
  );
};

export default Pagination;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: ${2 * 16}px;
  margin-top: 20px;

  p:first-of-type {
    font-size: 12px;
    color: ${({theme}) => theme.colors.light_grey_text};
  }
  p:nth-of-type(2) {
    span {
      color: ${({theme}) => theme.colors.dark};
    }
    margin: 0 16px 0 16px;
    font-size: 14px;
    color: ${({theme}) => theme.colors.light_grey_text};
  }
  input {
    width: 40px;
    height: 25px;
    font-size: 14px;
    text-align: center;
    color: ${({theme}) => theme.colors.dark};
  }
`;
