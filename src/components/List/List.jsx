import React from 'react';
import styled from 'styled-components';

const List = ({children, marginTop}) => {
  return <Ul marginTop={marginTop}>{children}</Ul>;
};

export default List;

const Ul = styled.ul`
  margin-top: ${({marginTop}) => (marginTop ? `${marginTop * 16}px` : '16px')};
  margin-bottom: ${16}px; ;
`;
