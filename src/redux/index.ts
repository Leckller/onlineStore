import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import StoreFetchReducer from './reducers/StoreFetchReducer';
import CarrinhoReducer from './reducers/CarrinhoReducer';

export const reducer = combineReducers({
  CarrinhoReducer,
  StoreFetchReducer,
});

const store = legacy_createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
