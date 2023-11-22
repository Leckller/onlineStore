import { AnyAction } from 'redux';
import { ERROR_FETCH, INI_FETCH,
  SUCESS_FETCH_CAT, SUCESS_FETCH_SEARCH } from '../actions/FetchActions';

const STATE = {
  loadingCat: false,
  loadingSearch: false,
  categorias: [],
  search: [],
};

const StoreFetchReducer = (state = STATE, action: AnyAction) => {
  switch (action.type) {
    case INI_FETCH: {
      if (action.payload === 'categories') return { ...state, loadingCat: true };
      return { ...state, loadingSearch: true };
    }
    case SUCESS_FETCH_CAT: {
      const data = action.payload;
      return { ...state, loadingCat: false, categorias: data };
    }
    case ERROR_FETCH: {
      console.log(action.payload.message);
      return { ...state };
    }
    case SUCESS_FETCH_SEARCH: {
      const data = action.payload;
      return { ...state, search: data, loadingSearch: false };
    }
    default: {
      return { ...state };
    }
  }
};

export default StoreFetchReducer;
