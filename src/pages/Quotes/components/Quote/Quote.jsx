import React from 'react';
import styled from 'styled-components';
import {Icon} from '../../../../components';
import {useAppTheme} from '../../../../theme';
import QuoteListItem from '../QuoteListItem';

const Quote = ({
  order,
  orderNumber,
  orderFrom,
  orderTo,
  orderDate,
  deliveryDate,
  price,
  status,
}) => {
  const {colors} = useAppTheme();

  const getStatusColor = () => {
    switch (status) {
      case 'pending':
        return colors.orange;
      case 'ready':
        return colors.green;
      case 'booked':
        return colors.lighter_grey_text;

      default:
        return colors.pending;
    }
  };
  return (
    <Container>
      <Imports>
        <OrderWrapper>
          <Icon name="ship" color={colors.lighter_grey_text} size={20} />
          <OrderNumber>{orderNumber}</OrderNumber>
          <Icon name="dot" />
          <Order>{order}</Order>
        </OrderWrapper>
        <ImportButton>Import</ImportButton>
      </Imports>

      <QuoteListItem heading={orderFrom} subHeading={`Ready: ${orderDate}`} />
      <Icon name="arrow-right" />
      <QuoteListItem
        heading={orderTo}
        subHeading={`Expires: ${deliveryDate}`}
      />
      <QuoteListItem heading={`₦ ${price}`} />
      <QuoteListItem subHeading={status} subHeadingColor={getStatusColor} />
    </Container>
  );
};

export default Quote;

const Container = styled.div`
  display: grid;
  grid-template-columns: 4fr 3fr 2fr repeat(2, 3fr) 1fr;
  /* display: flex; */
  align-items: center;
  padding: 16px ${2 * 16}px 16px ${2 * 16}px;
  border: 1px solid ${({theme}) => theme.colors.item_bg};
`;

const Imports = styled.div``;
const OrderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const OrderNumber = styled.p`
  text-transform: uppercase;
  margin: 0 ${16 / 2}px 0 ${16 / 2}px;
  color: ${({theme}) => theme.colors.primary};
`;
const Order = styled(OrderNumber)`
  font-size: 14px;
  text-transform: capitalize;
  color: ${({theme}) => theme.colors.black};
`;
const ImportButton = styled.button`
  background-color: transparent;
  outline: none;
  border: 1px solid ${({theme}) => theme.colors.lighter_grey_text};
  color: ${({theme}) => theme.colors.lighter_grey_text};
  font-size: 8px;
  padding: 4px 8px 4px 8px;
  border-radius: 8px;
  text-transform: uppercase;
`;
