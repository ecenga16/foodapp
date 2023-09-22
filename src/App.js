import { Fragment } from 'react';
import './App.css';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import { useState } from 'react';



function App() {

  const [cartShown, setCartShown] = useState(false);

  function showCartHandler ()  {

    setCartShown(true);

  }

  function hideCartHandler() {
    setCartShown(false);
  }

  return (
    <Fragment>
       {cartShown && <Cart onhideCart={hideCartHandler}/>}
          <Header onShowCart={showCartHandler}/>
              <main>
                <Meals/>
              </main>
    </Fragment>   
  );
}

export default App;
