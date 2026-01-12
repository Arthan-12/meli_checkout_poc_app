import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import './App.css';
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';
import Users from './pages/users/Users';
import Login from './pages/login/Login';
import Products from './pages/products';
import Orders from './pages/orders';
import Home from './pages/home';
import { OrdersProvider } from './contexts/orders';

// Inicialize o Mercado Pago com seu Public Key
const publicKey = '';
initMercadoPago(publicKey);

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '50px',
        }}
      >
        <nav>
          <Link to="/">Home</Link> | <Link to="/users">Users</Link> |{' '}
          <Link to="/login">Login</Link> | <Link to="/products">Products</Link>{' '}
          | <Link to={'/orders'}>Orders</Link>
        </nav>

        {/* Routes */}
        <OrdersProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </OrdersProvider>
        {/* <h1>Botão de Pagamento</h1>
        <p>Clique no botão para realizar o pagamento.</p> */}
        {/* Renderize o botão de pagamento */}
        {/* <div style={{ width: '300px' }}>
          <Wallet
            initialization={{
              preferenceId: '',
            }}
          />
        </div> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
