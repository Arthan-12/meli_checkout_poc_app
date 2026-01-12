import { useOrders } from '@/contexts/orders';
import { useEffect } from 'react';

function Home() {
  const { loadOrders } = useOrders();

  return <h1>Home Page</h1>;
}

export default Home;
