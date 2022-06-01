import {createStore , combineReducers} from 'redux';
// this to make the dev tools work
import {composeWithDevTools} from 'redux-devtools-extension';
import Categories from './categories';
import Products from './products';
import Cart from './cart';

const rootReducer = combineReducers({Categories , Products , Cart});
const store = ()=>{
    return createStore(rootReducer , composeWithDevTools());
}

export default store();