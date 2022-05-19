import React from 'react';
import styled from 'styled-components';

import {useAppTheme} from '../../theme';
import Icon from '../Icon';

const ListItem = ({iconName, title, active}) => {
  const {colors} = useAppTheme();

  return (
    <Li active={active}>
      {iconName && (
        <IconWrapper>
          {active ? (
            <Icon name={iconName} color={colors.primary} />
          ) : (
            <Icon name={iconName} color={colors.light_grey_text} />
          )}
        </IconWrapper>
      )}
      {title}
    </Li>
  );
};

export default ListItem;

const Li = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  padding: ${8}px;
  padding-left: ${2 * 11.5}px;
  border-radius: 0 8px 8px 0;
  margin: 4px 20px 0 0;
  color: ${({theme, active}) =>
    active ? theme.colors.primary : theme.colors.light_grey_text};
  background-color: ${({theme, active}) =>
    active ? theme.colors.sidebar_active : 'none'};
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: ${({theme}) => theme.colors.sidebar_active};
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
`;
