import './App.css';
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';
import Users from './pages/users/Users';
import Login from './pages/login';
import Products from './pages/products';
import Orders from './pages/orders';
import Home from './pages/home';
import NotAllowed from './pages/notAllowed';
import RequireAuth from './guards/RequireAuth';
import { OrdersProvider } from './contexts/orders';
import { PreferenceProvider } from './contexts/preference';
import Signup from './pages/signup';

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
          <PreferenceProvider>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/not-allowed" element={<NotAllowed />} />

              <Route element={<RequireAuth />}>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/products" element={<Products />} />
                <Route path="/orders" element={<Orders />} />
              </Route>
            </Routes>
          </PreferenceProvider>
        </OrdersProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
