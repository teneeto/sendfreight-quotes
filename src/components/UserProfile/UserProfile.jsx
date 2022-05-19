import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';

const UserProfile = () => {
  return (
    <Container>
      <AvatarWrapper>
        <Avatar>UK</Avatar>
      </AvatarWrapper>
      <NameWrapper>
        <p>Mati Industries</p>
        <p>lanremati@gmail.com</p>
      </NameWrapper>
      <Icon name="chevron-down" />
    </Container>
  );
};

export default UserProfile;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  padding-left: ${2 * 11.5}px;
  padding-right: 11.5px;
  background-color: ${({theme}) => theme.colors.pale};
`;

const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  font-family: ${({theme}) => theme.fonts.inter_semibold};
  color: ${({theme}) => theme.colors.white};
  background-color: ${({theme}) => theme.colors.dark};
  text-transform: capitalize;
`;

const AvatarWrapper = styled.div``;

const NameWrapper = styled.div`
  margin: 0 8px 0 8px;
  font-size: 13px;
  p {
    line-height: 20px;
  }
  p:first-of-type {
    font-family: ${({theme}) => theme.fonts.inter_medium};
    color: ${({theme}) => theme.colors.dark};
  }
  p:last-of-type {
    color: ${({theme}) => theme.colors.lighter_grey_text};
    font-size: 11px;
  }
`;
