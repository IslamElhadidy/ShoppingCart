
import  NavbarApp  from './components/NavbarApp.jsx';
import './App.css';
import { Route, Routes } from 'react-router';
import Products from './components/Products.jsx';
import Cart from './components/Cart.jsx';

function App() {
  return (
    <div className='app'>
      <NavbarApp />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
