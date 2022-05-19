import React from 'react';
import styled from 'styled-components';

const drawerWidth = 226;

const Drawer = ({children}) => {
  return <Container>{children}</Container>;
};

export default Drawer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${drawerWidth}px;
  height: ${`100vh`};
  background-color: ${({theme}) => theme.colors.sidebar_bg};
  border: 1px solid ${({theme}) => theme.colors.border_color};
`;
