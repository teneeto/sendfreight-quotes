import React from 'react';
import styled from 'styled-components';

const Divider = () => {
  return <Item />;
};

export default Divider;

const Item = styled.hr`
  background-color: ${({theme}) => theme.colors.lighter_grey_text};
  opacity: 0.1;
`;
