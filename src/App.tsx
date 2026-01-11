import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import './App.css';
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';
import Users from './pages/users/Users';
import Login from './pages/login/Login';

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
          <Link to="/login">Login</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {/* <h1>Botão de Pagamento</h1>
        <p>Clique no botão para realizar o pagamento.</p> */}
        {/* Renderize o botão de pagamento */}
        {/* <div style={{ width: '300px' }}>
          <Wallet
            initialization={{
              preferenceId: '3073667076-b26f1065-1492-4881-9fd9-3d019de73416',
            }}
          />
        </div> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
