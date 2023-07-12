import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/navBar/navBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import Cart from './components/cart/cart'
import { CartProvider } from './context/cartContext';
import Checkout from './components/checkout/checkout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Buscamos inspirarlos a habitar espacios con encanto y personalidad'} />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer />}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
