import React from 'react';
import { Fragment } from 'react';
import HeaderIMG from '../../assets/food.jpg';
import ButtonHeaderCart from './ButtonHeaderCart';


const Header = (props) => {

return  <Fragment>
            
            <header class="w-full h-11 bg-slate-600 flex justify-between items-center px-11 text-white">
                <h1>YourMeals</h1>
                <ButtonHeaderCart/>
            </header>
            <div>
                <img class="w-full h-72 object-cover origin-top-left"  src={HeaderIMG}/>
            </div>
            
        </Fragment>
}

export default Header;