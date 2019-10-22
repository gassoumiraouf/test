import {createStore,compose, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState =[];
const middleware = [thunk];

 const store= createStore (rootReducer, initialState, composeEnhancer (applyMiddleware(...middleware)) );
 export default store