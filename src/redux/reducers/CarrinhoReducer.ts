import { AnyAction } from 'redux';
import { ADD_ITEM } from '../actions/CarrinhoActions';
import { ProductDetailsType } from '../../types';

const STATE = {
  carrinho: [],
};

const CarrinhoReducer = (state = STATE, action: AnyAction) => {
  switch (action.type) {
    case ADD_ITEM: {
      const item = action.payload;
      if (state.carrinho.some((i:ProductDetailsType) => i.id === item.id)) {
        return { ...state,
          carrinho: [...state.carrinho
            .filter((i:ProductDetailsType) => i.id !== item.id)] };
      }
      return { ...state, carrinho: [...state.carrinho, item] };
    }
    default: {
      return { ...state };
    }
  }
};

export default CarrinhoReducer;
