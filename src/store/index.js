import {createStore , combineReducers} from 'redux';
// this to make the dev tools work
import {composeWithDevTools} from 'redux-devtools-extension';
import Categories from './categories';
import Products from './products';


const rootReducer = combineReducers({Categories , Products});
const store = ()=>{
    return createStore(rootReducer , composeWithDevTools());
}

export default store();