import { AnyAction } from 'redux';

const STATE = {
  carrinho: [],
};

const CarrinhoReducer = (state = STATE, action: AnyAction) => {
  switch (action.type) {
    default: {
      return {
        ...state,
      };
    }
  }
};

export default CarrinhoReducer;
