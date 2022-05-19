import React from 'react';
import styled from 'styled-components';
import {Icon} from '../../../../components';
import {useAppTheme} from '../../../../theme';

const QuoteListItem = ({
  heading,
  headingIconName,
  headingColor,
  subHeading,
  subHeadingColor,
}) => {
  const {colors} = useAppTheme();

  const renderSubHeadingIcon = () => {
    return headingIconName ? (
      <Icon name={headingIconName} color={colors.lighter_grey_text} size={25} />
    ) : null;
  };
  return (
    <Container>
      {heading && (
        <Heading subHeading={subHeading}>
          {renderSubHeadingIcon()}
          <OrderNumber headingColor={headingColor}>{heading}</OrderNumber>
        </Heading>
      )}
      {subHeading && (
        <SubHeading subHeadingColor={subHeadingColor}>{subHeading}</SubHeading>
      )}
    </Container>
  );
};

export default QuoteListItem;

const Container = styled.div``;

const Heading = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({subHeading}) => (subHeading ? '10px' : 0)};
`;
const OrderNumber = styled.p`
  text-transform: capitalize;
  color: ${({theme, headingColor}) =>
    headingColor ? headingColor : theme.colors.dark};
`;

const SubHeading = styled.p`
  text-transform: capitalize;
  font-size: 13px;
  color: ${({theme, subHeadingColor}) =>
    subHeadingColor ? subHeadingColor : theme.colors.lighter_grey_text};
`;
