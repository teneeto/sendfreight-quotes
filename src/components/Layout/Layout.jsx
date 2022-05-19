import React from 'react';
import styled from 'styled-components';

import {Logo} from '../../components';
import UserProfile from '../UserProfile';
import ListItem from '../ListItem';
import Divider from '../Divider';
import Appbar from '../Appbar';
import Drawer from '../Drawer';
import List from '../List';
import Pagination from '../Pagination';

const Layout = ({children, renderFilters}) => {
  return (
    <Container>
      <Drawer>
        <Nav>
          <Logo />
          <List marginTop={2}>
            <ListItem iconName="home" title="Dashboard" />
            <ListItem iconName="note" title="Quotes" active />
            <ListItem iconName="book" title="Bookings" />
            <ListItem iconName="ship" title="Shipments" />
            <ListItem iconName="wallet" title="Trade Finance" />
          </List>

          <Divider />

          <List>
            <ListItem iconName="credit-card" title="Billings" />
            <ListItem iconName="tag" title="Products" />
            <ListItem iconName="scale" title="Fixed Rates" />
            <ListItem iconName="user" title="Network" />
            <ListItem iconName="folder" title="Reports" />
          </List>

          <List marginTop={2}>
            <ListItem iconName="bell" title="Notification" />
            <ListItem iconName="setting" title="Settings" />
            <ListItem iconName="headset" title="Support" />
          </List>
        </Nav>

        <UserProfile />
      </Drawer>

      <BodyContainer>
        <Appbar>{renderFilters}</Appbar>
        <Children>{children}</Children>
        <Pagination />
      </BodyContainer>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
  width: 100vw;
`;
const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 100vh;
  height: 100vh;
`;
const Nav = styled.nav`
  margin-top: ${1.5 * 16}px;
`;
const Children = styled.div`
  overflow-y: scroll;
  height: 75%;
  border-bottom: 1px solid ${({theme}) => theme.colors.border_color}; ;
`;
