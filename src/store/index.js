import Categories from './categories';
import Products from './products';
import Cart from './cart';
import {createStore , combineReducers,applyMiddleware} from 'redux';

import thunk from 'redux-thunk';



const rootReducer = combineReducers({Categories , Products , Cart});
const store = ()=>{
    return createStore(rootReducer , applyMiddleware(thunk) );
}

export default store();