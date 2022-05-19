import React, {useState, useEffect} from 'react';

import {Layout} from '../../components';
import Quote from './components/Quote';

import {DATA} from '../../mock/data';
import Skeleton from './components/Skeleton';
import Filters from './components/Filters';

const Quotes = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData(DATA);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Layout
      renderFilters={
        <Filters setLoading={setLoading} setData={setData} data={DATA} />
      }>
      {loading ? (
        <Skeleton />
      ) : (
        <>
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
        </>
      )}
    </Layout>
  );
};

export default Quotes;
