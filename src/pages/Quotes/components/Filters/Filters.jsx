import React, {useState} from 'react';
import styled from 'styled-components';

const statusData = [
  {
    status: 'pending',
  },
  {
    status: 'ready',
  },
  {
    status: 'booked',
  },
];

const Filters = ({setLoading, setData, data}) => {
  const [status, setStatus] = useState('all');
  const DATA = data;

  const handleFilter = filterStatus => () => {
    setLoading(true);
    setStatus(filterStatus);
    if (filterStatus === 'all') {
      setData(DATA);
      return setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
    const filtered = DATA.filter(item => item.status === filterStatus);
    setData(filtered);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const getStatusCount = filterStatus => {
    return DATA.filter(item => item.status === filterStatus).length;
  };

  return (
    <FilterWrapper>
      <Filter status={status === 'all'} onClick={handleFilter('all')}>
        <div>
          <Title>All</Title>
          <Label>{DATA.length}</Label>
        </div>
        <div className="hover-set"></div>
      </Filter>

      {statusData.map((item, index) => (
        <Filter
          key={index.toString()}
          status={status === item.status}
          onClick={handleFilter(item.status)}>
          <div>
            <Title>{item.status}</Title>
            <Label>{getStatusCount(item.status)}</Label>
          </div>
          <div className="hover-set"></div>
        </Filter>
      ))}
    </FilterWrapper>
  );
};

export default Filters;

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
  text-transform: capitalize;
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
