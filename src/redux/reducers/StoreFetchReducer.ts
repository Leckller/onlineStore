import { AnyAction } from 'redux';
import { ERROR_FETCH, INI_FETCH, SUCESS_FETCH } from '../actions/FetchActions';

const STATE = {
  loading: false,
  categorias: [],
};

const StoreFetchReducer = (state = STATE, action: AnyAction) => {
  switch (action.type) {
    case INI_FETCH: {
      return { ...state, loading: true };
    }
    case SUCESS_FETCH: {
      const data = action.payload;
      return { ...state, loading: false, categorias: data };
    }
    case ERROR_FETCH: {
      console.log(action.payload.message);
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};

export default StoreFetchReducer;
