import { Fragment } from 'react';
import './App.css';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import { useState } from 'react';
import CartProvider from './store/CartProvider';



function App() {

  const [cartShown, setCartShown] = useState(false);

  function showCartHandler ()  {

    setCartShown(true);

  }

  function hideCartHandler() {
    setCartShown(false);
  }

  return (
    <CartProvider>
       {cartShown && <Cart onhideCart={hideCartHandler}/>}
          <Header onShowCart={showCartHandler}/>
              <main>
                <Meals/>
              </main>
    </CartProvider>   
  );
}

export default App;
