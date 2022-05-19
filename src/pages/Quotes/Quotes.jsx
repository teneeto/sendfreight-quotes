import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import {Layout} from '../../components';
import Quote from './components/Quote';

import {DATA} from '../../mock/data';

const Quotes = () => {
  const [status, setStatus] = useState('all');
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(DATA);
  }, []);

  const handleFilter = filterStatus => () => {
    setStatus(filterStatus);
    if (filterStatus === 'all') return setData(DATA);
    const filtered = DATA.filter(item => item.status === filterStatus);
    setData(filtered);
  };

  const getStatusCount = filterStatus => {
    return DATA.filter(item => item.status === filterStatus).length;
  };

  return (
    <Layout
      renderFilters={
        <FilterWrapper>
          <Filter status={status === 'all'} onClick={handleFilter('all')}>
            <div>
              <Title>All</Title>
              <Label>{DATA.length}</Label>
            </div>
            <div className="hover-set"></div>
          </Filter>

          <Filter
            status={status === 'pending'}
            onClick={handleFilter('pending')}>
            <div>
              <Title>Pending</Title>
              <Label>{getStatusCount('pending')}</Label>
            </div>
            <div className="hover-set"></div>
          </Filter>

          <Filter status={status === 'ready'} onClick={handleFilter('ready')}>
            <div>
              <Title>Ready</Title>
              <Label>{getStatusCount('ready')}</Label>
            </div>
            <div className="hover-set"></div>
          </Filter>

          <Filter status={status === 'booked'} onClick={handleFilter('booked')}>
            <div>
              <Title>Booked</Title>
              <Label>{getStatusCount('booked')}</Label>
            </div>
            <div className="hover-set"></div>
          </Filter>
        </FilterWrapper>
      }>
      {data.map(item => (
        <Quote
          key={item.orderNumber}
          order={item.order}
          orderNumber={item.orderNumber}
          orderFrom={item.orderFrom}
          orderTo={item.orderTo}
          orderDate={item.orderDate}
          deliveryDate={item.deliveryDate}
          price={item.price}
          status={item.status}
        />
      ))}
    </Layout>
  );
};

export default Quotes;

const FilterWrapper = styled.div`
  display: flex;
  margin-top: ${1 * 16}px;
`;

const Filter = styled.div`
  height: 30px;
  margin-right: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div:first-of-type {
    display: flex;
  }
  .hover-set {
    display: ${({status}) => (status ? 'block' : 'none')};
    height: 4px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: ${({theme}) => theme.colors.primary};
  }
  &:hover {
    .hover-set {
      display: block;
    }
  }
`;

const Title = styled.p`
  font-size: 14px;
`;
const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  height: 20px;
  width: 26px;
  border-radius: 8px;
  color: ${({theme}) => theme.colors.dark_grey_text};
  background-color: rgba(233, 236, 241, 0.6);
  margin-left: 5px;
`;
