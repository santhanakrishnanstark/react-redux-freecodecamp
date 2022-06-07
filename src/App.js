import { useSelector } from 'react-redux';
import './App.css';
import Auth from './components/Auth/Auth';
import Layout from './components/Layout/Layout';

function App() {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const cartItems = useSelector(state => state.cart.itemsList);

  return (
    <div className="App">
      {!isLoggedIn ? <Auth /> : <Layout />}
    </div>
  );
}

export default App;
