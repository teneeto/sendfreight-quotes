import React from 'react';
import styled, {keyframes} from 'styled-components';

const arr = [1, 2, 3, 4, 5, 6];
const arr2 = [1, 2, 3, 4, 5];

const Skeleton = () => {
  return (
    <>
      {arr.map(x => (
        <Container key={x}>
          {arr2.map(item => (
            <Imports key={item}>
              <OrderWrapper></OrderWrapper>
              <ImportButton></ImportButton>
            </Imports>
          ))}
        </Container>
      ))}
    </>
  );
};

export default Skeleton;

const shine = keyframes`
  to {
    background-position-x: -200%;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 3fr);
  align-items: center;
  padding: 16px ${2 * 16}px 16px ${2 * 16}px;
  border: 1px solid ${({theme}) => theme.colors.item_bg};
`;

const Imports = styled.div``;
const OrderWrapper = styled.div`
  margin-bottom: 10px;
  width: 200px;
  height: 30px;
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  border-radius: 5px;
  background-size: 200% 100%;
  animation: ${shine} 2s linear infinite;
`;

const ImportButton = styled(OrderWrapper)`
  width: 100px;
  height: 20px;
`;
