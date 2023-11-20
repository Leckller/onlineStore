import { AnyAction } from 'redux';

const STATE = {
  categorias: [],
};

const StoreFetchReducer = (state = STATE, action: AnyAction) => {
  switch (action.type) {
    default: {
      return {
        ...state,
      };
    }
  }
};

export default StoreFetchReducer;
