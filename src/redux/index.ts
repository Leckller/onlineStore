import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';

export const reducer = combineReducers({
  StoreFetchReducer,
});

const store = legacy_createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
